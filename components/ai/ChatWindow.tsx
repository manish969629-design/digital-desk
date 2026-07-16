"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Send, User, X } from "lucide-react";

type Props = {
  onClose: () => void;
};

type Message = {
  role: "user" | "assistant";
  text: string;
};

export default function ChatWindow({ onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text:
        "👋 Namaste!\n\nMain Manish hoon.\nMain Digital Desk ka AI Assistant hoon.\n\nMain PAN Card, Aadhaar, Passport, Driving Licence, Government Services, CSC Services, PDF Tools aur Image Tools me aapki madad kar sakta hoon.\n\nAaj main aapki kis tarah madad kar sakta hoon?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function sendMessage(text?: string) {
    const message = (text ?? input).trim();

    if (!message || loading) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: message,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data?.reply ||
            data?.message ||
            "Unable to connect with AI."
        );
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.reply || "No response received.",
        },
      ]);
    } catch (error: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            error?.message ||
            "⚠️ Sorry, AI service is currently unavailable.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-[380px] h-[650px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-4 text-white">
        <div className="flex items-center gap-3">
          <Bot />
          <div>
            <h2 className="font-bold">Manish</h2>
            <p className="text-xs opacity-90">
              Your Digital Desk Assistant
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="hover:opacity-80"
        >
          <X />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto bg-slate-50 p-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 whitespace-pre-line ${
                msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-slate-200"
              }`}
            >
              <div className="mb-2 flex items-center gap-2 text-xs opacity-70">
                {msg.role === "assistant" ? (
                  <>
                    <Bot size={14} />
                    Manish
                  </>
                ) : (
                  <>
                    <User size={14} />
                    You
                  </>
                )}
              </div>

              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="inline-flex items-center gap-2 rounded-xl border bg-white px-4 py-3">
            <Bot size={16} />
            <span>Manish is typing...</span>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Suggested Questions */}
      <div className="border-t bg-white px-3 py-3">
        <div className="flex flex-wrap gap-2">
          {[
            "PAN Card",
            "Aadhaar Update",
            "Passport",
            "Driving Licence",
          ].map((q) => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              className="rounded-full border px-3 py-1 text-sm hover:bg-blue-50"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="border-t bg-white p-3 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Ask Manish anything..."
          className="flex-1 rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
        />

        <button
          onClick={() => sendMessage()}
          disabled={loading}
          className="rounded-xl bg-blue-600 px-4 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          <Send size={20} />
        </button>
      </div>

    </div>
  );
}