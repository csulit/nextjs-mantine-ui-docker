import { NextResponse, type NextRequest } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes that do not require authentication
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/public/livechat(.*)']);

// Export the middleware function
export default clerkMiddleware(
  (auth, request: NextRequest) => {
    const headers = new Headers(request.headers);
    headers.set('x-current-pathname', request.nextUrl.pathname);

    // Protect routes that are not public
    if (!isPublicRoute(request)) {
      auth().protect();
    }

    const response = NextResponse.next();
    response.headers.set('x-current-pathname', request.nextUrl.pathname);
    return response;
  },
  {
    debug: false, // Set to true if you need to debug issues
  }
);

// Configure the matcher to include all necessary routes
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
