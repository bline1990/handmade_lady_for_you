"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-amber-100 bg-[#E0DCD1] py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
        {/* Left */}
        <p className="text-gray-700 tracking-wide text-sm">
          HANDMADE BY{" "}
          <span className="font-semibold text-[#D6A354]">LADYFORYOU</span>
        </p>

        {/* Center */}
        <p className="text-gray-500 text-sm">© {year}</p>

        {/* Right - Website + Social */}
        <div className="flex items-center gap-4">
          <p className="text-gray-700 text-sm hidden md:inline">
            Website by{" "}
            <span className="font-semibold text-[#D6A354]">MLOKI</span>
          </p>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/handmadeby_ladyforyou?igsh=eHU3YzhrMjJqNmUz&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-amber-700 transition"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.75 2a.75.75 0 110 1.5.75.75 0 010-1.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@lady_the_cav_dog?_r=1&_t=ZN-91tTUWuSpuQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-amber-700 transition"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C12 2 12 11.96 18 12.5V8.71C18 8.71 16.5 8.5 15.5 7.5C14.5 6.5 14.25 5.5 14.25 5.5H12V19C12 19 9.5 19.5 7.5 17.5C5.5 15.5 6 13 6 13H9.5V9C9.5 9 10 8 11 8C12 8 12 2 12 2Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
