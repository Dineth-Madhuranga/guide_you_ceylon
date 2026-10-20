"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function ScrollTextReveal({ text }: { text: string }) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const triggerStart = 0.9 * windowH;
      const triggerEnd = 0.1 * windowH;
      setProgress(
        Math.max(0, Math.min(1, (triggerStart - rect.top) / (triggerStart - triggerEnd)))
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = text.split(" ");

  return (
    <p
      ref={textRef}
      className="text-2xl font-semibold leading-relaxed md:text-3xl lg:text-4xl text-center md:text-left"
    >
      {words.map((word, idx) => {
        const threshold = idx / words.length;
        return (
          <span
            key={idx}
            className="transition-colors duration-150"
            style={{
              color: progress > threshold ? "var(--foreground)" : "#d4d4d8",
            }}
          >
            {word}
            {idx < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}

const darkSectionImages = [
  {
    src: "/tours/dumbara-waterfall-camping/img-8.webp",
    alt: "Forest Stream & Plunge Pool",
    position: "left" as const,
    span: 1,
  },
  {
    src: "/tours/kotaganga-5-peaks-cabana/img-3.webp",
    alt: "Kotaganga High Country Trail",
    position: "left" as const,
    span: 1,
  },
  {
    src: "/tours/yahangala-legendary-hike/img-6.webp",
    alt: "Yahangala Peak Escarpment",
    position: "right" as const,
    span: 1,
  },
  {
    src: "/tours/thunhisgala-kmp-tour/img-7.webp",
    alt: "Thunhisgala High Ridge",
    position: "right" as const,
    span: 1,
  },
];

export function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalScrollable = 2 * window.innerHeight;
      setScrollProgress(Math.max(0, Math.min(1, -rect.top / totalScrollable)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const morphProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));
  const centerWidth = 100 - 58 * morphProgress;
  const sideWidth = 22 * morphProgress;
  const leftTranslateX = -100 + 100 * morphProgress;
  const rightTranslateX = 100 - 100 * morphProgress;
  const borderRadius = 24 * morphProgress;
  const gap = 16 * morphProgress;

  return (
    <section ref={sectionRef} className="relative bg-foreground text-background">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          <div
            className="relative flex h-full w-full items-stretch justify-center"
            style={{
              gap: `${gap}px`,
              padding: `${16 * morphProgress}px`,
            }}
          >
            {/* Left Column */}
            <div
              className="flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${leftTranslateX}%)`,
                opacity: morphProgress,
              }}
            >
              {darkSectionImages
                .filter((img) => img.position === "left")
                .map((img, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden will-change-transform shadow-lg"
                    style={{
                      flex: img.span,
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
            </div>

            {/* Center Aerial Hero */}
            <div
              className="relative overflow-hidden will-change-transform shadow-2xl"
              style={{
                width: `${centerWidth}%`,
                height: "100%",
                flex: "0 0 auto",
                borderRadius: `${borderRadius}px`,
              }}
            >
              <Image
                src="/tours/best-trail-knuckles/img-18.webp"
                alt="Aerial view of Knuckles Conservation Forest Sri Lanka"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <h2 className="max-w-3xl font-medium leading-tight tracking-tight text-white md:text-5xl lg:text-7xl text-5xl">
                  {["Wilderness", "Meets", "Heritage."].map((word, idx) => {
                    const delayStart = 0.07 * idx;
                    const wordProgress = Math.max(
                      0,
                      Math.min(1, (scrollProgress - delayStart) / 0.07)
                    );
                    return (
                      <span
                        key={idx}
                        className="inline-block"
                        style={{
                          opacity: 1 - wordProgress,
                          filter: `blur(${10 * wordProgress}px)`,
                          transition: "opacity 0.1s linear, filter 0.1s linear",
                          marginRight: idx < 2 ? "0.3em" : "0",
                        }}
                      >
                        {word}
                        {idx === 1 && <br />}
                      </span>
                    );
                  })}
                </h2>
              </div>
            </div>

            {/* Right Column */}
            <div
              className="flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${rightTranslateX}%)`,
                opacity: morphProgress,
              }}
            >
              {darkSectionImages
                .filter((img) => img.position === "right")
                .map((img, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden will-change-transform shadow-lg"
                    style={{
                      flex: img.span,
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[200vh]" />

      <div className="relative overflow-hidden bg-background px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-6">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              Our Vision &amp; Philosophy
            </span>
          </div>
          <ScrollTextReveal text="To be Sri Lanka's most trusted guide to wilderness adventures, connecting the world to the raw beauty, culture, and soul of Ceylon through responsible trekking and camping experiences. With 5 years of certified experience, we specialize in one-day and multi-day expeditions in the Knuckles, Pekoe Trail, Dry Zone, and Central Highlands." />
        </div>
      </div>
    </section>
  );
}
