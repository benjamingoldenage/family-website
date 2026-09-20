"use client";

import { Countdown } from "@/components/Countdown";
import { Card, CardTitle, Tag } from "@/components/ui";
import { NILUFER_SCHEDULE } from "@/lib/seed";
import { useFamily } from "@/lib/store";
import type { NetPoint } from "@/lib/types";

const BRANCH: { key: Exclude<keyof NetPoint, "date">; label: string }[] = [
  { key: "turkce", label: "Türkçe" },
  { key: "matematik", label: "Matematik" },
  { key: "fen", label: "Fen" },
  { key: "sosyal", label: "Sosyal" },
  { key: "ingilizce", label: "İngilizce" },
  { key: "din", label: "Din" },
];

export default function LgsPage() {
  const { nets, topics, exams } = useFamily();
  const latest = nets[nets.length - 1];
  const max = 20;

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sage text-sm">Nilüfer’e özel</p>
        <h1 className="font-display text-3xl">LGS hazırlık & rehberlik</h1>
        <p className="text-stone-600 mt-1">Geri sayım, kurs, netler ve eksik konular.</p>
      </div>

      <Card className="bg-white">
        <CardTitle>Sınav gününe kalan</CardTitle>
        <Countdown />
        <p className="mt-3 text-sm text-stone-500">Hedef tarih: 6 Haziran 2027 (Ebeveyn panelinden güncellenebilir — şimdilik sabit).</p>
      </Card>

      <Card>
        <CardTitle>Kurs & etüt</CardTitle>
        <ul className="space-y-2 text-sm">
          {NILUFER_SCHEDULE.flatMap((d) =>
            d.slots
              .filter((s) => s.subject.includes("Kurs") || s.subject.includes("Deneme") || s.subject.includes("Etüt"))
              .map((s) => (
                <li key={d.day + s.time} className="flex justify-between rounded-xl bg-cream px-3 py-2">
                  <span>
                    {d.day} · {s.subject}
                  </span>
                  <span className="tabular-nums">{s.time}</span>
                </li>
              )),
          )}
        </ul>
        <p className="mt-3 text-sm text-stone-600">
          Sonraki deneme:{" "}
          {exams.find((e) => e.child === "nilufer")?.date} · {exams.find((e) => e.child === "nilufer")?.topic}
        </p>
      </Card>

      <Card>
        <CardTitle>Son deneme netleri ({latest.date})</CardTitle>
        <div className="space-y-3">
          {BRANCH.map((b) => {
            const n = latest[b.key];
            return (
              <div key={b.key}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{b.label}</span>
                  <span className="tabular-nums">{n} / {max}</span>
                </div>
                <div className="h-2 rounded-full bg-stone-200">
                  <div
                    className="h-2 rounded-full bg-sage"
                    style={{ width: `${(n / max) * 100}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-stone-500">
                <th className="py-1">Ay</th>
                {BRANCH.map((b) => (
                  <th key={b.key} className="py-1">{b.label.slice(0, 3)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {nets.map((row) => (
                <tr key={row.date} className="border-t border-stone-100">
                  <td className="py-1.5">{row.date}</td>
                  {BRANCH.map((b) => (
                    <td key={b.key} className="py-1.5 tabular-nums">
                      {row[b.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <Card>
        <CardTitle>Soru bankası & eksik konular</CardTitle>
        <ul className="space-y-2">
          {topics.map((t) => (
            <li key={t.subject + t.topic} className="flex items-center justify-between gap-3 rounded-2xl bg-cream px-3 py-3">
              <div>
                <p className="font-medium">
                  {t.subject} · {t.topic}
                </p>
                <p className="text-sm text-stone-500">{t.questions} soru çözüldü</p>
              </div>
              <Tag>{t.missing ? "Eksik" : "Sağlam"}</Tag>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
