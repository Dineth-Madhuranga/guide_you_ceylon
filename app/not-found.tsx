import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
        404 — Expedition Off-Trail
      </span>
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground mt-3">
        Page Not Found
      </h1>
      <p className="text-muted-foreground text-sm mt-3 max-w-md">
        The trail you are looking for does not exist or has been moved. Let&apos;s guide you back to camp.
      </p>
      <Link
        href="/"
        className="mt-8 px-6 py-2.5 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity shadow"
      >
        Return to Home Trail
      </Link>
    </div>
  );
}

