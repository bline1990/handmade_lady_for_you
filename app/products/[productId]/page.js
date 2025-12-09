"use client";

import { sendInquiry } from "@/app/actions/sendInquiry";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function UpitPage() {
  const searchParams = useSearchParams();
  const product = searchParams.get("products") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    message: product ? `Upit za proizvod: ${product}` : "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Šaljem...");

    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("email", form.email);
    fd.append("contact", form.contact);
    fd.append("message", form.message);

    const res = await sendInquiry(fd);

    if (res.ok) {
      setStatus("Upit uspješno poslan ✔️");
      alert("Vaš upit je poslan! Javimo se povratno ❤️");
      setForm({ name: "", email: "", contact: "", message: "" });
    } else {
      setStatus("Greška: " + res.error);
      alert("Dogodila se greška, pokušajte ponovno.");
    }
  };

  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">Pošaljite upit</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Ime i prezime"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="text"
          name="contact"
          placeholder="Kontakt broj"
          value={form.contact}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Vaš upit"
          value={form.message}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Pošalji upit
        </button>

        {status && <p className="text-center text-gray-600">{status}</p>}
      </form>
    </main>
  );
}
