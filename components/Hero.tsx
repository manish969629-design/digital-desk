"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Bot,
  ShieldCheck,
  Landmark,
  FileText,
  ImageIcon,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-700 text-white">

      {/* Background Glow */}

      <div className="absolute inset-0 opacity-30">

        <div className="absolute left-10 top-10 h-80 w-80 rounded-full bg-cyan-500 blur-[120px]" />

        <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-blue-600 blur-[120px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >

            <span className="inline-flex items-center rounded-full bg-white/10 px-5 py-2 backdrop-blur-xl border border-white/20 text-sm">

              🚀 India's Smart Digital Service Platform

            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">

              One Platform

              <br />

              For

              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-white bg-clip-text text-transparent">

                {" "}Every Digital

              </span>

              <br />

              Service

            </h1>

            <p className="mt-8 text-blue-100 text-lg leading-8 max-w-xl">

              PAN Card, Aadhaar, Passport, Government
              Certificates, CSC Services, PDF Tools,
              Image Tools, AI Assistant and 100+
              Digital Solutions from one secure platform.

            </p>

            {/* Search */}

            <div className="mt-10 flex overflow-hidden rounded-2xl bg-white shadow-2xl">

              <Search className="ml-5 mt-4 text-slate-500" />

              <input
                placeholder="Search PAN, Aadhaar, Passport..."
                className="flex-1 px-4 py-4 text-slate-800 outline-none"
              />

              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 font-semibold hover:opacity-90">

                Search

              </button>

            </div>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap gap-5">

              <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold flex items-center gap-2 hover:scale-105 transition">

                Explore Services

                <ArrowRight size={20} />

              </button>

              <button className="rounded-2xl border border-white/30 bg-white/10 backdrop-blur-xl px-8 py-4 font-bold flex items-center gap-2 hover:bg-white hover:text-blue-700 transition">

                <Bot size={20} />

                Talk To Manish

              </button>

            </div>

            {/* Stats */}

            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">

              <div>

                <h2 className="text-4xl font-black">
                  100+
                </h2>

                <p className="text-blue-200 text-sm">
                  Services
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black">
                  5000+
                </h2>

                <p className="text-blue-200 text-sm">
                  Customers
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black">
                  99%
                </h2>

                <p className="text-blue-200 text-sm">
                  Success
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black">
                  24×7
                </h2>

                <p className="text-blue-200 text-sm">
                  Support
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT START */}
                    <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="grid grid-cols-2 gap-6"
          >

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8"
            >
              <Landmark size={46} className="text-cyan-300 mb-5" />

              <h3 className="text-2xl font-bold">
                Government
              </h3>

              <p className="mt-3 text-blue-100">
                100+ Government Services
              </p>

            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8"
            >
              <FileText size={46} className="text-orange-300 mb-5" />

              <h3 className="text-2xl font-bold">
                PDF Tools
              </h3>

              <p className="mt-3 text-blue-100">
                Merge • Split • Compress
              </p>

            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4.5 }}
              className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8"
            >
              <ImageIcon size={46} className="text-green-300 mb-5" />

              <h3 className="text-2xl font-bold">
                Image Tools
              </h3>

              <p className="mt-3 text-blue-100">
                Passport Photo • Remove BG
              </p>

            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8"
            >
              <ShieldCheck size={46} className="text-yellow-300 mb-5" />

              <h3 className="text-2xl font-bold">
                Secure
              </h3>

              <p className="mt-3 text-blue-100">
                Safe & Fast Processing
              </p>

            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="col-span-2 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-8 shadow-2xl"
            >

              <h2 className="text-3xl font-black">
                🤖 Manish AI
              </h2>

              <p className="mt-3 text-blue-50">
                Ask anything about PAN Card, Aadhaar,
                Passport, Government Schemes,
                Certificates, PDF Tools and Digital Services.
              </p>

              <button className="mt-6 rounded-xl bg-white px-6 py-3 font-bold text-blue-700 hover:scale-105 transition">

                Start AI Chat →

              </button>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}