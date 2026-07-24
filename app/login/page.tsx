"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const adminUser =
      process.env.NEXT_PUBLIC_ADMIN_USERNAME;

    const adminPass =
      process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (
      username === adminUser &&
      password === adminPass
    ) {
      localStorage.setItem(
        "digitaldesk_admin",
        "true"
      );

      router.push("/app/admin");
    } else {
      alert("Invalid Login");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Digital Desk Admin Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border p-3 rounded-xl mb-4"
        />

        <button
          onClick={login}
          className="w-full bg-blue-600 text-white py-3 rounded-xl"
        >
          Login
        </button>
      </div>
    </main>
  );
}