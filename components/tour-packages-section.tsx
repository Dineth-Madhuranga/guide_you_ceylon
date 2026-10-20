"use client";

import { useState } from "react";
import Image from "next/image";
import { TOUR_PACKAGES, TourPackage } from "@/data/tours";
import { Clock, MapPin, Gauge, Check, X, ArrowRight, ShieldCheck, Backpack } from "lucide-react";

interface TourModalProps {
  tour: TourPackage | null;
  onClose: () => void;
  onBook: (tourTitle: string) => void;
}

function TourDetailModal({ tour, onClose, onBook }: TourModalProps) {
  if (!tour) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-background rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header with image */}
        <div className="relative h-64 w-full flex-shrink-0">
          <Image
            src={tour.coverImage}
            alt={tour.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-6 left-6 right-6">
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white backdrop-blur-md uppercase tracking-wider">
              {tour.duration} • {tour.difficulty} Difficulty
            </span>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mt-2">
              {tour.title}
            </h2>
            <p className="text-white/80 text-sm mt-1">{tour.tagline}</p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 bg-secondary rounded-2xl text-center">
            <div>
              <p className="text-xs uppercase text-muted-foreground font-semibold">Duration</p>
              <p className="font-semibold text-foreground text-sm mt-0.5">{tour.duration}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-muted-foreground font-semibold">Distance</p>
              <p className="font-semibold text-foreground text-sm mt-0.5">{tour.distance}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-muted-foreground font-semibold">Price</p>
              <p className="font-bold text-foreground text-base mt-0.5">{tour.price}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-muted-foreground font-semibold">Min. Age</p>
              <p className="font-semibold text-foreground text-sm mt-0.5">{tour.ageRange}</p>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-base font-semibold text-foreground mb-2">Expedition Overview</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{tour.overview}</p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-base font-semibold text-foreground mb-2.5">Key Highlights</h4>
            <ul className="space-y-2">
              {tour.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Day by Day Plan */}
          <div>
            <h4 className="text-base font-semibold text-foreground mb-3">Day-by-Day Itinerary</h4>
            <div className="space-y-4">
              {tour.tourPlan.map((d, i) => (
                <div key={i} className="p-4 rounded-xl border border-border bg-card">
                  <h5 className="font-semibold text-foreground text-sm flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-foreground text-background text-xs flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
                    {d.day}{d.title ? `: ${d.title}` : ""}
                  </h5>
                  <ul className="mt-3 space-y-1.5 pl-8 list-disc text-xs md:text-sm text-muted-foreground">
                    {d.points.map((p, idx) => (
                      <li key={idx} className="leading-relaxed">{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-secondary/60">
              <h5 className="font-semibold text-foreground text-sm flex items-center gap-1.5 mb-2.5">
                <ShieldCheck size={16} className="text-green-600" /> What&apos;s Included
              </h5>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                {tour.includes.map((inc, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <Check size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-secondary/60">
              <h5 className="font-semibold text-foreground text-sm flex items-center gap-1.5 mb-2.5">
                <Backpack size={16} className="text-primary" /> What to Bring
              </h5>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                {tour.whatToBring.map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/60 flex-shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 md:p-6 border-t border-border flex items-center justify-between bg-card flex-shrink-0">
          <div>
            <span className="text-xs text-muted-foreground">Total Price</span>
            <p className="text-xl md:text-2xl font-bold text-foreground">
              {tour.price} <span className="text-xs font-normal text-muted-foreground">/ person</span>
            </p>
          </div>
          <button
            onClick={() => {
              onBook(tour.title);
              onClose();
            }}
            className="px-6 py-2.5 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow"
          >
            Book This Expedition <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function TourPackagesSection({
  onSelectTour,
}: {
  onSelectTour?: (tourTitle: string) => void;
}) {
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);
  const [filter, setFilter] = useState<"all" | "1day" | "multiday">("all");

  const filteredTours = TOUR_PACKAGES.filter((t) => {
    if (filter === "1day") return t.duration.includes("1 Day");
    if (filter === "multiday") return t.duration.includes("Days");
    return true;
  });

  const handleBook = (tourTitle: string) => {
    if (onSelectTour) {
      onSelectTour(tourTitle);
    }
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="all-tours" className="bg-background py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              Curated Expeditions
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mt-2">
              Our Tour Packages
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mt-2 max-w-xl">
              Authentic trekking, waterfall hunting, and cave camping expeditions across the UNESCO Knuckles Mountain Range.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-secondary p-1.5 rounded-full self-start md:self-auto">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === "all"
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All Packages ({TOUR_PACKAGES.length})
            </button>
            <button
              onClick={() => setFilter("1day")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === "1day"
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              1-Day Hikes
            </button>
            <button
              onClick={() => setFilter("multiday")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === "multiday"
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Multi-Day Expeditions
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((pkg) => (
            <div
              key={pkg.id}
              className="group flex flex-col rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Cover Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                <Image
                  src={pkg.coverImage}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white uppercase tracking-wider">
                    {pkg.duration}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      pkg.difficulty === "Extreme"
                        ? "bg-red-600 text-white"
                        : pkg.difficulty === "Hard"
                        ? "bg-orange-500 text-white"
                        : pkg.difficulty === "Moderate"
                        ? "bg-emerald-600 text-white"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    {pkg.difficulty}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Clock size={13} /> {pkg.distance}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={13} /> {pkg.region.split("(")[0]}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {pkg.tagline}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                    {pkg.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <Check size={13} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-1">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Row */}
                <div className="pt-6 mt-6 border-t border-border flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      All-Inclusive
                    </span>
                    <p className="text-2xl font-bold text-foreground leading-none mt-0.5">
                      {pkg.price}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedTour(pkg)}
                      className="px-4 py-2 text-xs font-semibold rounded-full border border-border hover:bg-secondary transition-colors text-foreground"
                    >
                      Itinerary
                    </button>
                    <button
                      type="button"
                      onClick={() => handleBook(pkg.title)}
                      className="px-4 py-2 text-xs font-semibold rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Itinerary Modal */}
      <TourDetailModal
        tour={selectedTour}
        onClose={() => setSelectedTour(null)}
        onBook={handleBook}
      />
    </section>
  );
}

