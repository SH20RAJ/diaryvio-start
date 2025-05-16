import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient();

// Export specific methods for convenience
export const { signIn, signUp, useSession } = authClient; 