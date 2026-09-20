import { Card, CardTitle, Tag } from "@/components/ui";
import { WEEKEND_IDEAS, TEACHER_CORNER } from "@/lib/seed";

const KIND: Record<string, string> = {
  muze: "Müze",
  doga: "Doğa",
  sinema: "Sinema",
  ev: "Ev",
  kitap: "Kitap",
};

export default function WeekendPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sage text-sm">Planlayıcı</p>
        <h1 className="font-display text-3xl">Hafta sonu & aktiviteler</h1>
        <p className="text-stone-600 mt-1">Gezi, ev içi oyun ve öğretmen tavsiyeleri.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {WEEKEND_IDEAS.map((w) => (
          <Card key={w.id}>
            <Tag>{KIND[w.kind]}</Tag>
            <h2 className="font-display text-xl mt-2">{w.title}</h2>
            <p className="text-sm text-stone-500 mt-1">{w.when}</p>
            <p className="text-stone-600 mt-2">{w.note}</p>
          </Card>
        ))}
      </div>
      <Card>
        <CardTitle>Meryem Öğretmen’den bu hafta</CardTitle>
        <p className="text-stone-700">{TEACHER_CORNER.weekly}</p>
      </Card>
    </div>
  );
}
