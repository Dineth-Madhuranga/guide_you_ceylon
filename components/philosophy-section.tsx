"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [leftX, setLeftX] = useState(-100);
  const [rightX, setRightX] = useState(100);
  const [headingOpacity, setHeadingOpacity] = useState(1);
  const rafRef = useRef<number | null>(null);

  const updateTransforms = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const windowH = window.innerHeight;
    const containerH = containerRef.current.offsetHeight;
    const progress = Math.max(0, Math.min(1, -rect.top / (containerH - windowH)));

    setLeftX(-((1 - progress) * 100));
    setRightX((1 - progress) * 100);
    setHeadingOpacity(1 - progress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateTransforms);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransforms();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateTransforms]);

  return (
    <section id="packages" className="bg-background">
      <div ref={containerRef} className="relative" style={{ height: "200vh" }}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-full">
            {/* Background Header */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
              style={{ opacity: headingOpacity }}
            >
              <h2 className="text-[11vw] font-medium leading-[0.95] tracking-tighter text-foreground md:text-[9vw] lg:text-[7.5vw] text-center px-6">
                Explore Knuckles &amp; Beyond.
              </h2>
            </div>

            {/* Sliding Tour Feature Cards */}
            <div className="relative z-10 grid grid-cols-1 gap-6 px-6 md:grid-cols-2 md:px-12 lg:px-20 max-w-7xl mx-auto">
              {/* Featured Tour 1 */}
              <Link
                href="#all-tours"
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl block cursor-pointer"
                style={{
                  transform: `translate3d(${leftX}%, 0, 0)`,
                  WebkitTransform: `translate3d(${leftX}%, 0, 0)`,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <Image
                  src="/tours/best-trail-knuckles/img-25.webp"
                  alt="Best Trail in Knuckles Mountain Range 3 Days Cave Camping"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold rounded-full bg-white/20 text-white tracking-wide uppercase">
                      3 Days / 30km • Hard
                    </span>
                    <h3 className="text-white text-xl md:text-2xl font-semibold mt-2.5">
                      Best Trail in Knuckles
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm mt-1">
                      Cave Camping &amp; 50-Yr Cardamom Hut
                    </p>
                  </div>
                  <span className="backdrop-blur-md px-4 py-2 text-sm font-semibold rounded-full bg-white text-foreground shadow">
                    From $175
                  </span>
                </div>
              </Link>

              {/* Featured Tour 2 */}
              <Link
                href="#all-tours"
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl block cursor-pointer"
                style={{
                  transform: `translate3d(${rightX}%, 0, 0)`,
                  WebkitTransform: `translate3d(${rightX}%, 0, 0)`,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <Image
                  src="/tours/dumbara-waterfall-camping/img-3.webp"
                  alt="Dumbara Waterfall & Camping Tour Walpolamulla Village"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold rounded-full bg-white/20 text-white tracking-wide uppercase">
                      2 Days / 24km • Moderate
                    </span>
                    <h3 className="text-white text-xl md:text-2xl font-semibold mt-2.5">
                      Dumbara Waterfall &amp; Village
                    </h3>
                    <p className="text-white/80 text-xs md:text-sm mt-1">
                      Walpolamulla — South Asia&apos;s Smallest Village
                    </p>
                  </div>
                  <span className="backdrop-blur-md px-4 py-2 text-sm font-semibold rounded-full bg-white text-foreground shadow">
                    From $150
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-36 lg:pb-14">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
            Certified Wilderness Expeditions
          </p>
          <p className="mt-8 leading-relaxed text-muted-foreground text-2xl md:text-3xl text-center">
            With 5 years of experience, <span className="text-foreground font-medium">Guide You Ceylon</span> crafts safe, authentic, and unforgettable journeys across the Knuckles, Pekoe Trail, Dry Zone, and Central Highlands.
          </p>
        </div>
      </div>
    </section>
  );
}
