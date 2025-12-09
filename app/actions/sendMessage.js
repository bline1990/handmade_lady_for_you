"use server";

import { supabase } from "@/lib/supabase";
import { transporter } from "@/lib/mailer";

export async function sendMessage(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // 1. spremi u supabase
  const { error } = await supabase
    .from("messages")
    .insert({ name, email, message });

  if (error) {
    console.error("Supabase error:", error);
    return { ok: false, error: "Database error" };
  }

  // 2. pošalji email
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.SMTP_USER,
      subject: "Nova poruka sa web stranice",
      html: `
        <h2>Nova poruka</h2>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Poruka:</strong><br>${message}</p>
      `,
    });
  } catch (err) {
    console.error("Email error:", err);
    return { ok: false, error: "Email error" };
  }

  return { ok: true };
}
