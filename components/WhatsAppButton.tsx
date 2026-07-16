"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919696295457"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-6 bottom-6 z-[9999] h-16 w-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition"
    >
      <MessageCircle size={32} />
    </a>
  );
}