"use client";

import { FadeImage } from "./fade-image";

const serviceItems = [
  {
    title: "Waterfall Hunting & Trekking",
    category: "Exploration",
    description: "Guided day treks to hidden waterfalls, river crossings, and pristine natural infinity pools.",
    image: "/tours/kotaganga-waterfall-chain/img-2.webp",
  },
  {
    title: "Multi-Day Expeditions",
    category: "Endurance",
    description: "2 to 3-day deep treks across UNESCO World Heritage ridges with full camping logistics.",
    image: "/tours/best-trail-knuckles/img-6.webp",
  },
  {
    title: "Wild Camping & Glamping",
    category: "Wilderness Nights",
    description: "Camp in natural caves beside roaring cascades or rustic 50-year-old cardamom huts under the stars.",
    image: "/tours/thunhisgala-kmp-tour/img-4.webp",
  },
  {
    title: "Technical Rock & Ridge Climbs",
    category: "Adrenaline",
    description: "Conquer steep summits like Yahangala, Thunhisgala, and the 5 Peaks with certified safety leads.",
    image: "/tours/yahangala-legendary-hike/img-3.webp",
  },
  {
    title: "100% Fully Managed Tours",
    category: "Full Service",
    description: "All-inclusive: 4x4 private transport, forest conservation permits, tents, and hot village meals.",
    image: "/tours/kotaganga-5-peaks-cabana/img-6.webp",
  },
  {
    title: "Private Custom Expeditions",
    category: "Custom Itineraries",
    description: "Tailor-made itineraries for photographers, small groups, or solo explorers with flexible pacing.",
    image: "/tours/knuckles-5-peaks-trek/img-3.webp",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="services" className="bg-background">
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Engineered for Safety.
          <br />
          Driven by Wilderness.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground uppercase tracking-widest font-medium">
          What We Offer
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 px-6 pb-20 md:grid-cols-2 lg:grid-cols-3 md:px-12 lg:px-20 max-w-7xl mx-auto">
        {serviceItems.map((item) => (
          <div key={item.title} className="group flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-secondary shadow-md">
              <FadeImage
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="py-5 flex-1 flex flex-col justify-between">
              <div>
                <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                  {item.category}
                </p>
                <h3 className="text-foreground text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center px-6 pb-20 md:px-12 lg:px-20" />
    </section>
  );
}
