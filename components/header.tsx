"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { COMPANY_INFO } from "@/data/tours";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl transition-[background-color,backdrop-filter,box-shadow,opacity] duration-300 ${
        isMenuOpen
          ? "bg-background/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-border/50"
          : isScrolled
          ? "bg-background/85 backdrop-blur-md rounded-full shadow-lg"
          : "bg-transparent"
      }`}
      style={{
        boxShadow: isMenuOpen
          ? "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px"
          : isScrolled
          ? "rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 69, 0.05) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.05) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.05) 0px 6px 6px -3px, rgba(14, 63, 126, 0.05) 0px 12px 12px -6px, rgba(14, 63, 126, 0.05) 0px 24px 24px -12px"
          : "none",
      }}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-3 pl-4 py-2">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/30 shadow-sm flex-shrink-0">
            <Image
              src="/logo.jpeg"
              alt="Guide You Ceylon Logo"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <span
            className={`text-base font-semibold tracking-tight transition-colors duration-300 ${
              isScrolled || isMenuOpen ? "text-foreground" : "text-white drop-shadow-sm"
            }`}
          >
            GUIDE YOU CEYLON
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#packages"
            className={`text-sm font-medium transition-colors ${
              isScrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/80 hover:text-white"
            }`}
          >
            Expeditions
          </Link>
          <Link
            href="#services"
            className={`text-sm font-medium transition-colors ${
              isScrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/80 hover:text-white"
            }`}
          >
            Services
          </Link>
          <Link
            href="#about"
            className={`text-sm font-medium transition-colors ${
              isScrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/80 hover:text-white"
            }`}
          >
            About Us
          </Link>
          <Link
            href="#gallery"
            className={`text-sm font-medium transition-colors ${
              isScrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/80 hover:text-white"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="#contact"
            className={`text-sm font-medium transition-colors ${
              isScrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/80 hover:text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="#contact"
            className={`px-5 py-2 text-sm font-medium transition-all rounded-full shadow-sm ${
              isScrolled
                ? "bg-foreground text-background hover:opacity-90"
                : "bg-white text-foreground hover:bg-white/90"
            }`}
          >
            Book Expedition
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`transition-colors p-1 md:hidden ${
            isScrolled || isMenuOpen ? "text-foreground" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="border-t border-border/40 px-6 py-6 md:hidden rounded-b-3xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            <Link
              href="#packages"
              className="text-base font-medium text-foreground py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Expeditions
            </Link>
            <Link
              href="#services"
              className="text-base font-medium text-foreground py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-base font-medium text-foreground py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#gallery"
              className="text-base font-medium text-foreground py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="text-base font-medium text-foreground py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2 border-t border-border flex flex-col gap-2">
              <Link
                href="#contact"
                className="w-full bg-foreground text-background py-3 text-center text-sm font-medium rounded-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Expedition
              </Link>
              <a
                href={`https://wa.me/${COMPANY_INFO.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-border text-foreground py-2.5 text-center text-sm font-medium rounded-full flex items-center justify-center gap-2 hover:bg-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone size={15} /> WhatsApp Guide
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
