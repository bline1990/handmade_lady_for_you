"use client";

export default function PawLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white overflow-hidden">
      <div className="relative flex gap-8">
        <span className="paw-print animate-walk1">🐾</span>
        <span className="paw-print animate-walk2">🐾</span>
        <span className="paw-print animate-walk3">🐾</span>
        <span className="paw-print animate-walk4">🐾</span>
      </div>
    </div>
  );
}
