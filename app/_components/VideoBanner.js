export default function VideoBanner() {
  return (
    <section className="relative h-[500px] my-16">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video-1-izrada-masne.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
/*<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-playfair text-[#F3E9D7] text-center px-6">
          Svaka mašna izrađena je ručno, s puno ljubavi
        </h2>
      </div>*/
