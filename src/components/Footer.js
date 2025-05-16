"use client";

import Link from 'next/link';

const links = [
  {
    title: 'Product',
    items: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Demo', href: '#' },
    ],
  },
  {
    title: 'Company',
    items: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { name: 'Blog', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'API', href: '#' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  },
];

const social = [
  { name: 'Twitter', href: '#', icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337 3.1a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 2c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.762.127 1.124C7.728 7.89 4.1 6.13 1.671 3.149c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
    ) },
  { name: 'GitHub', href: '#', icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
    ) },
  { name: 'LinkedIn', href: '#', icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z"/></svg>
    ) },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-indigo-100 dark:border-indigo-900/50 pt-16 pb-8 px-6 mt-32">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2 flex flex-col space-y-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">DiaryVio</span>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">Your digital memory vault. Capture, relive, and cherish every moment with ease and security.</p>
            <div className="flex space-x-4 mt-2">
              {social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label={item.name}>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          {links.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-indigo-100 dark:border-indigo-900/50 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 dark:text-gray-400 text-sm">
          <span>&copy; {new Date().getFullYear()} DiaryVio. All rights reserved.</span>
          <span>Made with <span className="text-pink-500">♥</span> for storytellers.</span>
        </div>
      </div>
    </footer>
  );
} 