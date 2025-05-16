import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';

// Create a mock Drizzle DB for development
function createMockDrizzleDb() {
  console.warn('Creating mock Drizzle DB for development');

  // Create a mock DB that mimics the Drizzle ORM interface
  return {
    select: () => ({
      from: () => ({
        where: () => Promise.resolve([]),
      }),
    }),
    insert: () => ({
      values: () => ({
        returning: () => Promise.resolve([{ id: 'mock-id', title: 'Mock Todo', completed: false }]),
      }),
    }),
    update: () => ({
      set: () => ({
        where: () => ({
          returning: () => Promise.resolve([{ id: 'mock-id', title: 'Mock Todo', completed: true }]),
        }),
      }),
    }),
    delete: () => ({
      where: () => ({
        returning: () => Promise.resolve([{ id: 'mock-id' }]),
      }),
    }),
    query: () => Promise.resolve([]),
    transaction: (fn) => Promise.resolve(fn()),
  };
}

export function createDb(d1) {
  // If we're in development mode and d1 is not provided, return a mock DB
  if (process.env.NODE_ENV === 'development' && !d1) {
    console.warn('D1 database not available, using mock Drizzle DB');
    return createMockDrizzleDb();
  }

  // Otherwise, use the real Drizzle ORM with the provided D1 client
  if (!d1) {
    throw new Error('D1 database client is required');
  }

  return drizzle(d1, { schema });
}