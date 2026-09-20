"use client";

import { useEffect, useState } from "react";
import { FAMILY } from "@/lib/seed";

function parts(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    sec: s % 60,
  };
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const target = new Date(FAMILY.lgsDate).getTime();
  const p = parts(target - (now ?? target));
  const cells = [
    ["gün", p.d],
    ["saat", p.h],
    ["dk", p.m],
    ["sn", p.sec],
  ] as const;
  return (
    <div className="grid grid-cols-4 gap-2">
      {cells.map(([label, n]) => (
        <div key={label} className="rounded-2xl bg-terracotta/10 px-2 py-3 text-center">
          <div className="font-display text-2xl text-terracotta tabular-nums">
            {now === null ? "—" : n}
          </div>
          <div className="text-xs uppercase tracking-wide text-stone-500">{label}</div>
        </div>
      ))}
    </div>
  );
}
