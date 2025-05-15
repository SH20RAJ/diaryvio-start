"use client";

import { Inter } from 'next/font/google';
import './globals.css';
import { useState } from 'react';
import { 
  HomeIcon, 
  BookOpenIcon, 
  MicrophoneIcon, 
  PhotoIcon,
  VideoCameraIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const inter = Inter({ subsets: ['latin'] });

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '/app' },
  { name: 'Journal', icon: BookOpenIcon, href: '/app/journal' },
  { name: 'Voice Notes', icon: MicrophoneIcon, href: '/app/voice' },
  { name: 'Photos', icon: PhotoIcon, href: '/app/photos' },
  { name: 'Videos', icon: VideoCameraIcon, href: '/app/videos' },
  { name: 'Insights', icon: ChartBarIcon, href: '/app/insights' },
  { name: 'Settings', icon: Cog6ToothIcon, href: '/app/settings' },
];

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          {/* Mobile Sidebar */}
          <div className={`fixed inset-0 z-40 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
            <div className="fixed inset-y-0 left-0 flex w-64 flex-col bg-white dark:bg-gray-800">
              <div className="flex h-16 items-center justify-between px-4">
                <img className="h-8 w-auto" src="/logo.svg" alt="DiaryVio" />
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                  onClick={() => setSidebarOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex-1 space-y-1 px-2 py-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center px-2 py-2 text-base font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <item.icon className="mr-4 h-6 w-6 flex-shrink-0" />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
            <div className="flex min-h-0 flex-1 flex-col bg-white dark:bg-gray-800">
              <div className="flex h-16 items-center px-4">
                <img className="h-8 w-auto" src="/logo.svg" alt="DiaryVio" />
              </div>
              <nav className="flex-1 space-y-1 px-2 py-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center px-2 py-2 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <item.icon className="mr-3 h-6 w-6 flex-shrink-0" />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:pl-64">
            <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white dark:bg-gray-800 shadow">
              <button
                type="button"
                className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Bars3Icon className="h-6 w-6" />
              </button>
              <div className="flex flex-1 justify-between px-4">
                <div className="flex flex-1">
                  {/* Search bar can be added here */}
                </div>
                <div className="ml-4 flex items-center md:ml-6">
                  {/* Profile dropdown can be added here */}
                </div>
              </div>
            </div>

            <main className="py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
