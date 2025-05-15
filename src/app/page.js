"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Mock image - will need to be replaced with actual logo
const PLACEHOLDER_IMG = '/microphone.svg';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Modern Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-black dark:text-white">DiaryVio</Link>
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="#features" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors">Features</Link>
                <Link href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors">How It Works</Link>
                <Link href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors">Pricing</Link>
                <Link href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors">Testimonials</Link>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="hidden md:block px-6 py-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors">
                Log in
              </button>
              <button className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-90 transition-all">
                Get Started
              </button>
              <button 
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-100 dark:border-gray-900">
              <nav className="flex flex-col space-y-4">
                <Link href="#features" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors">Features</Link>
                <Link href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors">How It Works</Link>
                <Link href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors">Pricing</Link>
                <Link href="#testimonials" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors">Testimonials</Link>
                <button className="text-left text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium transition-colors">
                  Log in
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-full">
                <span className="text-gray-600 dark:text-gray-400 font-medium">✨ The Future of Journaling</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight text-black dark:text-white">
                Capture Your Life's <br />
                <span className="text-gray-500 dark:text-gray-400">Most Precious Moments</span>
              </h1>
              
              <p className="text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
                Transform your voice into a beautifully organized digital journal. 
                Let AI help you preserve and relive your memories.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-90 transition-all text-lg">
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-all text-lg flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                  </svg>
                  <span>Watch Demo</span>
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
                  <span className="font-semibold text-black dark:text-white">10,000+</span> people already sharing their stories
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

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "1M+", label: "Memories Captured" },
              { number: "98%", label: "User Satisfaction" },
              { number: "24/7", label: "AI Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-black dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 px-6">
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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-bold mb-8 text-black dark:text-white">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Start capturing your memories in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                number: "01",
                title: "Speak Your Mind",
                description: "Record your thoughts naturally using your voice. No typing required."
              },
              {
                number: "02",
                title: "AI Processing",
                description: "Our AI transforms your voice into beautifully formatted text."
              },
              {
                number: "03",
                title: "Relive Memories",
                description: "Search, organize, and revisit your memories anytime."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-8xl font-bold text-gray-100 dark:text-gray-800 absolute -top-8 -left-4">
                  {step.number}
                </div>
                <div className="relative bg-white dark:bg-black p-10 rounded-3xl border border-gray-100 dark:border-gray-800">
                  <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-bold mb-8 text-black dark:text-white">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Join thousands of satisfied users who have transformed their journaling experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "DiaryVio has completely changed how I journal. The voice-to-text feature is incredibly accurate.",
                author: "Sarah Johnson",
                role: "Writer"
              },
              {
                quote: "I love how the AI understands context and helps me organize my thoughts better.",
                author: "Michael Chen",
                role: "Entrepreneur"
              },
              {
                quote: "The smart search feature makes it so easy to find past entries. It's like having a personal assistant.",
                author: "Emma Davis",
                role: "Student"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-black p-8 rounded-3xl border border-gray-100 dark:border-gray-800">
                <div className="text-4xl mb-4">"</div>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">{testimonial.quote}</p>
                <div>
                  <div className="font-bold text-black dark:text-white">{testimonial.author}</div>
                  <div className="text-gray-500 dark:text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-bold mb-8 text-black dark:text-white">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Choose the plan that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Free",
                price: "$0",
                features: [
                  "Up to 10 voice entries per month",
                  "Basic AI processing",
                  "Standard search",
                  "Email support"
                ]
              },
              {
                name: "Pro",
                price: "$9.99",
                period: "/month",
                features: [
                  "Unlimited voice entries",
                  "Advanced AI processing",
                  "Smart search & organization",
                  "Priority support",
                  "Custom categories"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: [
                  "Everything in Pro",
                  "Custom AI training",
                  "API access",
                  "Dedicated support",
                  "Team collaboration"
                ]
              }
            ].map((plan, index) => (
              <div key={index} className={`relative ${plan.popular ? 'md:-mt-8' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="bg-white dark:bg-black p-8 rounded-3xl border border-gray-100 dark:border-gray-800 h-full">
                  <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-black dark:text-white">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-600 dark:text-gray-400">{plan.period}</span>
                    )}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-full font-medium transition-all ${
                    plan.popular 
                      ? 'bg-black dark:bg-white text-white dark:text-black hover:opacity-90' 
                      : 'border-2 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900'
                  }`}>
                    Get Started
                  </button>
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
