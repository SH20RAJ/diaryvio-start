"use client";

import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <header className="w-full py-6 px-4 md:px-10 flex items-center justify-between bg-transparent z-50 relative">
      <div className="flex items-center gap-2">
        <span className="inline-block w-8 h-8 bg-yellow-300 rounded-full mr-2"></span>
        <span className="font-bold text-xl text-slate-900 dark:text-white font-poppins tracking-tight">WonderKids</span>
      </div>
      <nav className="hidden md:flex gap-8 items-center">
        {navLinks.map(link => (
          <Link key={link.name} href={link.href} className="text-slate-700 dark:text-slate-100 font-medium hover:text-purple-600 transition">
            {link.name}
          </Link>
        ))}
      </nav>
      <div className="flex gap-3 items-center">
        <Link href="/signin" className="hidden md:inline-block px-5 py-2 rounded-full border border-purple-600 text-purple-600 font-semibold bg-white hover:bg-purple-50 transition">Sign in</Link>
        <Link href="/contact" className="px-5 py-2 rounded-full bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 transition">Contact Us</Link>
      </div>
    </header>
  );
} 