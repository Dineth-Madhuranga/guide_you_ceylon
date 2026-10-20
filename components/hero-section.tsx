"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const sideImages = [
  {
    src: "/tours/yahangala-legendary-hike/img-7.webp",
    alt: "Kotaganga 7 Waterfalls Expedition",
    position: "left" as const,
    span: 1,
  },
  {
    src: "/tours/yahangala-legendary-hike/img-11.webp",
    alt: "Dumbara Waterfall & Natural Pools",
    position: "left" as const,
    span: 1,
  },
  {
    src: "/tours/thunhisgala-kmp-tour/img-14.webp",
    alt: "Thunhisgala Pygmy Cloud Forest Trail",
    position: "right" as const,
    span: 1,
  },
  {
    src: "/tours/yahangala-legendary-hike/img-16.webp",
    alt: "Yahangala Ancient Rock Monolith",
    position: "right" as const,
    span: 1,
  },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  const titleOpacity = Math.max(0, 1 - scrollProgress / 0.2);
  const morphProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.45));

  // Phase 3: blur + text reveal (starts after morph is done)
  const blurProgress = Math.max(0, Math.min(1, (scrollProgress - 0.65) / 0.35));
  const blurAmount = blurProgress * 10; // max 10px blur
  const overlayOpacity = blurProgress * 0.55; // dark overlay builds up
  const scaleAmount = 1 + blurProgress * 0.05; // subtle scale up
  const textLine1Opacity = Math.max(0, Math.min(1, (blurProgress - 0.3) / 0.4));
  const textLine2Opacity = Math.max(0, Math.min(1, (blurProgress - 0.55) / 0.4));
  const textLine1Y = Math.max(0, 24 * (1 - (blurProgress - 0.3) / 0.4));
  const textLine2Y = Math.max(0, 24 * (1 - (blurProgress - 0.55) / 0.4));

  // Mobile blur + text reveal values (same cinematic approach as desktop)
  const mobileBlurProgress = Math.max(0, Math.min(1, (scrollProgress - 0.3) / 0.5));
  const mobileBlurAmount = mobileBlurProgress * 10;
  const mobileOverlayOpacity = mobileBlurProgress * 0.6;
  const mobileScaleAmount = 1 + mobileBlurProgress * 0.05;
  const mobileLine1Opacity = Math.max(0, Math.min(1, (mobileBlurProgress - 0.3) / 0.4));
  const mobileLine2Opacity = Math.max(0, Math.min(1, (mobileBlurProgress - 0.55) / 0.4));
  const mobileLine1Y = Math.max(0, 24 * (1 - (mobileBlurProgress - 0.3) / 0.4));
  const mobileLine2Y = Math.max(0, 24 * (1 - (mobileBlurProgress - 0.55) / 0.4));

  // ─── MOBILE LAYOUT ───────────────────────────────────────────────────
  if (isMobile) {
    return (
      <section ref={sectionRef} className="relative bg-background">
        <div className="sticky top-0 h-screen overflow-hidden">

          {/* Hero image — blurs and scales as you scroll */}
          <Image
            src="/images/hero-main.webp"
            alt="Knuckles Mountain Range Sri Lanka - Guide You Ceylon"
            fill
            className="object-cover brightness-90"
            priority
            style={{
              filter: `blur(${mobileBlurAmount}px)`,
              transform: `scale(${mobileScaleAmount})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/20" />
          {/* Dark overlay builds as blur increases */}
          <div className="absolute inset-0 bg-black" style={{ opacity: mobileOverlayOpacity }} />

          {/* GUIDE YOU / CEYLON — fades out before blur phase */}
          <div
            className="absolute inset-0 flex flex-col justify-end p-6 pb-10 overflow-hidden"
            style={{ opacity: titleOpacity }}
          >
            <div className="w-full text-[9vw] font-medium leading-[1] tracking-tighter text-white/80 mb-1">
              {"GUIDE YOU".split("").map((letter, idx) => (
                <span
                  key={idx}
                  className="inline-block animate-[slideUp_0.8s_ease-out_forwards] opacity-0"
                  style={{ animationDelay: `${0.06 * idx}s` }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </div>
            <h1 className="w-full text-[20vw] font-medium leading-[0.8] tracking-tighter text-white">
              {"CEYLON".split("").map((letter, idx) => (
                <span
                  key={idx}
                  className="inline-block animate-[slideUp_0.8s_ease-out_forwards] opacity-0"
                  style={{
                    animationDelay: `${0.08 * idx}s`,
                    transition: "all 1.5s",
                    transitionTimingFunction: "cubic-bezier(0.86, 0, 0.07, 1)",
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>

          {/* Blur-phase text — staggered reveal over blurred image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 pointer-events-none">
            <p
              className="text-2xl text-white/70 font-normal leading-relaxed text-center will-change-transform"
              style={{
                opacity: mobileLine1Opacity,
                transform: `translateY(${mobileLine1Y}px)`,
              }}
            >
              Real expeditions, not tourist walks.
            </p>
            <p
              className="text-3xl text-white font-semibold leading-snug mt-4 text-center will-change-transform"
              style={{
                opacity: mobileLine2Opacity,
                transform: `translateY(${mobileLine2Y}px)`,
              }}
            >
              Raw wilderness, hidden caves &amp; untouched Ceylon.
            </p>
          </div>

        </div>

        {/* Scroll spacer */}
        <div className="h-[200vh]" />
      </section>
    );
  }

  // ─── DESKTOP LAYOUT ──────────────────────────────────────────────────
  // Desktop morph values
  const centerWidth = 100 - 58 * morphProgress;
  const centerHeight = 100 - 30 * morphProgress;
  const sideWidth = 22 * morphProgress;
  const leftTranslateX = -100 + 100 * morphProgress;
  const rightTranslateX = 100 - 100 * morphProgress;
  const borderRadius = 24 * morphProgress;
  const gap = 16 * morphProgress;
  const translateY = -(15 * morphProgress);

  return (
    <section ref={sectionRef} className="relative bg-background">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Images layer */}
        <div className="flex h-full w-full items-center justify-center">
          <div
            className="relative flex h-full w-full items-stretch justify-center"
            style={{
              gap: `${gap}px`,
              padding: `${16 * morphProgress}px`,
              paddingBottom: `${80 * morphProgress}px`,
            }}
          >
            {/* Left Column */}
            <div
              className="flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${leftTranslateX}%) translateY(${translateY}%)`,
                opacity: morphProgress,
              }}
            >
              {sideImages
                .filter((img) => img.position === "left")
                .map((img, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden will-change-transform bg-muted shadow-sm"
                    style={{
                      flex: img.span,
                      borderRadius: `${borderRadius}px`,
                      filter: `blur(${blurAmount}px)`,
                      transform: `scale(${scaleAmount})`,
                    }}
                  >
                    <Image src={img.src} alt={img.alt} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
                  </div>
                ))}
            </div>

            {/* Center Main Hero */}
            <div
              className="relative overflow-hidden will-change-transform shadow-2xl"
              style={{
                width: `${centerWidth}%`,
                height: `${centerHeight}%`,
                flex: "0 0 auto",
                borderRadius: `${borderRadius}px`,
              }}
            >
              <Image
                src="/images/hero-main.webp"
                alt="Knuckles Mountain Range Sri Lanka - Guide You Ceylon"
                fill
                className="object-cover brightness-90"
                priority
                style={{
                  filter: `blur(${blurAmount}px)`,
                  transform: `scale(${scaleAmount})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/20" />
              <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />

              {/* CEYLON title (fades out early) */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 pb-10 overflow-hidden"
                style={{ opacity: titleOpacity }}
              >
                <div className="w-full text-[5vw] font-medium leading-[1] tracking-tighter text-white/80 mb-1">
                  {"GUIDE YOU".split("").map((letter, idx) => (
                    <span
                      key={idx}
                      className="inline-block animate-[slideUp_0.8s_ease-out_forwards] opacity-0"
                      style={{ animationDelay: `${0.06 * idx}s` }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
                </div>
                <h1 className="w-full text-[20vw] md:text-[13vw] font-medium leading-[0.8] tracking-tighter text-white">
                  {"CEYLON".split("").map((letter, idx) => (
                    <span
                      key={idx}
                      className="inline-block animate-[slideUp_0.8s_ease-out_forwards] opacity-0"
                      style={{
                        animationDelay: `${0.08 * idx}s`,
                        transition: "all 1.5s",
                        transitionTimingFunction: "cubic-bezier(0.86, 0, 0.07, 1)",
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </h1>
              </div>
            </div>

            {/* Right Column */}
            <div
              className="flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${rightTranslateX}%) translateY(${translateY}%)`,
                opacity: morphProgress,
              }}
            >
              {sideImages
                .filter((img) => img.position === "right")
                .map((img, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden will-change-transform bg-muted shadow-sm"
                    style={{
                      flex: img.span,
                      borderRadius: `${borderRadius}px`,
                      filter: `blur(${blurAmount}px)`,
                      transform: `scale(${scaleAmount})`,
                    }}
                  >
                    <Image src={img.src} alt={img.alt} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Phase 3: Full-viewport text overlay — sits above all images */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center px-12 pointer-events-none"
          style={{ opacity: textLine1Opacity > 0 || textLine2Opacity > 0 ? 1 : 0 }}
        >
          <p
            className="text-3xl md:text-4xl lg:text-5xl text-white/70 font-normal leading-relaxed text-center will-change-transform"
            style={{
              opacity: textLine1Opacity,
              transform: `translateY(${textLine1Y}px)`,
            }}
          >
            Real expeditions, not tourist walks.
          </p>
          <p
            className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-snug mt-4 text-center will-change-transform"
            style={{
              opacity: textLine2Opacity,
              transform: `translateY(${textLine2Y}px)`,
            }}
          >
            Raw wilderness, hidden caves &amp; untouched Ceylon.
          </p>
        </div>

      </div>

      {/* Extra scroll spacer for 3-phase animation */}
      <div className="h-[300vh]" />
    </section>
  );
}
