"use client";

import Link from "next/link";
import { services } from "@/data/services";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FeaturedServices() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">

      {/* Background Glow */}

      <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-cyan-200 blur-[120px] opacity-30" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-200 blur-[120px] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">

            <Sparkles size={16} />

            Most Popular Services

          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">

            Featured Services

          </h2>

          <p className="mt-5 text-slate-500 max-w-2xl mx-auto leading-8">

            Access PAN Card, Aadhaar, Passport, Government
            Certificates, CSC Services and many more digital
            solutions from one trusted platform.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {services.slice(0, 4).map((service, index) => (

            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .12,
              }}
            >

              <Link href={`/service/${service.slug}`}>

                <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3">

                  {/* Top */}

                  <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-500" />

                  <div className="p-8">

                    <div className="flex items-center justify-between">

                      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 text-5xl text-white shadow-lg group-hover:scale-110 transition">

                        {service.icon}

                      </div>

                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">

                        Popular

                      </span>

                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-slate-900">

                      {service.title}

                    </h3>

                    <p className="mt-4 text-slate-500 leading-7">

                      Fast processing, secure application,
                      expert verification and instant support.

                    </p>

                    {/* Buttons */}

                    <div className="mt-8 flex items-center justify-between">

                      <button className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-semibold text-white hover:opacity-90">

                        Apply Now

                      </button>

                      <ArrowRight
                        className="text-blue-600 group-hover:translate-x-2 transition"
                        size={22}
                      />

                    </div>

                  </div>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}