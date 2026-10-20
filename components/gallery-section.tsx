"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const galleryItems = [
  {
    src: "/tours/best-trail-knuckles/img-14.webp",
    title: "Duwili Ella Cave Camp",
    location: "Knuckles Conservation Forest",
    alt: "Duwili Ella Natural Cave Campsite Sri Lanka",
  },
  {
    src: "/tours/kotaganga-waterfall-chain/img-4.webp",
    title: "Kotaganga 7 Waterfalls Chain",
    location: "Thangappuwa Rainforest",
    alt: "Kotaganga 7 Waterfalls cascading in Knuckles",
  },
  {
    src: "/tours/dumbara-waterfall-camping/img-12.webp",
    title: "Walpolamulla Village Valley",
    location: "South Asia's Smallest Village",
    alt: "Walpolamulla Isolated Village Valley Ceylon",
  },
  {
    src: "/tours/yahangala-legendary-hike/img-9.webp",
    title: "Yahangala Bedrock Monolith",
    location: "Knuckles Dry Zone & Elephant Plain",
    alt: "Yahangala Rock Summit overlooking Mahaweli River",
  },
  {
    src: "/tours/thunhisgala-kmp-tour/img-11.webp",
    title: "50-Yr KMP Cardamom Hut",
    location: "Deep Cloud Forest Shelter",
    alt: "Historic Cardamom Hut Camping Knuckles Sri Lanka",
  },
  {
    src: "/tours/knuckles-5-peaks-trek/img-5.webp",
    title: "1,864m 5 Peaks Summit",
    location: "Leopard Trail Clenched Fist",
    alt: "Knuckles 5 Peaks High Altitude Ridgeline",
  },
  {
    src: "/tours/kotaganga-5-peaks-cabana/img-9.webp",
    title: "Kotaganga High Plains & Cabana",
    location: "Thangappuwa Highland Cabanas",
    alt: "Kotaganga Grasslands and Mountain Cabana",
  },
  {
    src: "/tours/best-trail-knuckles/img-18.webp",
    title: "Ranamure Oya Fresh Stream",
    location: "Paddy Valley River Bathing",
    alt: "Ranamure Oya Crystal Clear Mountain River Dip",
  },
];

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState("100vh");
  const [translateX, setTranslateX] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (!galleryRef.current) return;
      const scrollW = galleryRef.current.scrollWidth;
      const innerW = window.innerWidth;
      const innerH = window.innerHeight;
      setSectionHeight(`${innerH + (scrollW - innerW)}px`);
    };

    const timer = setTimeout(handleResize, 100);
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateScroll = useCallback(() => {
    if (!sectionRef.current || !galleryRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const maxScroll = galleryRef.current.scrollWidth - window.innerWidth;
    const progress = Math.min(1, Math.max(0, -rect.top) / maxScroll);
    setTranslateX(-(progress * maxScroll));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateScroll]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full items-center">
          <div
            ref={galleryRef}
            className="flex gap-6 px-6 md:px-12"
            style={{
              transform: `translate3d(${translateX}px, 0, 0)`,
              WebkitTransform: `translate3d(${translateX}px, 0, 0)`,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              perspective: 1000,
              WebkitPerspective: 1000,
              touchAction: "pan-y",
            }}
          >
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="relative h-[70vh] w-[85vw] flex-shrink-0 overflow-hidden rounded-2xl md:w-[60vw] lg:w-[45vw] shadow-xl group"
                style={{
                  transform: "translateZ(0)",
                  WebkitTransform: "translateZ(0)",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority={idx < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white/70 text-xs font-medium uppercase tracking-widest">
                    {item.location}
                  </p>
                  <h3 className="text-white text-xl md:text-2xl font-semibold mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
