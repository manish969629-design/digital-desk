"use client";

import { useState } from "react";

interface Props {
  serviceName: string;
}

export default function ServiceRequestForm({
  serviceName,
}: Props) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !mobile) {
      alert("Name and Mobile Number required");
      return;
    }

    const text = `
*Digital Desk Service Request*

📌 Service: ${serviceName}

👤 Name: ${name}

📱 Mobile: ${mobile}

📝 Message: ${message}
`;

    const whatsappUrl =
      `https://wa.me/919696295457?text=${encodeURIComponent(
        text
      )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-3xl font-bold mb-6">
        Apply for {serviceName}
      </h2>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded-xl p-3 mb-4"
      />

      <input
        type="tel"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="w-full border rounded-xl p-3 mb-4"
      />

      <textarea
        rows={4}
        placeholder="Write your requirement..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border rounded-xl p-3 mb-4"
      />

      <button
        onClick={handleSubmit}
        className="
          w-full
          bg-green-600
          hover:bg-green-700
          text-white
          font-bold
          py-4
          rounded-xl
        "
      >
        Send on WhatsApp
      </button>
    </div>
  );
}