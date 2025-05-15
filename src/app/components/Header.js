'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';

export default function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="h-8 w-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold mr-2">
              D
            </span>
            <span className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              DiaryVio
            </span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton
                  className="flex items-center gap-2 rounded-full bg-indigo-50 dark:bg-slate-800 px-3 py-1.5 text-sm text-indigo-800 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-slate-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <span>Menu</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16"
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={`transition duration-200 ${open ? 'rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </PopoverButton>

                <PopoverPanel className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Link 
                      href="/" 
                      className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-700"
                    >
                      Home
                    </Link>
                    <Link 
                      href="/diary" 
                      className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-700"
                    >
                      My Diary
                    </Link>
                    <div className="border-t border-slate-200 dark:border-slate-700 my-1"></div>
                    <Link 
                      href="#" 
                      className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-700"
                    >
                      Settings
                    </Link>
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>
        </div>
      </div>
    </header>
  );
}
