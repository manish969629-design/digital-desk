"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  FileText,
  ImageIcon,
  CreditCard,
  GraduationCap,
  Plane,
  Receipt,
  Briefcase,
  Bot,
  ShieldCheck,
} from "lucide-react";

const categories = [
  {
    title: "Government",
    icon: Landmark,
    color: "from-blue-600 to-cyan-500",
    total: "100+ Services",
  },
  {
    title: "PDF Tools",
    icon: FileText,
    color: "from-red-500 to-orange-500",
    total: "25+ Tools",
  },
  {
    title: "Image Tools",
    icon: ImageIcon,
    color: "from-green-500 to-emerald-500",
    total: "20+ Tools",
  },
  {
    title: "Banking",
    icon: CreditCard,
    color: "from-violet-500 to-purple-500",
    total: "CSC Services",
  },
  {
    title: "Education",
    icon: GraduationCap,
    color: "from-pink-500 to-rose-500",
    total: "Admissions",
  },
  {
    title: "Travel",
    icon: Plane,
    color: "from-sky-500 to-blue-500",
    total: "Ticket Booking",
  },
  {
    title: "Bill Payment",
    icon: Receipt,
    color: "from-yellow-500 to-orange-500",
    total: "Utility Bills",
  },
  {
    title: "Jobs",
    icon: Briefcase,
    color: "from-indigo-500 to-blue-600",
    total: "Online Forms",
  },
  {
    title: "AI Assistant",
    icon: Bot,
    color: "from-cyan-500 to-blue-600",
    total: "Ask Manish",
  },
  {
    title: "Secure Services",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-500",
    total: "100% Safe",
  },
];

export default function Categories() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 text-blue-700 px-5 py-2 font-semibold">
            Categories
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Browse By Category
          </h2>

          <p className="mt-5 text-slate-500 max-w-2xl mx-auto">
            Everything you need in one Digital Desk platform.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-16">

          {categories.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .05,
                }}
              >

                <div className="group rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500 p-8 text-center">

                  <div
                    className={`mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r ${item.color} text-white shadow-xl group-hover:scale-110 transition`}
                  >
                    <Icon size={40} />
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-500">
                    {item.total}
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