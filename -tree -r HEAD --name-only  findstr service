import { services } from "@/data/services";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Service Not Found
        </h1>
      </div>
    );
  }

  return (
    <main className="bg-gray-100 min-h-screen">
      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white">
        <div className="max-w-6xl mx-auto py-16 px-6">
          <p className="text-sm opacity-80">
            Home / Services / {service.title}
          </p>

          <div className="mt-8 text-7xl">
            {service.icon}
          </div>

          <h1 className="text-5xl font-bold mt-5">
            {service.title}
          </h1>

          <p className="mt-5 text-lg opacity-90 max-w-2xl">
            Digital Desk provides a fast, secure and easy online
            application process for {service.title}.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">
              About this Service
            </h2>

            <p className="text-gray-600 leading-8">
              Complete your {service.title} application online through
              Digital Desk.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">
              Apply for {service.title}
            </h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-xl mb-4"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border p-3 rounded-xl mb-4"
            />

            <textarea
              placeholder="Write your requirement..."
              className="w-full border p-3 rounded-xl mb-4 h-28"
            />

            <a
              href={`https://wa.me/919696295457?text=Hello Digital Desk, I want service for ${service.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl mb-4"
            >
              Send on WhatsApp
            </a>

            <Link
              href="/"
              className="block text-center mt-8 text-blue-600 font-semibold"
            >
              Back to Home
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}