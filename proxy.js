import { NextResponse } from "next/server";

export function proxy(req) {
  const { pathname } = req.nextUrl;

  // ignoriraj _next, api i statičke fajlove
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    /\.(.*)$/.test(pathname)
  ) {
    return;
  }

  const locales = ["hr", "en"];
  const hasLocale = locales.some((l) => pathname.startsWith(`/${l}`));

  if (!hasLocale) {
    const url = req.nextUrl.clone();
    url.pathname = `/hr${pathname}`; // default je hr
    return NextResponse.rewrite(url);
  }
}
