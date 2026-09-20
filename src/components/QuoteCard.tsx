"use client";

import { QUOTES } from "@/lib/seed";

function dayIndex() {
  const start = new Date(2026, 0, 1).getTime();
  return Math.floor((Date.now() - start) / 86400000);
}

export function QuoteCard() {
  const quote = QUOTES[Math.abs(dayIndex()) % QUOTES.length];
  return (
    <blockquote className="rounded-3xl bg-ink px-5 py-6 text-cream">
      <p className="text-xs uppercase tracking-[0.2em] text-gold">Günün sözü</p>
      <p className="font-display mt-2 text-xl leading-snug">{quote}</p>
    </blockquote>
  );
}
