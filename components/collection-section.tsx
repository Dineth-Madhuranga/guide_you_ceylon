"use client";

import { FadeImage } from "./fade-image";
import { ShieldCheck, Compass, Utensils, Tent, FileCheck, HeartPulse } from "lucide-react";

const expeditionEssentials = [
  {
    id: 1,
    name: "Certified Wilderness Guides",
    description: "Licensed naturalists and local jungle trackers with 5+ years experience",
    badge: "Expertise",
    image: "/tours/dumbara-waterfall-camping/img-5.webp",
    icon: Compass,
  },
  {
    id: 2,
    name: "Private 4x4 Mountain Transport",
    description: "Round-trip pickup & drop-off in Kandy, Dambulla, or Matale included",
    badge: "Logistics",
    image: "/tours/thunhisgala-kmp-tour/img-16.webp",
    icon: ShieldCheck,
  },
  {
    id: 3,
    name: "Authentic Firewood-Cooked Meals",
    description: "Rich Sri Lankan breakfast, trail parcels & hot village dinners in the wild",
    badge: "Catering",
    image: "/tours/best-trail-knuckles/img-19.webp",
    icon: Utensils,
  },
  {
    id: 4,
    name: "All-Weather Camping Gear",
    description: "High-grade waterproof tents, clean sleeping bags, mats, and lighting",
    badge: "Equipment",
    image: "/tours/best-trail-knuckles/img-12.webp",
    icon: Tent,
  },
  {
    id: 5,
    name: "Forest Permits & World Heritage Passes",
    description: "Full UNESCO Conservation Forest and Wildlife Department tickets handled",
    badge: "Compliance",
    image: "/tours/kotaganga-5-peaks-cabana/img-12.webp",
    icon: FileCheck,
  },
  {
    id: 6,
    name: "Wilderness Safety & First Aid",
    description: "Emergency kits, leech protection, safety protocols, and route management",
    badge: "Safety First",
    image: "/tours/yahangala-legendary-hike/img-12.webp",
    icon: HeartPulse,
  },
];

export function CollectionSection() {
  return (
    <section id="essentials" className="bg-background">
      <div className="px-6 py-20 md:px-12 lg:px-20 md:py-10">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
          100% Fully Managed
        </span>
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl mt-1">
          Every Expedition Includes
        </h2>
      </div>

      <div className="pb-24">
        {/* Mobile Horizontal Snap Scroll */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {expeditionEssentials.map((item) => (
            <div key={item.id} className="group flex-shrink-0 w-[75vw] snap-center">
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary shadow-md">
                <FadeImage
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-md">
                    {item.badge}
                  </span>
                </div>
              </div>
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop 3-Column Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20 max-w-7xl mx-auto">
          {expeditionEssentials.map((item) => (
            <div key={item.id} className="group flex flex-col">
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary shadow-md">
                <FadeImage
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-md">
                    {item.badge}
                  </span>
                </div>
              </div>
              <div className="py-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-medium leading-snug text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
