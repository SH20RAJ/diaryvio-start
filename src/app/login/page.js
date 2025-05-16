'use client';

import { FaGoogle } from 'react-icons/fa';
import { signIn } from '@/lib/auth-client';

export default function LoginPage() {
  const handleGoogleSignIn = async () => {
    try {
      await signIn('google');
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
} 