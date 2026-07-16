import Link from "next/link";

const tools = [
  {
    title: "Merge PDF",
    slug: "merge-pdf",
    icon: "📄",
  },
  {
    title: "Split PDF",
    slug: "split-pdf",
    icon: "✂️",
  },
  {
    title: "Compress PDF",
    slug: "compress-pdf",
    icon: "🗜️",
  },
  {
    title: "PDF to JPG",
    slug: "pdf-to-jpg",
    icon: "🖼️",
  },
  {
    title: "JPG to PDF",
    slug: "jpg-to-pdf",
    icon: "📑",
  },
  {
    title: "Rotate PDF",
    slug: "rotate-pdf",
    icon: "🔄",
  },
];

export default function PdfToolsPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-6xl font-black">
            PDF Tools
          </h1>

          <p className="mt-5 text-xl">
            Merge, Split, Compress and Convert PDFs
          </p>

        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/pdf-tools/${tool.slug}`}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">

                <div className="text-6xl">
                  {tool.icon}
                </div>

                <h2 className="mt-6 text-2xl font-bold">
                  {tool.title}
                </h2>

                <p className="mt-3 text-gray-500">
                  Fast and secure PDF processing.
                </p>

              </div>
            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}