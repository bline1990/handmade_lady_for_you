import { sendMessage } from "@/app/actions/sendMessage";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#E0DCD1] px-6">
      <h1 className="text-3xl md:text-4xl font-playfair mb-6">
        Kontaktirajte nas
      </h1>

      <form
        action={sendMessage}
        className="flex flex-col gap-4 max-w-lg w-full"
      >
        <input
          name="name"
          placeholder="Ime"
          required
          className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#826829cb]"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#826829cb]"
        />
        <textarea
          name="message"
          placeholder="Poruka"
          required
          rows={5}
          className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#826829cb] resize-none"
        />
        <button
          type="submit"
          className="bg-[#826829cb] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#6e5424] active:scale-95 transition transform"
        >
          Pošalji
        </button>
      </form>
    </main>
  );
}
