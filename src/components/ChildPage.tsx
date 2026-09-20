"use client";

import { Card, CardTitle, Tag } from "@/components/ui";
import { NILUFER_SCHEDULE, SEREF_SCHEDULE } from "@/lib/seed";
import { useFamily } from "@/lib/store";
import type { ChildId, Lesson } from "@/lib/types";

const COPY: Record<ChildId, { name: string; blurb: string; schedule: Lesson[] }> = {
  "seref-ali": {
    name: "Şeref Ali",
    blurb: "Ders saatleri, etütler ve yaklaşan görevler.",
    schedule: SEREF_SCHEDULE,
  },
  nilufer: {
    name: "Nilüfer",
    blurb: "Okul + kurs programı, ödev ve yazılı takibi.",
    schedule: NILUFER_SCHEDULE,
  },
};

export function ChildPage({ child }: { child: ChildId }) {
  const { homework, exams, toggleHomework } = useFamily();
  const meta = COPY[child];
  const hw = homework.filter((h) => h.child === child);
  const xs = exams.filter((e) => e.child === child);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sage text-sm">Çocuk alanı</p>
        <h1 className="font-display text-3xl">{meta.name}</h1>
        <p className="text-stone-600 mt-1">{meta.blurb}</p>
      </div>

      <Card>
        <CardTitle>Ders programı</CardTitle>
        <div className="grid gap-3 md:grid-cols-2">
          {meta.schedule.map((day) => (
            <div key={day.day} className="rounded-2xl bg-cream p-3">
              <p className="font-medium mb-2">{day.day}</p>
              <ul className="space-y-1 text-sm">
                {day.slots.map((s) => (
                  <li key={s.time + s.subject} className="flex justify-between gap-2">
                    <span>
                      {s.subject}
                      {s.note ? <span className="text-stone-500"> · {s.note}</span> : null}
                    </span>
                    <span className="tabular-nums text-stone-500">{s.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardTitle>Ödevler</CardTitle>
          <ul className="space-y-2">
            {hw.map((h) => (
              <li key={h.id}>
                <button
                  type="button"
                  onClick={() => toggleHomework(h.id)}
                  className="w-full text-left rounded-2xl bg-cream px-3 py-3 flex items-start justify-between gap-3"
                >
                  <span>
                    <span className="block font-medium">
                      {h.subject}: {h.title}
                    </span>
                    <span className="text-sm text-stone-500">Teslim {h.due}</span>
                  </span>
                  <Tag>{h.done ? "Tamam" : "Bekliyor"}</Tag>
                </button>
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <CardTitle>Yaklaşan yazılı / deneme</CardTitle>
          <ul className="space-y-3">
            {xs.map((x) => (
              <li key={x.id} className="flex justify-between gap-3">
                <div>
                  <p className="font-medium">{x.subject}</p>
                  <p className="text-sm text-stone-500">{x.topic}</p>
                </div>
                <time className="text-sm tabular-nums">{x.date}</time>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
