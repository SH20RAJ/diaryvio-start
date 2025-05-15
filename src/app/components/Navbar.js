"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-indigo-100 dark:border-indigo-900/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              DiaryVio
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Features</Link>
              <Link href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">How It Works</Link>
              <Link href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Pricing</Link>
              <Link href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Testimonials</Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-6 py-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">
              Log in
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/20">
              Get Started
            </button>
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <Dialog
          open={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          className="relative z-50 md:hidden"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
          <div className="fixed inset-y-0 right-0 w-full bg-white dark:bg-gray-900 p-6">
            <div className="flex justify-end">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4 mt-4">
              <Link href="#features" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Features</Link>
              <Link href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">How It Works</Link>
              <Link href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Pricing</Link>
              <Link href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">Testimonials</Link>
              <button className="text-left text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors">
                Log in
              </button>
            </nav>
          </div>
        </Dialog>
      </div>
    </header>
  );
} 