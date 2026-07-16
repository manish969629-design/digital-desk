"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function MergePDFPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  function handleFiles(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    if (!e.target.files) return;

    setFiles(Array.from(e.target.files));
  }

  async function handleMerge() {
    if (files.length < 2) {
      alert("Please select at least 2 PDF files.");
      return;
    }

    try {
      setLoading(true);

      const mergedPdf = await PDFDocument.create();

      for (const file of files) {
        const bytes = await file.arrayBuffer();

        const pdf = await PDFDocument.load(bytes);

        const copiedPages =
          await mergedPdf.copyPages(
            pdf,
            pdf.getPageIndices()
          );

        copiedPages.forEach((page) => {
          mergedPdf.addPage(page);
        });
      }

     const mergedBytes = await mergedPdf.save();

const blob = new Blob(
  [new Uint8Array(mergedBytes)],
  {
    type: "application/pdf",
  }
);
      const url =
        URL.createObjectURL(blob);
            
      const a =
        document.createElement("a");

      a.href = url;
      a.download = "merged.pdf";

      document.body.appendChild(a);

      a.click();

      document.body.removeChild(a);

      URL.revokeObjectURL(url);

      alert("PDF merged successfully!");
    } catch (error) {
      console.error(error);

      alert(
        "Error while merging PDFs."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white py-16">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-black">
            Merge PDF
          </h1>

          <p className="mt-4 text-lg">
            Combine multiple PDF files
            into one document.
          </p>

        </div>

      </section>

      {/* Upload Area */}

      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <div className="border-2 border-dashed border-slate-300 rounded-3xl p-16 text-center">

            <div className="text-7xl">
              📄
            </div>

            <h2 className="mt-5 text-3xl font-bold">
              Upload PDF Files
            </h2>

            <p className="mt-3 text-slate-500">
              Select multiple PDF files
              to merge.
            </p>

            <input
              type="file"
              multiple
              accept=".pdf"
              onChange={handleFiles}
              className="mt-6"
            />

          </div>

          {files.length > 0 && (

            <div className="mt-10">

              <h3 className="text-xl font-bold mb-4">
                Selected Files
              </h3>

              <div className="space-y-3">

                {files.map(
                  (file, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center rounded-xl border p-4"
                    >
                      <span>
                        {file.name}
                      </span>

                      <span className="text-sm text-slate-500">
                        {(
                          file.size /
                          1024
                        ).toFixed(1)}{" "}
                        KB
                      </span>
                    </div>
                  )
                )}

              </div>

              <button
                onClick={handleMerge}
                disabled={loading}
                className="
                  mt-8
                  w-full
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  py-4
                  text-white
                  font-bold
                  hover:opacity-90
                  disabled:opacity-50
                "
              >
                {loading
                  ? "Merging..."
                  : "Merge PDFs"}
              </button>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}