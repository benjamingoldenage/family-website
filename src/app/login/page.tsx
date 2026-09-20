"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FAMILY } from "@/lib/seed";

export default function LoginPage() {
  const router = useRouter();
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pin }),
    });
    setBusy(false);
    if (!res.ok) {
      setError("PIN eşleşmedi. Aile kodunu deneyin.");
      return;
    }
    router.push("/");
    router.refresh();
  }

  return (
    <div className="min-h-dvh flex items-center justify-center px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-3xl bg-white/85 p-8 shadow-sm ring-1 ring-stone-200"
      >
        <p className="text-sm text-sage">Aile dışı kapalı alan</p>
        <h1 className="font-display mt-1 text-3xl text-ink">{FAMILY.name}</h1>
        <p className="mt-2 text-stone-600">
          Panel, takvim ve çocuk alanları için aile PIN’ini girin.
        </p>
        <label className="mt-6 block text-sm font-medium">Aile PIN</label>
        <input
          type="password"
          inputMode="numeric"
          autoComplete="one-time-code"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className="mt-1 w-full rounded-2xl border border-stone-200 bg-cream px-4 py-3 outline-none focus:ring-2 focus:ring-terracotta/40"
          placeholder="••••"
        />
        {error ? <p className="mt-2 text-sm text-terracotta">{error}</p> : null}
        <button
          type="submit"
          disabled={busy}
          className="mt-5 w-full rounded-2xl bg-ink py-3 text-cream disabled:opacity-60"
        >
          {busy ? "Giriliyor…" : "Aile paneline gir"}
        </button>
        <p className="mt-4 text-xs text-stone-500">
          Demo PIN: <span className="font-semibold">{FAMILY.pin}</span> — canlıda değiştirin.
        </p>
      </form>
    </div>
  );
}
