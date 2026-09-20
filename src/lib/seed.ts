import type { Album, FamilyData, Lesson, WeekendIdea } from "./types";

export const FAMILY = {
  name: "Altınsoy Ailesi",
  pin: "1905",
  members: [
    { id: "meryem", name: "Meryem", role: "Anne · Öğretmen", emoji: "🌻" },
    { id: "nilufer", name: "Nilüfer", role: "LGS hazırlık", emoji: "📚" },
    { id: "seref-ali", name: "Şeref Ali", role: "Okul", emoji: "⚽" },
  ],
  lgsDate: "2027-06-06T09:00:00+03:00",
} as const;

export const QUOTES = [
  "Küçük adımlar, büyük yollar açar.",
  "Bugün çalıştığın her satır, yarının rahatlığıdır.",
  "Anlamak, ezberlemekten daha güçlüdür.",
  "Dinlenmek de çalışmanın bir parçasıdır.",
  "Hata, öğrenmenin kapısını çalar.",
  "Bir soru daha, bir net daha.",
  "Evde düzen, zihinde huzur.",
  "Kitap, en sadık yol arkadaşıdır.",
];

export const HIGHLIGHTS = [
  { who: "Nilüfer", text: "Matematik ödevi: problemler sf. 45" },
  { who: "Şeref Ali", text: "Hayat bilgisi proje afişi" },
  { who: "Aile", text: "Akşam: evde film + mısır" },
];

export const SEREF_SCHEDULE: Lesson[] = [
  {
    day: "Pazartesi",
    slots: [
      { time: "08:30", subject: "Türkçe" },
      { time: "09:20", subject: "Matematik" },
      { time: "10:20", subject: "Hayat Bilgisi" },
      { time: "13:30", subject: "Beden", note: "Spor salonu" },
    ],
  },
  {
    day: "Salı",
    slots: [
      { time: "08:30", subject: "Matematik" },
      { time: "09:20", subject: "İngilizce" },
      { time: "10:20", subject: "Görsel Sanatlar" },
      { time: "15:30", subject: "Etüt", note: "Okul sonrası" },
    ],
  },
  {
    day: "Çarşamba",
    slots: [
      { time: "08:30", subject: "Fen" },
      { time: "09:20", subject: "Türkçe" },
      { time: "10:20", subject: "Müzik" },
    ],
  },
  {
    day: "Perşembe",
    slots: [
      { time: "08:30", subject: "Matematik" },
      { time: "09:20", subject: "Hayat Bilgisi" },
      { time: "14:00", subject: "Yüzme", note: "Kurs" },
    ],
  },
  {
    day: "Cuma",
    slots: [
      { time: "08:30", subject: "Türkçe" },
      { time: "09:20", subject: "Serbest Etkinlik" },
      { time: "10:20", subject: "Beden" },
    ],
  },
];

export const NILUFER_SCHEDULE: Lesson[] = [
  {
    day: "Pazartesi",
    slots: [
      { time: "08:20", subject: "Türkçe" },
      { time: "09:10", subject: "Matematik" },
      { time: "10:10", subject: "Fen" },
      { time: "16:00", subject: "Kurs · Matematik" },
    ],
  },
  {
    day: "Salı",
    slots: [
      { time: "08:20", subject: "İngilizce" },
      { time: "09:10", subject: "Sosyal" },
      { time: "10:10", subject: "Din Kültürü" },
      { time: "16:00", subject: "Kurs · Fen" },
    ],
  },
  {
    day: "Çarşamba",
    slots: [
      { time: "08:20", subject: "Matematik" },
      { time: "09:10", subject: "Türkçe" },
      { time: "16:00", subject: "Deneme", note: "Kurs salonu" },
    ],
  },
  {
    day: "Perşembe",
    slots: [
      { time: "08:20", subject: "Fen" },
      { time: "09:10", subject: "İnkılap" },
      { time: "16:00", subject: "Kurs · Türkçe" },
    ],
  },
  {
    day: "Cuma",
    slots: [
      { time: "08:20", subject: "Matematik" },
      { time: "09:10", subject: "Rehberlik" },
      { time: "14:30", subject: "Etüt" },
    ],
  },
];

