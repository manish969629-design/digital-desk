"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Search, User, Bot, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Government Services", href: "#services" },
  { name: "PDF Tools", href: "/pdf-tools" },
  { name: "Image Tools", href: "/image-tools" },
  { name: "CSC Services", href: "#csc" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 text-center">
          🚀 100+ Government Services • PDF Tools • Image Tools • AI Assistant
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Digital Desk"
              width={60}
              height={60}
              priority
              className="rounded-xl"
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

          <nav className="hidden xl:flex items-center gap-8">
            <Link href="/" className="font-semibold text-blue-600">
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

          <div className="hidden xl:flex items-center gap-3">

            <div className="flex items-center bg-slate-100 rounded-xl px-4 h-11 w-64">
              <Search size={18} className="text-slate-500" />

              <input
                placeholder="Search services..."
                className="bg-transparent outline-none px-3 w-full text-sm"
              />
            </div>

            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 h-11 font-semibold">
              <Bot size={18} />
              Ask Manish
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-blue-600 px-5 h-11 font-semibold text-blue-600">
              <User size={18} />
              Login
            </button>

          </div>

          <button
            onClick={() => setOpen(true)}
            className="xl:hidden"
          >
            <Menu size={30} />
          </button>

        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/50">
          <div className="absolute right-0 top-0 h-full w-80 bg-white p-6 shadow-2xl">

            <div className="flex items-center justify-between mb-8">
              <h2 className="font-bold text-xl">Menu</h2>

              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            <div className="space-y-5">

              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block"
              >
                Home
              </Link>

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block"
                >
                  {item.name}
                </Link>
              ))}

            </div>

          </div>
        </div>
      )}
    </>
  );
}