"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Mock image - will need to be replaced with actual logo
const PLACEHOLDER_IMG = '/microphone.svg';

export default function Home() {
  const [greetingText, setGreetingText] = useState('Good day');
  
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreetingText('Good morning');
    } else if (currentHour < 18) {
      setGreetingText('Good afternoon');
    } else {
      setGreetingText('Good evening');
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-black dark:text-white">DiaryVio</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors">Home</Link>
              <Link href="/diary" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors">My Diary</Link>
              <Link href="/companion" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors">AI Companion</Link>
              <button className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-90 transition-all">
                Get Started
              </button>
            </nav>

            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-black dark:text-white">
                Your Voice, <br />
                <span className="text-gray-500 dark:text-gray-400">Your Story</span>
              </h1>
              
              <p className="text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                Transform your spoken thoughts into a beautifully organized digital journal. 
                Powered by AI that understands you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-90 transition-all text-lg">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-all text-lg">
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-black bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 font-medium">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-sm">
                  <span className="font-semibold text-black dark:text-white">2,500+</span> people already sharing their stories
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 rounded-[3rem]"></div>
              <div className="relative bg-white dark:bg-black rounded-[3rem] p-8 shadow-2xl border border-gray-100 dark:border-gray-900">
                <div className="aspect-square relative">
                  <Image
                    src="/hero-illustration.svg"
                    alt="Voice diary illustration"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-bold mb-8 text-black dark:text-white">
              Why Choose DiaryVio?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              The most advanced voice journaling platform powered by AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: "🎙️",
                title: "Voice-to-Text",
                description: "Speak naturally and watch your thoughts transform into beautifully formatted entries."
              },
              {
                icon: "🔍",
                title: "Smart Search",
                description: "Find any memory instantly with AI-powered search that understands context."
              },
              {
                icon: "🤖",
                title: "AI Companion",
                description: "Get insights and reflections from an AI that truly understands your journey."
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-black p-10 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all">
                  <div className="text-4xl mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 text-black dark:text-white">
              Start Your Journey Today
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
              Join thousands of people who are already capturing their memories with DiaryVio.
            </p>
            <button className="px-12 py-5 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-90 transition-all text-lg">
              Get Started for Free
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-gray-100 dark:border-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <h3 className="font-bold text-lg mb-6 text-black dark:text-white">Product</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Features</Link></li>
                <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Pricing</Link></li>
                <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Security</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-black dark:text-white">Company</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">About</Link></li>
                <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Blog</Link></li>
                <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-black dark:text-white">Resources</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Documentation</Link></li>
                <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Help Center</Link></li>
                <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Community</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-6 text-black dark:text-white">Legal</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Privacy</Link></li>
                <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Terms</Link></li>
                <li><Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-900 text-center text-gray-600 dark:text-gray-400">
            <p>© 2024 DiaryVio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
