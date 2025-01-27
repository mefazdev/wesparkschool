import { NextResponse } from 'next/server';

export function middleware(req) {
  // Check if the user has the auth cookie
  const isAuthenticated = req.cookies.get('auth')?.value === 'true';

  // If the user is not authenticated and trying to access dashboard pages
  if (!isAuthenticated && req.nextUrl.pathname.startsWith('/admin/dashboard')) {
    // Redirect the user to the login page
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  // Continue if authenticated
  return NextResponse.next();
}

// Define the paths to apply the middleware to
export const config = {
  matcher: ['/admin/dashboard/:path*'], // Protect all routes under /dashboard
};