import { Card, CardTitle } from "@/components/ui";
import { ALBUMS } from "@/lib/seed";

export default function GalleryPage() {
  const cover = ALBUMS[0];
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sage text-sm">Anılar</p>
        <h1 className="font-display text-3xl">Fotoğraf & anı arşivi</h1>
        <p className="text-stone-600 mt-1">Yıllara ve etkinliklere göre albümler.</p>
      </div>

      <Card className="bg-gradient-to-br from-terracotta/15 to-gold/10">
        <p className="text-xs uppercase tracking-wide text-stone-500">Aylık aile özeti</p>
        <p className="font-display text-3xl mt-2">
          {cover.cover} Eylül kapağı
        </p>
        <p className="mt-2 text-stone-600">
          Bu ayın kapağı {cover.title} albümünden. Canlıda burası seçilen fotoğraflarla dolar.
        </p>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        {ALBUMS.map((a) => (
          <Card key={a.id}>
            <p className="text-4xl">{a.cover}</p>
            <CardTitle>
              {a.year} · {a.title}
            </CardTitle>
            <ul className="grid grid-cols-3 gap-2">
              {a.photos.map((p) => (
                <li
                  key={p.caption}
                  className="aspect-square rounded-2xl bg-cream flex flex-col items-center justify-center text-center p-2"
                >
                  <span className="text-2xl">{p.src}</span>
                  <span className="text-[11px] text-stone-500 mt-1">{p.caption}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
