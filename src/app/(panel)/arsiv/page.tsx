"use client";

import { useState } from "react";
import { Card, CardTitle, Tag } from "@/components/ui";
import { useFamily } from "@/lib/store";

const LABELS = {
  duyuru: "Duyuru",
  foto: "Foto",
  belge: "Belge",
  not: "Not",
};

export default function ArchivePage() {
  const { archives, addArchive } = useFamily();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState<keyof typeof LABELS>("not");

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sage text-sm">WhatsApp köprüsü</p>
        <h1 className="font-display text-3xl">Mesaj & anı arşivi</h1>
        <p className="text-stone-600 mt-1">
          Gruptan kaçmaması gereken duyuru, fotoğraf ve belgeler. Bot bağlanınca <code>!ödev</code> komutları buraya düşer.
        </p>
      </div>
      <Card>
        <CardTitle>Hızlı not</CardTitle>
        <form
          className="space-y-2"
          onSubmit={(e) => {
            e.preventDefault();
            if (!title.trim()) return;
            addArchive(title, body, category);
            setTitle("");
            setBody("");
          }}
        >
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as keyof typeof LABELS)}
            className="rounded-2xl border border-stone-200 bg-cream px-3 py-2"
          >
            {Object.entries(LABELS).map(([k, v]) => (
              <option key={k} value={k}>
                {v}
              </option>
            ))}
          </select>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Başlık"
            className="w-full rounded-2xl border border-stone-200 bg-cream px-4 py-2"
          />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="WhatsApp’tan kopyalanan metin"
            className="w-full rounded-2xl border border-stone-200 bg-cream px-4 py-2 min-h-24"
          />
          <button type="submit" className="rounded-2xl bg-ink px-4 py-2 text-cream">
            Arşive ekle
          </button>
        </form>
      </Card>
      <ul className="space-y-3">
        {archives.map((a) => (
          <li key={a.id}>
            <Card>
              <div className="flex items-center justify-between gap-2">
                <Tag>{LABELS[a.category]}</Tag>
                <time className="text-sm text-stone-500">{a.date}</time>
              </div>
              <h2 className="font-display text-xl mt-2">{a.title}</h2>
              <p className="text-stone-600 mt-1">{a.body}</p>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
