"use client";

import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-background">
      <div className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
            About Guide You Ceylon
          </span>
          <p className="mt-4 text-2xl leading-relaxed text-foreground md:text-3xl lg:text-[2.25rem] lg:leading-snug font-medium">
            Guide You Ceylon was born out of a relentless passion for Sri Lanka&apos;s wildest corners. From high-altitude cloud forests and 50-year-old cardamom huts to ancient cave shelters beneath roaring waterfalls, we guide travelers into landscapes where roads never reached.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-border">
            <div>
              <h4 className="font-semibold text-foreground text-base">Responsible Trekking</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Zero-plastic policies, leave-no-trace ethics, and dedicated protection of UNESCO fragile ecosystems.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-base">Community First</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Direct employment of village trackers, family-run eco-cabanas, and home-cooked regional meals.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground text-base">Certified Safety</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Licensed guides, comprehensive wilderness first aid, risk assessment, and forest department registration.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative aspect-[16/9] w-full max-h-[700px] overflow-hidden">
        <Image
          src="/tours/yahangala-legendary-hike/img-15.webp"
          alt="Wilderness trekking Knuckles Mountain Range Sri Lanka"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>
    </section>
  );
}
