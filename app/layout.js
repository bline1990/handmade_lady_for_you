import "./globals.css";

export const metadata = {
  title: {
    template: "%s / Handmade by LadyForYou",
    default: "Welcome / Handmade by LadyForYou",
  },
  keywords: [
    "handmade",
    "ručno rađeni dodaci",
    "modni dodaci za pse",
    "unikatni pokloni",
  ],
  description:
    "Handmade Lady For You nudi unikatne ručno izrađene modne dodatke za pse — mašne, marame i gumice.",
  type: "website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
