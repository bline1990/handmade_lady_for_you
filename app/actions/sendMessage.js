"use server";

import { redirect } from "next/navigation";
import { supabase } from "../_lib/supabase";
import { transporter } from "../_lib/mailer";

export async function sendMessage(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Spremi u Supabase
  const { error } = await supabase
    .from("inquiries") // tablica
    .insert({ name, email, message });

  if (error) {
    console.error("Supabase error:", error);
    throw new Error(error.message);
  }

  // Pošalji email
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

  // Redirect nakon uspješnog slanja
  redirect("/products/thank-you");
}
