import Link from "next/link";

const tools = [
  { name: "Merge PDF", icon: "📄", link: "/pdf-tools/merge-pdf" },
  { name: "Split PDF", icon: "✂️", link: "/pdf-tools/split-pdf" },
  { name: "Compress PDF", icon: "🗜️", link: "/pdf-tools/compress-pdf" },
  { name: "PDF to JPG", icon: "🖼️", link: "/pdf-tools/pdf-to-jpg" },
];

export default function PDFToolsSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-black">
            PDF Tools
          </h2>

          <p className="mt-4 text-slate-500">
            Fast, Secure & Easy PDF Processing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {tools.map((tool) => (
            <Link key={tool.name} href={tool.link}>
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition">

                <div className="text-6xl">
                  {tool.icon}
                </div>

                <h3 className="mt-5 text-2xl font-bold">
                  {tool.name}
                </h3>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}