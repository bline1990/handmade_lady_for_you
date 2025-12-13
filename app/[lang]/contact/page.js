import { getTranslations } from "@/app/_lib/translations";
import Link from "next/link";

export const metadata = {
  title: "Contact",
};

export default async function ContactPage({ params }) {
  const { lang } = await params; // async server component, params je običan objekt
  const t = getTranslations(lang).contact;

  return (
    <section className="mt-10 min-h-screen bg-[#E0DCD1] px-6 py-20 flex justify-center">
      <div className="max-w-3xl w-full text-center space-y-10">
        {/* Heading */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold text-[#9b7e3c] tracking-tight">
            {t.title}
          </h1>
          <p className="text-gray-600 mt-3 text-lg">{t.intro}</p>
        </div>

        {/* Card */}
        <div className="bg-white border border-amber-100 shadow-sm rounded-2xl p-10 space-y-8">
          {/* Email */}
          <div className="space-y-1">
            <h2 className="text-xl font-medium text-[#9b7e3c]">
              {t.emailTitle}
            </h2>
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${t.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-amber-700 underline underline-offset-4 transition"
            >
              {t.email}
            </a>
          </div>

          {/* Social Links */}
          <div className="space-y-1">
            <h2 className="text-xl font-medium text-[#9b7e3c]">
              {t.socialTitle}
            </h2>
            <div className="flex items-center justify-center gap-6 pt-2">
              <Link
                href="https://www.instagram.com/handmadeby_ladyforyou?igsh=eHU3YzhrMjJqNmUz&utm_source=qr"
                target="_blank"
                className="text-gray-700 hover:text-amber-700 text-lg transition"
              >
                {t.socialLinks.instagram}
              </Link>
              <a
                href="https://www.tiktok.com/@lady_the_cav_dog?_r=1&_t=ZN-91tTUWuSpuQ"
                target="_blank"
                className="text-gray-700 hover:text-amber-700 text-lg transition"
              >
                {t.socialLinks.tiktok}
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-gray-500 text-sm">{t.footerNote}</p>
      </div>
    </section>
  );
}
