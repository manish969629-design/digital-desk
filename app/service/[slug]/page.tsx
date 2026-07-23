import ServiceRequestForm from "@/components/ServiceRequestForm";
import { services } from "@/data/services";
import Link from "next/link";
import ServiceRequestForm from "@/components/ServiceRequestForm";

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
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-600">
            Service Not Found
          </h1>

          <Link
            href="/"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            Back Home
          </Link>
        </div>
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

          {/* Left Side */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-3xl font-bold mb-6">
              About this Service
            </h2>

            <p className="text-gray-600 leading-8">
              Complete your {service.title} application online through
              Digital Desk. Upload documents, verify information,
              track status and get expert support from our team.
            </p>

            <h3 className="text-2xl font-semibold mt-10 mb-5">
              Benefits
            </h3>

            <ul className="space-y-3 text-gray-700">
              <li>✅ Fast Online Processing</li>
              <li>✅ Secure Document Handling</li>
              <li>✅ Expert Guidance</li>
              <li>✅ Quick Customer Support</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-10 mb-5">
              Why Choose Digital Desk?
            </h3>

            <p className="text-gray-600 leading-8">
              We help customers with PAN Card, Aadhaar, Passport,
              Government Certificates, CSC Services and many other
              digital services with fast and reliable support.
            </p>

          </div>

          {/* Right Side Form */}
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-6">
              Apply for {service.title}
            </h2>

            <ServiceRequestForm
              service={service.title}
            />

            <Link
              href="/"
              className="block text-center mt-8 text-blue-600 font-semibold"
            >
              ← Back to Home
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}