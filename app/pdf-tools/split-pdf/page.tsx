"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";

export default function SplitPDFPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSplit() {
    if (!file) {
      alert("Please select a PDF file.");
      return;
    }

    try {
      setLoading(true);

      const bytes = await file.arrayBuffer();

      const pdf = await PDFDocument.load(bytes);

      const totalPages = pdf.getPageCount();

      for (let i = 0; i < totalPages; i++) {
        const newPdf = await PDFDocument.create();

        const [page] = await newPdf.copyPages(pdf, [i]);

        newPdf.addPage(page);

        const pdfBytes = await newPdf.save();

        const blob = new Blob(
  [new Uint8Array(pdfBytes)],
  {
    type: "application/pdf",
  }
);

        const url =
          URL.createObjectURL(blob);

        const a =
          document.createElement("a");

        a.href = url;
        a.download = `page-${i + 1}.pdf`;

        document.body.appendChild(a);

        a.click();

        document.body.removeChild(a);

        URL.revokeObjectURL(url);
      }

      alert("PDF Split Successfully!");
    } catch (error) {
      console.error(error);

      alert("Error splitting PDF.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-black">
            Split PDF
          </h1>

          <p className="mt-4 text-lg">
            Split PDF into separate pages.
          </p>

        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <div className="border-2 border-dashed border-slate-300 rounded-3xl p-16 text-center">

            <div className="text-7xl">
              ✂️
            </div>

            <h2 className="mt-5 text-3xl font-bold">
              Upload PDF
            </h2>

            <p className="mt-3 text-slate-500">
              Select a PDF file to split.
            </p>

            <input
              type="file"
              accept=".pdf"
              onChange={(e) =>
                setFile(
                  e.target.files?.[0] || null
                )
              }
              className="mt-6"
            />

          </div>

          {file && (
            <button
              onClick={handleSplit}
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
              "
            >
              {loading
                ? "Splitting..."
                : "Split PDF"}
            </button>
          )}

        </div>

      </section>

    </main>
  );
}