'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HeroSection({ toggleRecording, isRecording }) {
  const [greetingText, setGreetingText] = useState('Good day');
  
  // Set greeting based on time of day
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
    <>
      {/* Hero section for desktop */}
      <div className="hidden md:grid grid-cols-12 gap-8 items-center mb-16">
        <div className="col-span-6">
          <div className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
            {greetingText}, welcome to DiaryVio ✨
          </div>
          <h1 className="text-5xl font-bold mb-5 bg-gradient-to-r from-indigo-600 to-purple-700 text-transparent bg-clip-text leading-tight">
            Speak Your Story, <br />Find Your Memories
          </h1>
          <p className="text-xl mb-8 text-slate-700 dark:text-slate-300 leading-relaxed">
            DiaryVio transforms your spoken words into searchable journal entries <span className="relative inline-block">
              <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-300 dark:bg-amber-500/40 -z-10"></span>
              and provides an AI companion
            </span> who truly understands you.
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={toggleRecording}
              className="px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-medium flex items-center space-x-2 shadow-lg shadow-indigo-500/20 transform hover:translate-y-[-2px] transition-all"
              aria-label="Start voice recording"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
              </svg>
              <span>Start Recording</span>
            </button>
            <button 
              className="px-6 py-3.5 border border-indigo-200 dark:border-slate-700 hover:bg-indigo-50 hover:border-indigo-300 dark:hover:bg-slate-800 dark:hover:border-slate-600 rounded-xl font-medium text-indigo-700 dark:text-indigo-400 transform hover:translate-y-[-2px] transition-all"
              aria-label="Learn more about DiaryVio"
            >
              Learn More
            </button>
          </div>
          <div className="mt-10 flex items-center space-x-3 text-slate-600 dark:text-slate-400">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-xs text-indigo-700 dark:text-indigo-300 border-2 border-white dark:border-slate-900">JD</div>
              <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-xs text-purple-700 dark:text-purple-300 border-2 border-white dark:border-slate-900">AR</div>
              <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center text-xs text-pink-700 dark:text-pink-300 border-2 border-white dark:border-slate-900">TW</div>
            </div>
            <span className="text-sm">Join 2,500+ people already sharing their stories</span>
          </div>
        </div>
        <div className="col-span-6 flex justify-center relative">
          <div className="absolute z-0 w-48 h-48 bg-purple-300 dark:bg-purple-900 rounded-full filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute z-0 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000 -translate-y-12 translate-x-8"></div>
          <div className="relative z-10 w-[420px] h-[420px] animate-float">
            <Image 
              src="/microphone.svg"
              alt="Voice diary illustration"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Mobile hero section */}
      <div className="md:hidden flex flex-col items-center text-center mb-12">
        <div className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium mb-4">
          {greetingText} ✨
        </div>
        
        <div className="relative">
          <div className="absolute z-0 w-40 h-40 bg-purple-300 dark:bg-purple-900 rounded-full filter blur-xl opacity-40 animate-blob top-0 -left-8"></div>
          <div className="absolute z-0 w-40 h-40 bg-indigo-300 dark:bg-indigo-900 rounded-full filter blur-xl opacity-30 animate-blob animation-delay-2000 top-8 -right-8"></div>
          <div className="relative z-10 w-64 h-64 mb-5 animate-float">
            <Image 
              src="/microphone.svg"
              alt="Voice diary illustration"
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-700 text-transparent bg-clip-text">
          Speak Your Story
        </h1>
        <p className="text-base mb-6 text-slate-700 dark:text-slate-300 max-w-xs mx-auto">
          Transform your voice into searchable memories with a personal AI companion who <span className="relative inline-block">
            <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-300 dark:bg-amber-500/40 -z-10"></span>
            truly understands you
          </span>.
        </p>
        
        <button 
          onClick={toggleRecording}
          className="w-full max-w-xs px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-medium flex items-center justify-center space-x-2 mb-3 shadow-lg shadow-indigo-500/20 transform hover:translate-y-[-2px] transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
          </svg>
          <span>Start Recording</span>
        </button>
        
        <button className="w-full max-w-xs px-6 py-3.5 border border-indigo-200 dark:border-slate-700 hover:bg-indigo-50 hover:border-indigo-300 dark:hover:bg-slate-800 dark:hover:border-slate-600 rounded-xl font-medium text-indigo-700 dark:text-indigo-400 mb-8 transform hover:translate-y-[-2px] transition-all">
          Learn More
        </button>
        
        <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
          <div className="flex -space-x-2">
            <div className="w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-xs text-indigo-700 dark:text-indigo-300 border-2 border-white dark:border-slate-900">JD</div>
            <div className="w-7 h-7 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-xs text-purple-700 dark:text-purple-300 border-2 border-white dark:border-slate-900">AR</div>
            <div className="w-7 h-7 rounded-full bg-pink-100 dark:bg-pink-900 flex items-center justify-center text-xs text-pink-700 dark:text-pink-300 border-2 border-white dark:border-slate-900">TW</div>
          </div>
          <span className="text-xs">Join 2,500+ people</span>
        </div>
      </div>
    </>
  );
}
