"use client";

import { useState } from "react";
import { sendMessage } from "@/app/actions/sendMessage";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Šaljem...");

    const formData = new FormData(e.target);

    const res = await sendMessage(formData);

    if (res.ok) {
      setStatus("Poruka poslana!");
      e.target.reset();
    } else {
      setStatus("Greška: " + res.error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-lg">
      <input name="name" placeholder="Ime" required className="border p-2" />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="border p-2"
      />
      <textarea
        name="message"
        placeholder="Poruka"
        required
        className="border p-2"
      />
      <button className="bg-black text-white p-2">Pošalji</button>
      <p>{status}</p>
    </form>
  );
}
