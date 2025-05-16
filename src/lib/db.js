import { createDb } from '@/db/index';

// Initialize the database with the D1 binding
let db;

export function getDb(d1) {
  // If we already have a db instance and no new D1 binding is provided, return the existing instance
  if (db && !d1) {
    return db;
  }

  // If a D1 binding is provided, create a new db instance
  if (d1) {
    db = createDb(d1);
    return db;
  }

  // In development, create a mock DB if no binding is provided
  if (process.env.NODE_ENV === 'development') {
    console.warn('No D1 binding provided, using mock DB in development mode');
    db = createDb(null); // createDb will handle creating a mock DB
    return db;
  }

  throw new Error('D1 binding is required to initialize the database');
}

// For API routes that have access to context.env.DB
export function getDbFromContext(context) {
  const isDev = process.env.NODE_ENV === 'development';

  if (!context || !context.env || !context.env.DB) {
    if (isDev) {
      console.warn('D1 binding not found in context, using mock DB in development mode');
      return getDb(null); // This will use the mock DB in development
    }
    throw new Error('D1 binding not found in context');
  }

  return getDb(context.env.DB);
}

// Export a singleton instance for client components
// This will be initialized when the app starts
export const dbClient = {
  // Proxy to forward all method calls to the actual db instance
  get: () => {
    if (!db) {
      // In development, initialize with a mock DB if not already initialized
      if (process.env.NODE_ENV === 'development') {
        console.warn('Database not initialized. Using mock DB in development mode.');
        db = createDb(null); // createDb will handle creating a mock DB
        return db;
      }
      throw new Error('Database not initialized. Call getDb with a D1 binding first.');
    }
    return db;
  },

  // Methods that will be proxied to the actual db instance
  select: (...args) => dbClient.get().select(...args),
  insert: (...args) => dbClient.get().insert(...args),
  update: (...args) => dbClient.get().update(...args),
  delete: (...args) => dbClient.get().delete(...args),
  query: (...args) => dbClient.get().query(...args),
  transaction: (...args) => dbClient.get().transaction(...args),
};

// For backward compatibility, export as default
export default dbClient;
