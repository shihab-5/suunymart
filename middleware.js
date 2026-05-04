import { NextResponse } from "next/server"
import { headers } from "next/headers"

export async function middleware(request) {
  try {
    const auth = await getAuth();
    const session = await auth.api.getSession({
      headers: await headers()
    });

    if (session) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  } catch (error) {
    console.error('Middleware error:', error);
    // Allow request to proceed on error to prevent lockouts
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/profile', '/id/:path*'],
}
