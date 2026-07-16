"use client";

import { useState } from "react";

export default function CompressPDFPage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleCompress() {
    if (!file) {
      alert("Please select a PDF file.");
      return;
    }

    try {
      setLoading(true);

      // Placeholder compression
      // Future: server-side PDF compression

      const url = URL.createObjectURL(file);

      const a = document.createElement("a");

      a.href = url;
      a.download = `compressed-${file.name}`;

      document.body.appendChild(a);

      a.click();

      document.body.removeChild(a);

      URL.revokeObjectURL(url);

      alert(
        "Demo compression complete. Server-side compression can be added later."
      );
    } catch (error) {
      console.error(error);

      alert("Compression failed.");
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
            Compress PDF
          </h1>

          <p className="mt-4 text-lg">
            Reduce PDF file size quickly.
          </p>

        </div>

      </section>

      {/* Upload Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <div className="border-2 border-dashed border-slate-300 rounded-3xl p-16 text-center">

            <div className="text-7xl">
              🗜️
            </div>

            <h2 className="mt-5 text-3xl font-bold">
              Upload PDF
            </h2>

            <p className="mt-3 text-slate-500">
              Select a PDF file to compress.
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

            <div className="mt-10">

              <div className="rounded-xl border p-4 flex justify-between">

                <span>{file.name}</span>

                <span>
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </span>

              </div>

              <button
                onClick={handleCompress}
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
                  disabled:opacity-50
                "
              >
                {loading
                  ? "Compressing..."
                  : "Compress PDF"}
              </button>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}