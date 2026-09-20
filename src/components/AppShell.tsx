"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FAMILY } from "@/lib/seed";

const LINKS = [
  { href: "/", label: "Panel" },
  { href: "/cocuklar/nilufer", label: "Nilüfer" },
  { href: "/cocuklar/seref-ali", label: "Şeref Ali" },
  { href: "/lgs", label: "LGS" },
  { href: "/galeri", label: "Galeri" },
  { href: "/hafta-sonu", label: "Hafta sonu" },
  { href: "/ogretmen", label: "Öğretmen" },
  { href: "/yemek", label: "Mutfak" },
  { href: "/yildizlar", label: "Yıldızlar" },
  { href: "/arsiv", label: "Arşiv" },
  { href: "/ebeveyn", label: "Ebeveyn" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  async function logout() {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <div className="min-h-dvh">
      <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <Link href="/" className="font-display text-xl text-ink">
            {FAMILY.name}
          </Link>
          <button
            type="button"
            className="md:hidden rounded-xl px-3 py-2 text-sm ring-1 ring-stone-300"
            onClick={() => setOpen((v) => !v)}
          >
            Menü
          </button>
          <nav className="hidden md:flex flex-wrap items-center justify-end gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-3 py-1.5 text-sm ${
                  path === l.href ? "bg-ink text-cream" : "text-stone-600 hover:bg-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <button type="button" onClick={logout} className="ml-2 text-sm text-stone-500 hover:text-ink">
              Çıkış
            </button>
          </nav>
        </div>
        {open ? (
          <nav className="md:hidden grid grid-cols-2 gap-1 px-4 pb-4">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-2 text-sm ${
                  path === l.href ? "bg-ink text-cream" : "bg-white text-stone-700"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <button type="button" onClick={logout} className="col-span-2 rounded-xl bg-white px-3 py-2 text-sm">
              Çıkış
            </button>
          </nav>
        ) : null}
      </header>
      <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
    </div>
  );
}
