"use client";

import { useState } from "react";

type Props = {
  service: string;
};

export default function ServiceRequestForm({
  service,
}: Props) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsApp = () => {
    if (!name.trim() || !mobile.trim()) {
      alert("Please enter Name and Mobile Number");
      return;
    }

    const text = `
*New Service Request*

Name: ${name}
Mobile: ${mobile}
Service: ${service}

Message:
${message}
`;

    const whatsappUrl = `https://wa.me/919696295457?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-3 rounded-xl"
      />

      <input
        type="tel"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="w-full border p-3 rounded-xl"
      />

      <textarea
        placeholder="Write your requirement..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border p-3 rounded-xl h-28"
      />

      <button
        onClick={sendWhatsApp}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
      >
        Send on WhatsApp
      </button>
    </div>
  );
}