"use client";

import { useState } from "react";
import { Bot, X, MessageCircle, Sparkles } from "lucide-react";
import ChatWindow from "./ChatWindow";

export default function FloatingAI() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-[9999] animate-in fade-in slide-in-from-bottom-5 duration-300">
          <ChatWindow onClose={() => setOpen(false)} />
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed bottom-6 right-6 z-[9999]
          h-16 w-16 rounded-full
          bg-gradient-to-r from-blue-600 to-cyan-500
          text-white shadow-2xl
          hover:scale-110
          transition-all duration-300
        "
      >
        {!open && (
          <span className="absolute inset-0 rounded-full animate-ping bg-cyan-400 opacity-30" />
        )}

        <div className="relative flex h-full w-full items-center justify-center">
          {open ? (
            <X size={28} />
          ) : (
            <Bot size={30} />
          )}
        </div>
      </button>

      {/* Desktop Label */}
      {!open && (
        <div
          className="
            fixed bottom-7 right-24 z-[9998]
            hidden md:flex items-center gap-3
            rounded-full bg-white px-5 py-3
            shadow-xl border border-slate-200
          "
        >
          <MessageCircle
            size={18}
            className="text-blue-600"
          />

          <span className="font-medium text-slate-700">
            Ask Manish
          </span>

          <Sparkles
            size={16}
            className="text-cyan-500"
          />
        </div>
      )}

      {/* Mobile Label */}
      {!open && (
        <div
          className="
            fixed bottom-24 right-5 z-[9998]
            md:hidden
            rounded-xl bg-white
            px-4 py-2
            text-sm font-medium
            shadow-lg border
          "
        >
          Ask AI
        </div>
      )}
    </>
  );
}