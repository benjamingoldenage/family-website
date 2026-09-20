"use client";

import { Card, CardTitle } from "@/components/ui";
import { useFamily } from "@/lib/store";

export default function StarsPage() {
  const { chores, toggleChore } = useFamily();
  const kids = [
    { id: "seref-ali" as const, name: "Şeref Ali" },
    { id: "nilufer" as const, name: "Nilüfer" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sage text-sm">Oyunlaştırma</p>
        <h1 className="font-display text-3xl">Harçlık & görevler</h1>
        <p className="text-stone-600 mt-1">Küçük sorumluluklar, yıldız puanı.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {kids.map((k) => {
          const list = chores.filter((c) => c.child === k.id);
          const stars = list.filter((c) => c.doneThisWeek).reduce((a, c) => a + c.stars, 0);
          return (
            <Card key={k.id}>
              <CardTitle>
                {k.name} · {stars} ⭐
              </CardTitle>
              <ul className="space-y-2">
                {list.map((c) => (
                  <li key={c.id}>
                    <button
                      type="button"
                      onClick={() => toggleChore(c.id)}
                      className="w-full text-left rounded-2xl bg-cream px-3 py-3 flex justify-between"
                    >
                      <span>{c.title}</span>
                      <span className="text-sm text-stone-500">
                        {c.stars}⭐ {c.doneThisWeek ? "yapıldı" : "açık"}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
