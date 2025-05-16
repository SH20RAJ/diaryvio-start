import { NextResponse } from 'next/server';

export async function middleware(request) {
  // In middleware, we don't have direct access to D1 binding
  // We'll check for auth cookie instead

  // Check for auth cookie
  const authCookie = request.cookies.get('auth_session');
  const isAuthenticated = !!authCookie?.value;

  // Public paths that don't require authentication
  const publicPaths = [
    '/api/auth',
    '/login',
    '/',
    '/favicon.ico',
    '/_next',
    '/public'
  ];

  // Check if the current path is public
  if (publicPaths.some(path => request.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next();
  }

  // Check if the user is authenticated
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
};
