import { Card, CardTitle } from "@/components/ui";
import { TEACHER_CORNER } from "@/lib/seed";

export default function TeacherPage() {
  const t = TEACHER_CORNER;
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sage text-sm">Meryem Hanım</p>
        <h1 className="font-display text-3xl">Öğretmen köşesi</h1>
        <p className="text-stone-600 mt-1">Haftanın kitabı, akıl oyunları ve çalışma müzikleri.</p>
      </div>
      <Card>
        <p className="text-xs uppercase tracking-wide text-stone-500">Haftanın kitabı</p>
        <h2 className="font-display text-2xl mt-1">{t.bookOfWeek.title}</h2>
        <p className="text-stone-500">{t.bookOfWeek.author}</p>
        <p className="mt-3 text-stone-700">{t.bookOfWeek.note}</p>
      </Card>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardTitle>Eğitici akıl oyunları</CardTitle>
          <ul className="flex flex-wrap gap-2">
            {t.games.map((g) => (
              <li key={g} className="rounded-full bg-cream px-3 py-1 text-sm">
                {g}
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <CardTitle>Çalma listeleri</CardTitle>
          <ul className="space-y-2">
            {t.playlists.map((p) => (
              <li key={p.name} className="rounded-2xl bg-cream px-3 py-3">
                <p className="font-medium">{p.name}</p>
                <p className="text-sm text-stone-500">{p.tracks}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
