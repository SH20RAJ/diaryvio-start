import { betterAuth } from 'better-auth';
import { createDb } from '@/db/index';

// Create a mock auth provider for development
function createMockAuthProvider() {
  return {
    // Mock user session
    getSession: async () => null,

    // Mock sign in
    signIn: async () => ({
      user: {
        id: 'mock-user-id',
        email: 'mock@example.com',
        name: 'Mock User'
      }
    }),

    // Mock sign out
    signOut: async () => true,

    // Mock user creation
    createUser: async () => ({
      id: 'mock-user-id',
      email: 'mock@example.com',
      name: 'Mock User'
    }),
  };
}

export function createAuth(d1) {
  // Check if we're in development mode
  const isDev = process.env.NODE_ENV === 'development';

  // If we're in development mode, always use the mock auth provider
  if (isDev) {
    console.warn('Using mock auth provider in development mode');
    return createMockAuthProvider();
  }

  // In production, use the real auth provider with the provided D1 client
  try {
    if (!d1) {
      throw new Error('D1 database client is required in production');
    }

    const db = createDb(d1);

    return betterAuth({
      database: db,
      socialProviders: {
        google: {
          clientId: process.env.GOOGLE_CLIENT_ID || 'mock-client-id',
          clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'mock-client-secret',
        },
      },
      session: {
        // Set session expiration to 30 days
        expiresIn: 60 * 60 * 24 * 30,
      },
      cookies: {
        // Ensure cookies work properly in production
        secure: true,
        sameSite: 'lax',
      },
    });
  } catch (error) {
    console.error('Error creating auth provider:', error);
    throw error;
  }
}