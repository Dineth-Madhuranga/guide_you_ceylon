"use client";

import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO, TOUR_PACKAGES } from "@/data/tours";
import { MapPin, Mail, Phone } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="px-6 py-16 md:px-12 md:py-20 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Guide You Ceylon Logo"
                width={48}
                height={31}
                className="h-8 w-auto object-contain"
              />
              <span className="text-lg font-semibold tracking-tight text-foreground">
                GUIDE YOU CEYLON
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {COMPANY_INFO.description}
            </p>
            <div className="mt-6 space-y-2.5 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-foreground" />
                <span>{COMPANY_INFO.contact.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-foreground" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-foreground transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-foreground" />
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Expeditions */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Expeditions</h4>
            <ul className="space-y-2.5">
              {TOUR_PACKAGES.slice(0, 5).map((t) => (
                <li key={t.id}>
                  <Link
                    href="#all-tours"
                    className="text-xs text-muted-foreground transition-colors hover:text-foreground line-clamp-1"
                  >
                    {t.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#all-tours"
                  className="text-xs font-medium text-foreground transition-colors hover:underline"
                >
                  View All Packages →
                </Link>
              </li>
            </ul>
          </div>

          {/* Adventure Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Services</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="#services" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Waterfall Trekking
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Multi-Day Expeditions
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Wild Camping &amp; Glamping
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Technical Peak Climbs
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Custom Private Tours
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links & Safety */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-foreground">Explore</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="#about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#essentials" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  What&apos;s Included
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Expedition Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Contact &amp; Bookings
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-600 font-semibold hover:underline"
                >
                  WhatsApp Guide
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2026 Guide You Ceylon. All rights reserved. Certified Wilderness Expeditions.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              YouTube
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.contact.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-emerald-600 transition-colors font-medium hover:underline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
