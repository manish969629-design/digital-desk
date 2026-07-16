"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  Headphones,
  BadgeCheck,
  Bot,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "100% Secure",
    desc: "Your documents and personal information are protected with secure processing.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Fast Processing",
    desc: "Most applications are submitted quickly with expert verification.",
    icon: Clock3,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "24×7 Support",
    desc: "Get help whenever you need through Digital Desk support.",
    icon: Headphones,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Trusted Platform",
    desc: "Thousands of customers trust Digital Desk for government services.",
    icon: BadgeCheck,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "AI Assistant",
    desc: "Ask Manish AI about government services, PDF tools and more.",
    icon: Bot,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "One Platform",
    desc: "Government services, CSC, PDF, Image Tools and much more in one place.",
    icon: Sparkles,
    color: "from-pink-500 to-rose-500",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-100 blur-[120px] opacity-40" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-100 blur-[120px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
            Why Digital Desk
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Why Choose Us?
          </h2>

          <p className="mt-5 text-slate-500 max-w-3xl mx-auto leading-8">
            Digital Desk is built to provide fast, secure and professional
            digital services with modern technology and AI assistance.
          </p>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

          <div className="rounded-3xl bg-white shadow-lg p-6 text-center">
            <h3 className="text-4xl font-black text-blue-600">
              5000+
            </h3>
            <p className="text-slate-500 mt-2">
              Happy Customers
            </p>
          </div>

          <div className="rounded-3xl bg-white shadow-lg p-6 text-center">
            <h3 className="text-4xl font-black text-cyan-600">
              100+
            </h3>
            <p className="text-slate-500 mt-2">
              Services
            </p>
          </div>

          <div className="rounded-3xl bg-white shadow-lg p-6 text-center">
            <h3 className="text-4xl font-black text-green-600">
              99%
            </h3>
            <p className="text-slate-500 mt-2">
              Success Rate
            </p>
          </div>

          <div className="rounded-3xl bg-white shadow-lg p-6 text-center">
            <h3 className="text-4xl font-black text-purple-600">
              24×7
            </h3>
            <p className="text-slate-500 mt-2">
              Support
            </p>
          </div>

        </div>

        {/* Features */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
              >

                <div className="group rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out p-8 h-full">

                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r ${item.color} text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition`}
                  >
                    <Icon size={38} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-slate-500 leading-7">
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}