export const WEEKEND_IDEAS: WeekendIdea[] = [
  {
    id: "w1",
    title: "Rahmi Koç Müzesi",
    kind: "muze",
    when: "Cumartesi öğleden sonra",
    note: "Teknoloji ve ulaşım; Şeref Ali için özellikle keyifli.",
  },
  {
    id: "w2",
    title: "Belgrad Ormanı yürüyüşü",
    kind: "doga",
    when: "Pazar sabah",
    note: "Kısa parkuru seçin, termos çay alın.",
  },
  {
    id: "w3",
    title: "Aile sineması: animasyon",
    kind: "sinema",
    when: "Cumartesi akşam",
    note: "Evde battaniye + mısır. Telefonlar mutfakta.",
  },
  {
    id: "w4",
    title: "Akıl oyunu: SET veya Kodlama kartları",
    kind: "ev",
    when: "Pazar ikindi",
    note: "Meryem Öğretmen köşesinden bu haftanın oyunu.",
  },
];

export const ALBUMS: Album[] = [
  {
    id: "a1",
    year: 2026,
    title: "Yaz tatili",
    cover: "🏖️",
    photos: [
      { src: "🌊", caption: "Deniz ilk gün" },
      { src: "🍦", caption: "Dondurma molası" },
      { src: "🌅", caption: "Gün batımı" },
    ],
  },
  {
    id: "a2",
    year: 2026,
    title: "Doğum günleri",
    cover: "🎂",
    photos: [
      { src: "🎈", caption: "Pasta zamanı" },
      { src: "🎁", caption: "Sürpriz kutu" },
    ],
  },
  {
    id: "a3",
    year: 2025,
    title: "Okul gösterisi",
    cover: "🎭",
    photos: [
      { src: "🎶", caption: "Sahne prova" },
      { src: "🌸", caption: "Çiçekler" },
    ],
  },
];

export const TEACHER_CORNER = {
  bookOfWeek: {
    title: "Küçük Kara Balık",
    author: "Samed Behrengi",
    note: "Cesaret ve merak üzerine kısa sohbet: “Neden yola çıktı?”",
  },
  games: ["SET", "Tangram", "Hafıza kartları", "Kelime avı"],
  playlists: [
    { name: "Odaklanma", tracks: "Lo-fi piyano · 45 dk" },
    { name: "Çalışma", tracks: "Klasik gitar · 60 dk" },
    { name: "Tatil yolu", tracks: "Aile koro şarkıları" },
  ],
  weekly: "Bu hafta: 20 dakikalık sessiz okuma + 1 sayfa günlük. Nilüfer için deneme analizi; Şeref Ali için ‘bugün öğrendiğim 3 şey’ notu.",
};

