export default function Hero() {
    return (
      <section className="bloom-section min-h-screen flex flex-col items-center justify-center text-center">
        <p className="font-script text-3xl md:text-4xl text-[#C9A96E] mb-4">
          Happy Birthday
        </p>
  
        <div className="relative mb-6">
          <div className="absolute -inset-3 rounded-full border border-[#E8B4B8]/60" />
          <div className="absolute -inset-6 rounded-full border border-[#E8B4B8]/30" />
          <img
            src="/photos/15.jpeg"
            alt="Foto utama"
            className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
          />
        </div>
  
        <h1 className="font-script text-5xl md:text-7xl text-[#B5838D] mb-4">
          Istriku
        </h1>
  
        <p className="max-w-md text-[#8A7B72] text-lg">
          Selamat ulang tahun, cintaku. sedikit ucapan untuk istri mas yang paling cantik.
        </p>
  
        <div className="mt-14 text-[#C9A96E] animate-bounce">⌄</div>
      </section>
    );
  }