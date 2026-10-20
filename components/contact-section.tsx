"use client";

import { useState } from "react";
import { TOUR_PACKAGES, COMPANY_INFO } from "@/data/tours";
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export function ContactSection({ selectedPackage }: { selectedPackage?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tourPackage: selectedPackage || "Best Trail in Knuckles Mountain Range",
    travelers: "2",
    travelDates: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setStatusMessage(
          data.message ||
            "Thank you! Your expedition inquiry has been received. Our team will contact you shortly."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          tourPackage: "Best Trail in Knuckles Mountain Range",
          travelers: "2",
          travelDates: "",
          message: "",
        });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Failed to send inquiry. Please try again or reach out on WhatsApp.");
      }
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setStatusMessage("An unexpected network error occurred. Please contact us via WhatsApp.");
    }
  };

  return (
    <section id="contact" className="bg-background py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
            Plan Your Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mt-2">
            Start Your Ceylon Expedition
          </h2>
          <p className="text-muted-foreground text-sm md:text-base mt-3">
            Ready to trek untouched cloud forests, sleep in historic cardamom huts, or hunt remote waterfalls? Fill out the form below or message our guides directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-secondary border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Guide You Ceylon HQ
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-foreground/10 text-foreground flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground text-sm">Base of Operations</h5>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      Kandy &amp; Knuckles Mountain Range, Central Province, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-foreground/10 text-foreground flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground text-sm">Email Inquiries</h5>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="text-muted-foreground text-sm mt-0.5 hover:text-foreground transition-colors"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-foreground/10 text-foreground flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground text-sm">Direct / WhatsApp</h5>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.contact.whatsapp.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm mt-0.5 hover:text-foreground transition-colors block font-medium"
                    >
                      {COMPANY_INFO.contact.phone} / 0755740513
                    </a>
                    <span className="text-xs text-muted-foreground/75 block mt-0.5">
                      Available 7:00 AM – 9:00 PM (GMT+5:30)
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <div className="mt-8 pt-6 border-t border-border">
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hi Guide You Ceylon, I am interested in booking an expedition!")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Phone size={16} /> Chat Instantly on WhatsApp
                </a>
              </div>
            </div>

            {/* Why Book Direct */}
            <div className="p-6 rounded-3xl border border-border bg-card">
              <h4 className="font-semibold text-foreground text-sm mb-3">
                Why Book Direct with Us?
              </h4>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                  <span>100% locally owned &amp; operated by certified mountain guides</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                  <span>Private group options with custom pacing and flexible dates</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                  <span>Official forest permits &amp; licensed naturalist safety leads</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-card p-8 md:p-10 rounded-3xl border border-border shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Send an Expedition Inquiry
            </h3>

            {status === "success" && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 flex items-start gap-3">
                <CheckCircle size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">{statusMessage}</p>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 flex items-start gap-3">
                <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm leading-relaxed">{statusMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Henderson"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 555 123 4567"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Number of Travelers
                  </label>
                  <select
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  >
                    <option value="1">1 Solo Traveler</option>
                    <option value="2">2 Travelers</option>
                    <option value="3-4">3 - 4 Travelers</option>
                    <option value="5-8">5 - 8 Travelers</option>
                    <option value="9+">9+ Large Group</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Select Tour Package
                  </label>
                  <select
                    value={formData.tourPackage}
                    onChange={(e) => setFormData({ ...formData, tourPackage: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  >
                    {TOUR_PACKAGES.map((t) => (
                      <option key={t.id} value={t.title}>
                        {t.title} ({t.duration} - {t.price})
                      </option>
                    ))}
                    <option value="Custom Private Expedition">Custom / Tailor-Made Private Tour</option>
                    <option value="General Wilderness Inquiry">General Wilderness Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                    Preferred Travel Dates
                  </label>
                  <input
                    type="text"
                    value={formData.travelDates}
                    onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                    placeholder="e.g. Nov 15 - Nov 20, 2026"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                  Message / Special Requirements *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your fitness level, trekking experience, pickup hotel in Kandy, dietary requirements, or any questions you have."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 px-6 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 disabled:opacity-50 transition-opacity flex items-center justify-center gap-2 shadow"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending Inquiry via Nodemailer...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Expedition Inquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

