"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";

export default function ServiceGrid() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return services.filter((service) =>
      service.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden">

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-100 blur-[120px] opacity-40" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-100 blur-[120px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-5xl font-black text-slate-900">

            Explore All Services

          </h2>

          <p className="mt-5 text-slate-500 max-w-2xl mx-auto leading-8">

            Search and access every Digital Desk service
            from one beautiful platform.

          </p>

        </motion.div>

        {/* Search */}

        <div className="max-w-2xl mx-auto mt-12">

          <div className="flex items-center rounded-2xl bg-white shadow-xl border border-slate-200 overflow-hidden">

            <Search className="ml-5 text-slate-500" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search PAN Card, Aadhaar, Passport..."
              className="flex-1 px-4 py-5 outline-none"
            />

          </div>

        </div>

        {/* Grid */}

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {filtered.length > 0 ? (

            filtered.map((service, index) => (

              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .04,
                }}
              >

                <Link href={`/service/${service.slug}`}>

                  <div className="group rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500 p-8 h-full">

                    <div
                      className={`${service.color} h-20 w-20 rounded-3xl flex items-center justify-center text-5xl text-white shadow-lg group-hover:scale-110 transition`}
                    >

                      {service.icon}

                    </div>

                    <h3 className="mt-8 text-2xl font-bold text-slate-900">

                      {service.title}

                    </h3>

                    <p className="mt-4 text-slate-500 leading-7">

                      Fast online processing with expert
                      support and secure documentation.

                    </p>

                    <div className="mt-8 flex items-center justify-between">

                      <span className="font-semibold text-blue-600">

                        View Details

                      </span>

                      <ArrowRight
                        className="text-blue-600 group-hover:translate-x-2 transition"
                      />

                    </div>

                  </div>

                </Link>

              </motion.div>

            ))

          ) : (

            <div className="col-span-full rounded-3xl bg-white p-16 text-center shadow-xl">

              <h3 className="text-3xl font-bold">

                No Service Found

              </h3>

              <p className="mt-4 text-slate-500">

                Try another keyword.

              </p>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}