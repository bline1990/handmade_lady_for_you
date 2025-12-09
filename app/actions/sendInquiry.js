"use server";

import { transporter } from "../_lib/mailer";
import { supabase } from "../_lib/supabase";

export async function sendInquiry(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const contact = formData.get("contact");
  const message = formData.get("message");

  // 1. Spremi u Supabase
  const { error } = await supabase.from("inquiries").insert({
    name,
    email,
    contact,
    message,
  });

  if (error) {
    console.error("DB ERROR:", error);
    return { ok: false, error: "Database error" };
  }

  // 2. Pošalji email klijentu
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.SMTP_USER,
      subject: "Novi upit s web stranice",
      html: `
        <h2>Novi upit</h2>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Kontakt:</strong> ${contact}</p>
        <p><strong>Poruka:</strong><br>${message}</p>
      `,
    });
  } catch (err) {
    console.error("MAIL ERROR:", err);
    return { ok: false, error: "Email error" };
  }

  return { ok: true };
}
