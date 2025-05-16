import { createAuth } from '@/lib/auth';
import { toNextJsHandler } from 'better-auth/next-js';
import { NextResponse } from 'next/server';

// Helper function to safely get the D1 database from context
function getD1Database(context) {
  // In development, we might not have context.env.DB
  if (!context || !context.env || !context.env.DB) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('D1 database not available in development mode');
      return null; // createAuth will handle this case
    }
    throw new Error('D1 database not available');
  }

  return context.env.DB;
}

export async function GET(request, context) {
  try {
    const db = getD1Database(context);
    const auth = createAuth(db);

    // If we're in development mode and using a mock auth provider,
    // we need to handle the request differently
    if (process.env.NODE_ENV === 'development' && !db) {
      // Check if this is a session request
      const url = new URL(request.url);
      if (url.pathname.endsWith('/get-session')) {
        return NextResponse.json({ user: null });
      }
    }

    const handler = toNextJsHandler(auth);
    return handler.GET(request);
  } catch (error) {
    console.error('Auth GET error:', error);
    return NextResponse.json(
      { error: 'Authentication service unavailable' },
      { status: 500 }
    );
  }
}

export async function POST(request, context) {
  try {
    const db = getD1Database(context);
    const auth = createAuth(db);

    // If we're in development mode and using a mock auth provider,
    // we need to handle the request differently
    if (process.env.NODE_ENV === 'development' && !db) {
      // Check if this is a sign-in request
      const url = new URL(request.url);
      if (url.pathname.endsWith('/sign-in')) {
        return NextResponse.json({
          user: {
            id: 'mock-user-id',
            email: 'mock@example.com',
            name: 'Mock User'
          }
        });
      }
    }

    const handler = toNextJsHandler(auth);
    return handler.POST(request);
  } catch (error) {
    console.error('Auth POST error:', error);
    return NextResponse.json(
      { error: 'Authentication service unavailable' },
      { status: 500 }
    );
  }
}