export const seedData: FamilyData = {
  events: [
    { id: "e1", date: "2026-09-21", title: "Nilüfer diş kontrolü", who: "Nilüfer", kind: "doktor" },
    { id: "e2", date: "2026-09-22", title: "Şeref Ali beden günü", who: "Şeref Ali", kind: "okul" },
    { id: "e3", date: "2026-09-26", title: "Aile kahvaltısı", who: "Aile", kind: "etkinlik" },
    { id: "e4", date: "2026-10-03", title: "Nilüfer deneme sınavı", who: "Nilüfer", kind: "sinav" },
    { id: "e5", date: "2026-11-12", title: "Şeref Ali doğum günü", who: "Şeref Ali", kind: "dogum-gunu" },
  ],
  homework: [
    { id: "h1", child: "nilufer", subject: "Matematik", title: "Problemler sf. 45", due: "2026-09-21", done: false },
    { id: "h2", child: "nilufer", subject: "Fen", title: "Kuvvetler çalışma kâğıdı", due: "2026-09-23", done: false },
    { id: "h3", child: "seref-ali", subject: "Hayat Bilgisi", title: "Proje afişi", due: "2026-09-24", done: false },
    { id: "h4", child: "seref-ali", subject: "Türkçe", title: "Okuma günlüğü", due: "2026-09-22", done: true },
  ],
  exams: [
    { id: "x1", child: "nilufer", subject: "Matematik", date: "2026-10-03", topic: "Kurs denemesi" },
    { id: "x2", child: "nilufer", subject: "Türkçe", date: "2026-10-10", topic: "Paragraf yazılısı" },
    { id: "x3", child: "seref-ali", subject: "Matematik", date: "2026-09-29", topic: "Çarpım tablosu" },
  ],
  nets: [
    { date: "Haz", turkce: 14, matematik: 8, fen: 12, sosyal: 10, ingilizce: 8, din: 8 },
    { date: "Tem", turkce: 15, matematik: 10, fen: 13, sosyal: 11, ingilizce: 8, din: 9 },
    { date: "Ağu", turkce: 16, matematik: 11, fen: 14, sosyal: 12, ingilizce: 9, din: 9 },
    { date: "Eyl", turkce: 17, matematik: 13, fen: 15, sosyal: 12, ingilizce: 9, din: 9 },
  ],
  topics: [
    { subject: "Matematik", topic: "Köklü sayılar", questions: 120, missing: true },
    { subject: "Matematik", topic: "Üslü sayılar", questions: 210, missing: false },
    { subject: "Fen", topic: "Basınç", questions: 80, missing: true },
    { subject: "Türkçe", topic: "Paragraf", questions: 340, missing: false },
    { subject: "Fen", topic: "Mevsimler ve iklim", questions: 95, missing: true },
  ],
  meals: [
    { day: "Pazartesi", lunch: "Mercimek çorba + tost", dinner: "Fırın tavuk, pilav, salata" },
    { day: "Salı", lunch: "Okul yemeği", dinner: "Kıymalı makarna" },
    { day: "Çarşamba", lunch: "Omlet", dinner: "Sebzeli güveç" },
    { day: "Perşembe", lunch: "Okul yemeği", dinner: "Balık + yoğurt" },
    { day: "Cuma", lunch: "Çorba + börek", dinner: "Pizza gecesi (ev yapımı)" },
    { day: "Cumartesi", lunch: "Menemen", dinner: "Köfte, patates" },
    { day: "Pazar", lunch: "Aile kahvaltısı", dinner: "Mantı" },
  ],
  shopping: [
    { id: "s1", name: "Süt", done: false },
    { id: "s2", name: "Domates", done: false },
    { id: "s3", name: "Yoğurt", done: true },
    { id: "s4", name: "Muz", done: false },
  ],
  chores: [
    { id: "c1", child: "seref-ali", title: "Odayı topla", stars: 2, doneThisWeek: false },
    { id: "c2", child: "seref-ali", title: "20 dk kitap", stars: 2, doneThisWeek: true },
    { id: "c3", child: "nilufer", title: "Masa düzeni", stars: 2, doneThisWeek: false },
    { id: "c4", child: "nilufer", title: "30 soru + analiz", stars: 3, doneThisWeek: true },
  ],
  archives: [
    {
      id: "n1",
      date: "2026-09-18",
      category: "duyuru",
      title: "Veli toplantısı",
      body: "Çarşamba 18:00, Nilüfer’in sınıfı. WhatsApp grubundan alındı.",
    },
    {
      id: "n2",
      date: "2026-09-15",
      category: "belge",
      title: "Kurs deneme takvimi",
      body: "Ekim denemeleri PDF olarak grupta paylaşıldı.",
    },
    {
      id: "n3",
      date: "2026-09-12",
      category: "foto",
      title: "Okul bahçesi",
      body: "İlk gün fotoğrafı arşive eklendi.",
    },
  ],
};
