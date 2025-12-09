export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center gap-6">
        {/* PAW ICON */}
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 bg-amber-600 rounded-full animate-pulse shadow-lg flex items-center justify-center">
            <span className="text-white text-3xl">🐾</span>
          </div>
        </div>

        {/* TEXT */}
        <p className="text-amber-700 font-semibold tracking-wide text-sm">
          Učitavanje… za psećom brzinom 🐶
        </p>
      </div>
    </div>
  );
}
