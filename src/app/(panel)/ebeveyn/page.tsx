"use client";

import { useState } from "react";
import { Card, CardTitle } from "@/components/ui";
import { useFamily } from "@/lib/store";
import type { ChildId } from "@/lib/types";

export default function ParentPage() {
  const { addHomework } = useFamily();
  const [child, setChild] = useState<ChildId>("nilufer");
  const [subject, setSubject] = useState("Matematik");
  const [title, setTitle] = useState("");
  const [due, setDue] = useState("");
  const [ok, setOk] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sage text-sm">Ebeveyn girişi</p>
        <h1 className="font-display text-3xl">Yönetim paneli</h1>
        <p className="text-stone-600 mt-1">
          Tarih seç → ders seç → not ekle. Veriler bu tarayıcıda saklanır; Sheets/WhatsApp sonraki adım.
        </p>
      </div>
      <Card>
        <CardTitle>Ödev ekle</CardTitle>
        <form
          className="grid gap-3 md:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            if (!title.trim() || !due) return;
            addHomework(child, subject, title, due);
            setTitle("");
            setOk("Ödev eklendi.");
          }}
        >
          <label className="text-sm">
            Çocuk
            <select
              value={child}
              onChange={(e) => setChild(e.target.value as ChildId)}
              className="mt-1 w-full rounded-2xl border border-stone-200 bg-cream px-3 py-2"
            >
              <option value="nilufer">Nilüfer</option>
              <option value="seref-ali">Şeref Ali</option>
            </select>
          </label>
          <label className="text-sm">
            Ders
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 w-full rounded-2xl border border-stone-200 bg-cream px-3 py-2"
            />
          </label>
          <label className="text-sm md:col-span-2">
            Ödev
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="sf. 45 problemler"
              className="mt-1 w-full rounded-2xl border border-stone-200 bg-cream px-3 py-2"
            />
          </label>
          <label className="text-sm">
            Teslim tarihi
            <input
              type="date"
              value={due}
              onChange={(e) => setDue(e.target.value)}
              className="mt-1 w-full rounded-2xl border border-stone-200 bg-cream px-3 py-2"
            />
          </label>
          <div className="flex items-end">
            <button type="submit" className="rounded-2xl bg-ink px-4 py-2 text-cream">
              Kaydet
            </button>
          </div>
        </form>
        {ok ? <p className="mt-3 text-sm text-sage">{ok}</p> : null}
      </Card>
      <Card>
        <CardTitle>Sonraki entegrasyonlar</CardTitle>
        <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm">
          <li>Google Etablo: ders programı ve netler tek sayfada, site okur.</li>
          <li>WhatsApp bot: <code>!ödev Nilüfer Matematik sf 45</code> komutu ebeveyn formunu doldurur.</li>
          <li>Fotoğraflar: Drive klasörü veya Firebase Storage albümleri.</li>
        </ol>
      </Card>
    </div>
  );
}
