"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { FeaturedProductsSection } from "@/components/featured-products-section";
import { TechnologySection } from "@/components/technology-section";
import { TourPackagesSection } from "@/components/tour-packages-section";
import { GallerySection } from "@/components/gallery-section";
import { CollectionSection } from "@/components/collection-section";
import { EditorialSection } from "@/components/editorial-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { FooterSection } from "@/components/footer-section";

export default function Home() {
  const [selectedTour, setSelectedTour] = useState<string>("Best Trail in Knuckles Mountain Range");

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <FeaturedProductsSection />
      <TechnologySection />
      <TourPackagesSection onSelectTour={(tour) => setSelectedTour(tour)} />
      <GallerySection />
      <CollectionSection />
      <EditorialSection />
      <TestimonialsSection />
      <ContactSection selectedPackage={selectedTour} />
      <FooterSection />
    </main>
  );
}
