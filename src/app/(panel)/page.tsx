"use client";

import { QuoteCard } from "@/components/QuoteCard";
import { Card, CardTitle, QuickLink } from "@/components/ui";
import { FAMILY, HIGHLIGHTS } from "@/lib/seed";
import { useFamily } from "@/lib/store";

const KIND: Record<string, string> = {
  etkinlik: "Etkinlik",
  "dogum-gunu": "Doğum günü",
  doktor: "Doktor",
  okul: "Okul",
  sinav: "Sınav",
};

export default function HomePage() {
  const { events, homework } = useFamily();
  const today = new Date().toISOString().slice(0, 10);
  const month = today.slice(0, 7);
  const upcoming = events
    .filter((e) => e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 5);
  const monthly = events.filter((e) => e.date.startsWith(month));
  const pending = homework.filter((h) => !h.done);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sage text-sm">Hoş geldiniz</p>
        <h1 className="font-display text-3xl md:text-4xl">{FAMILY.name}</h1>
        <p className="text-stone-600 mt-1">Ortak takvim, ödevler ve hızlı bağlantılar.</p>
      </div>

      <QuoteCard />

      <div className="grid gap-4 md:grid-cols-3">
        {HIGHLIGHTS.map((h) => (
          <Card key={h.who}>
            <p className="text-xs uppercase tracking-wide text-stone-500">Günün öne çıkanı</p>
            <p className="font-display text-xl mt-1">{h.who}</p>
            <p className="text-stone-600 mt-1">{h.text}</p>
          </Card>
        ))}
      </div>

      <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
        <QuickLink href="/lgs" emoji="🎯" label="LGS sayfası" />
        <QuickLink href="/galeri" emoji="📷" label="Fotoğraf galerisi" />
        <QuickLink href="/cocuklar/nilufer" emoji="📘" label="Nilüfer programı" />
        <QuickLink href="/cocuklar/seref-ali" emoji="📗" label="Şeref Ali programı" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardTitle>Yaklaşan takvim</CardTitle>
          <ul className="space-y-3">
            {upcoming.map((e) => (
              <li key={e.id} className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium">{e.title}</p>
                  <p className="text-sm text-stone-500">
                    {e.who} · {KIND[e.kind]}
                  </p>
                </div>
                <time className="text-sm tabular-nums text-terracotta">{e.date.slice(5)}</time>
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <CardTitle>Bu ay ({monthly.length} kayıt)</CardTitle>
          <ul className="space-y-2 text-sm">
            {monthly.map((e) => (
              <li key={e.id} className="flex justify-between gap-2">
                <span>{e.title}</span>
                <span className="text-stone-500">{e.date.slice(8)}. gün</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-stone-600">Bekleyen ödev: {pending.length}</p>
        </Card>
      </div>
    </div>
  );
}
