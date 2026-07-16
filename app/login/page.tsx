"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Mail, Lock, Phone } from "lucide-react";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-700 via-cyan-600 to-blue-900 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        <div className="text-center">

          <h1 className="text-4xl font-black text-slate-900">
            Digital Desk
          </h1>

          <p className="text-slate-500 mt-2">
            {isLogin ? "Login to your account" : "Create new account"}
          </p>

        </div>

        <div className="mt-8 space-y-5">

          {!isLogin && (
            <div className="relative">
              <User className="absolute left-4 top-4 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-500"
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-4 top-4 text-slate-400" size={18} />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-500"
            />
          </div>

          {!isLogin && (
            <div className="relative">
              <Phone className="absolute left-4 top-4 text-slate-400" size={18} />
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-500"
              />
            </div>
          )}

          <div className="relative">
            <Lock className="absolute left-4 top-4 text-slate-400" size={18} />
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-500"
            />
          </div>

          <button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-white font-bold hover:opacity-90">
            {isLogin ? "Login" : "Create Account"}
          </button>

        </div>

        <div className="mt-6 text-center">

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 font-semibold"
          >
            {isLogin
              ? "Create New Account"
              : "Already have an account? Login"}
          </button>

        </div>

        <div className="mt-8 text-center">

          <Link
            href="/"
            className="text-slate-500 hover:text-blue-600"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </main>
  );
}