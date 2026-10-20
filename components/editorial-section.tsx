"use client";

const specs = [
  { label: "Experience", value: "5+ Years" },
  { label: "Highland Peak", value: "1,864m" },
  { label: "Waterfalls", value: "20+ Falls" },
  { label: "Trip Management", value: "100% Fully Managed" },
];

export function EditorialSection() {
  return (
    <section className="bg-background">
      <div className="flex items-center justify-center gap-6 pb-20" />

      {/* 4-Column Specifications Grid */}
      <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
        {specs.map((item) => (
          <div
            key={item.label}
            className="border-b border-r border-border p-8 text-center last:border-r-0 md:border-b-0"
          >
            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              {item.label}
            </p>
            <p className="font-semibold text-foreground text-3xl md:text-4xl">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Cinematic Full-width Video */}
      <div className="relative h-[100dvh] w-full md:h-auto md:aspect-[21/9]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bcdafadc-cb7e-4cb7-9cbf-edcbaf2360a5_1-cNBCz5fomcLRmm1cTXSBOKCq10VP91.mp4"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none">
          <div className="text-center px-6">
            <span className="text-xs uppercase tracking-widest text-white/80 font-semibold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
              Untouched Ceylon
            </span>
            <h3 className="text-2xl md:text-4xl font-semibold text-white mt-3 drop-shadow">
              Where Ancient Legends &amp; Untamed Wilderness Meet
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
