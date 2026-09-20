export type ChildId = "seref-ali" | "nilufer";

export type EventItem = {
  id: string;
  date: string;
  title: string;
  who: string;
  kind: "etkinlik" | "dogum-gunu" | "doktor" | "okul" | "sinav";
};

export type Homework = {
  id: string;
  child: ChildId;
  subject: string;
  title: string;
  due: string;
  done: boolean;
};

export type Lesson = {
  day: string;
  slots: { time: string; subject: string; note?: string }[];
};

export type Exam = {
  id: string;
  child: ChildId;
  subject: string;
  date: string;
  topic: string;
};

export type NetPoint = {
  date: string;
  turkce: number;
  matematik: number;
  fen: number;
  sosyal: number;
  ingilizce: number;
  din: number;
};

export type TopicGap = {
  subject: string;
  topic: string;
  questions: number;
  missing: boolean;
};

export type Album = {
  id: string;
  year: number;
  title: string;
  cover: string;
  photos: { src: string; caption: string }[];
};

export type WeekendIdea = {
  id: string;
  title: string;
  kind: "muze" | "doga" | "sinema" | "ev" | "kitap";
  when: string;
  note: string;
};

export type ArchiveNote = {
  id: string;
  date: string;
  category: "duyuru" | "foto" | "belge" | "not";
  title: string;
  body: string;
};

export type Meal = {
  day: string;
  lunch: string;
  dinner: string;
};

export type ShoppingItem = { id: string; name: string; done: boolean };

export type Chore = {
  id: string;
  child: ChildId;
  title: string;
  stars: number;
  doneThisWeek: boolean;
};

export type FamilyData = {
  events: EventItem[];
  homework: Homework[];
  exams: Exam[];
  nets: NetPoint[];
  topics: TopicGap[];
  meals: Meal[];
  shopping: ShoppingItem[];
  chores: Chore[];
  archives: ArchiveNote[];
};
