"use server";

import { supabase } from "@/lib/supabase";
import { transporter } from "@/lib/mailer";

export async function sendInquiry(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const contact = formData.get("contact");
  const message = formData.get("message");

  // Spremanje u Supabase
  const { error } = await supabase
    .from("inquiries")
    .insert({ name, email, contact, message });

  if (error) return { ok: false, error: "Database error" };

  // Slanje emaila
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.SMTP_USER,
      subject: `Upit od ${name}`,
      html: `
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Kontakt:</strong> ${contact}</p>
        <p><strong>Poruka:</strong><br>${message}</p>
      `,
    });
  } catch (err) {
    return { ok: false, error: "Email error" };
  }

  return { ok: true };
}
