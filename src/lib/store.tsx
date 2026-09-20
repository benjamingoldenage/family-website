"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { seedData } from "./seed";
import type { ChildId, FamilyData } from "./types";

const KEY = "altinsoy-aile-verisi";

type Store = FamilyData & {
  toggleHomework: (id: string) => void;
  toggleShopping: (id: string) => void;
  addShopping: (name: string) => void;
  addHomework: (child: ChildId, subject: string, title: string, due: string) => void;
  toggleChore: (id: string) => void;
  addArchive: (title: string, body: string, category: FamilyData["archives"][0]["category"]) => void;
};

const Ctx = createContext<Store | null>(null);

function load(): FamilyData {
  if (typeof window === "undefined") return seedData;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return seedData;
    return { ...seedData, ...JSON.parse(raw) };
  } catch {
    return seedData;
  }
}

export function FamilyProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<FamilyData>(seedData);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setData(load());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(KEY, JSON.stringify(data));
  }, [data, ready]);

  const toggleHomework = useCallback((id: string) => {
    setData((d) => ({
      ...d,
      homework: d.homework.map((h) => (h.id === id ? { ...h, done: !h.done } : h)),
    }));
  }, []);

  const toggleShopping = useCallback((id: string) => {
    setData((d) => ({
      ...d,
      shopping: d.shopping.map((s) => (s.id === id ? { ...s, done: !s.done } : s)),
    }));
  }, []);

  const addShopping = useCallback((name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    setData((d) => ({
      ...d,
      shopping: [...d.shopping, { id: crypto.randomUUID(), name: trimmed, done: false }],
    }));
  }, []);

  const addHomework = useCallback((child: ChildId, subject: string, title: string, due: string) => {
    setData((d) => ({
      ...d,
      homework: [
        ...d.homework,
        { id: crypto.randomUUID(), child, subject, title, due, done: false },
      ],
    }));
  }, []);

  const toggleChore = useCallback((id: string) => {
    setData((d) => ({
      ...d,
      chores: d.chores.map((c) =>
        c.id === id ? { ...c, doneThisWeek: !c.doneThisWeek } : c,
      ),
    }));
  }, []);

  const addArchive = useCallback((title: string, body: string, category: FamilyData["archives"][0]["category"]) => {
    setData((d) => ({
      ...d,
      archives: [
        {
          id: crypto.randomUUID(),
          date: new Date().toISOString().slice(0, 10),
          category,
          title,
          body,
        },
        ...d.archives,
      ],
    }));
  }, []);

  const value = useMemo(
    () => ({
      ...data,
      toggleHomework,
      toggleShopping,
      addShopping,
      addHomework,
      toggleChore,
      addArchive,
    }),
    [data, toggleHomework, toggleShopping, addShopping, addHomework, toggleChore, addArchive],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useFamily() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useFamily FamilyProvider içinde kullanılmalı");
  return ctx;
}
