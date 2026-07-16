"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  Search,
  User,
  Bot,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    name: "Government Services",
    href: "#services",
  },
  {
    name: "PDF Tools",
    href: "/pdf-tools",
  },
  {
    name: "Image Tools",
    href: "/image-tools",
  },
  {
    name: "CSC Services",
    href: "#csc",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 text-center font-medium">
          🚀 100+ Government Services • PDF Tools • Image Tools • AI Assistant
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
  src="/images/logo.png"
  alt="Digital Desk"
  width={80}
  height={80}
  className="w-[80px] h-auto rounded-xl"
/>
            <div>
              <h1 className="font-extrabold text-2xl text-slate-900">
                Digital Desk
              </h1>

              <p className="text-xs text-slate-500">
                One Platform For Every Digital Service
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex items-center gap-8">
            <Link
              href="/"
              className="font-semibold text-blue-600"
            >
              Home
            </Link>

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-slate-700 hover:text-blue-600 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden xl:flex items-center gap-3">

            {/* Search */}
            <div className="flex items-center bg-slate-100 rounded-xl px-4 h-11 w-64">
              <Search
                size={18}
                className="text-slate-500"
              />

              <input
                type="text"
                placeholder="Search services..."
                className="bg-transparent outline-none px-3 w-full text-sm"
              />
            </div>

            {/* AI Button */}
            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 h-11 font-semibold hover:scale-105 transition">
              <Bot size={18} />
              Ask Manish
            </button>

            {/* Login */}
            <button className="flex items-center gap-2 rounded-xl border border-blue-600 px-5 h-11 font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition">
              <User size={18} />
              Login
            </button>
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen(true)}
            className="xl:hidden"
          >
            <Menu size={30} />
          </button>

        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/50">

          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl p-6">

            <div className="flex items-center justify-between mb-8">

              <h2 className="font-bold text-xl">
                Menu
              </h2>

              <button
                onClick={() => setOpen(false)}
              >
                <X size={24} />
              </button>

            </div>

            <div className="space-y-5">

              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block font-medium"
              >
                Home
              </Link>

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block font-medium"
                >
                  {item.name}
                </Link>
              ))}

              <button className="w-full mt-6 rounded-xl bg-blue-600 py-3 text-white font-semibold">
                🤖 Ask Manish
              </button>

              <button className="w-full rounded-xl border py-3 font-semibold">
                Login
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}