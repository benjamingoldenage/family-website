import { NextResponse } from "next/server";
import { AUTH_COOKIE, authCookieValue } from "@/lib/auth";
import { FAMILY } from "@/lib/seed";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const pin = String(body.pin ?? "").trim();
  if (pin !== FAMILY.pin) {
    return NextResponse.json({ ok: false, error: "PIN hatalı" }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(AUTH_COOKIE, authCookieValue(), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
