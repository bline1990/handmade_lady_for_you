import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://handmadeladyforyou.com"),

  title: {
    default: "Handmade Lady For You",
    template: "%s | Handmade Lady For You",
  },

  description:
    "Ručni rad, unikatne mašne i modni dodaci izrađeni s ljubavlju od pažljivo odabranih materijala.",

  keywords: [
    "handmade",
    "ručna izrada",
    "mašne",
    "modni dodaci",
    "pokloni",
    "unikatni proizvodi",
  ],

  authors: [{ name: "Handmade Lady For You" }],
  creator: "Handmade Lady For You",
  publisher: "Handmade Lady For You",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: "https://handmadeladyforyou.com",
    siteName: "Handmade Lady For You",
    title: "Handmade Lady For You",
    description:
      "Unikatni ručno rađeni modni dodaci – kvaliteta, stil i ljubav u svakom detalju.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Handmade Lady For You",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Handmade Lady For You",
    description:
      "Unikatni ručno rađeni modni dodaci – kvaliteta, stil i ljubav u svakom detalju.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-black">{children}</body>
    </html>
  );
}
