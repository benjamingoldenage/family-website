"use client";

import { useState } from "react";
import { Card, CardTitle } from "@/components/ui";
import { useFamily } from "@/lib/store";

export default function MealsPage() {
  const { meals, shopping, toggleShopping, addShopping } = useFamily();
  const [name, setName] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sage text-sm">Mutfak</p>
        <h1 className="font-display text-3xl">Yemek menüsü & alışveriş</h1>
        <p className="text-stone-600 mt-1">Bu akşam ne pişse? Ortak liste.</p>
      </div>
      <Card>
        <CardTitle>Haftalık menü</CardTitle>
        <ul className="divide-y divide-stone-100">
          {meals.map((m) => (
            <li key={m.day} className="py-3 grid md:grid-cols-[8rem_1fr_1fr] gap-2">
              <p className="font-medium">{m.day}</p>
              <p className="text-sm text-stone-600">Öğle: {m.lunch}</p>
              <p className="text-sm text-stone-600">Akşam: {m.dinner}</p>
            </li>
          ))}
        </ul>
      </Card>
      <Card>
        <CardTitle>Alışveriş listesi</CardTitle>
        <form
          className="flex gap-2 mb-4"
          onSubmit={(e) => {
            e.preventDefault();
            addShopping(name);
            setName("");
          }}
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Süt, ekmek…"
            className="flex-1 rounded-2xl border border-stone-200 bg-cream px-4 py-2"
          />
          <button type="submit" className="rounded-2xl bg-ink px-4 py-2 text-cream">
            Ekle
          </button>
        </form>
        <ul className="space-y-2">
          {shopping.map((s) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => toggleShopping(s.id)}
                className={`w-full text-left rounded-2xl px-3 py-3 ${s.done ? "bg-sage/10 line-through text-stone-400" : "bg-cream"}`}
              >
                {s.name}
              </button>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
