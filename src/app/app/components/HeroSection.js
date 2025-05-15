"use client";

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-12 md:pt-24 md:pb-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900 dark:text-white font-playfair">
            The best place to <span className="relative inline-block"><span className="text-purple-600">learn</span><span className="absolute left-0 -bottom-1 w-full h-2 bg-yellow-200 rounded-full -z-10"></span></span> and <span className="text-yellow-500 font-bold italic">play</span> for kids
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto md:mx-0">
            Discover thousands of fun and interactive learning activities to support your child's growth and learning process.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#" className="px-8 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 transition">Get started</a>
            <a href="#" className="px-8 py-3 rounded-full border-2 border-purple-600 text-purple-600 font-semibold bg-white hover:bg-purple-50 transition">Contact Us</a>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/kids-hero.png"
              alt="Happy kid"
              fill
              className="object-contain rounded-3xl shadow-2xl border-4 border-yellow-200"
              priority
            />
            {/* Decorative blob */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-purple-200 rounded-full opacity-60 blur-2xl z-0"></div>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-yellow-200 rounded-full opacity-60 blur-2xl z-0"></div>
          </div>
        </div>
      </div>
      {/* Decorative squiggle */}
      <svg className="absolute left-1/2 -translate-x-1/2 bottom-0" width="120" height="24" fill="none" viewBox="0 0 120 24"><path d="M2 12c8-8 16 8 24 0s16 8 24 0 16 8 24 0 16 8 24 0 16 8 24 0" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round"/></svg>
    </section>
  );
} 