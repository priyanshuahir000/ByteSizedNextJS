import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const isPublicPath =
    path === "/login" || path === "/signup" || path === "/verifyemail";

  // Get the token from the cookies
  const token = request.cookies.get("token")?.value || "";

  // Redirect logic
  if (isPublicPath && token) {
    // If user is already logged in, redirect to profile page
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  if (!isPublicPath && !token) {
    // If user is not logged in and trying to access a protected route
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// Configure the paths that this middleware should run on
export const config = {
  matcher: [
    "/",
    "/profile",
    "/login",
    "/signup",
    "/verifyemail",
    "/profile/:path*",
  ],
};
