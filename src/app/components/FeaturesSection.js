'use client';

export default function FeaturesSection() {
  return (
    <>
      {/* Section title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Capture life's moments with ease</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">DiaryVio combines the power of your voice with AI to create a truly personal journaling experience.</p>
      </div>
      
      {/* Features section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-xl shadow-indigo-500/5 border border-indigo-50 dark:border-slate-700/50 hover:shadow-indigo-500/10 hover:border-indigo-100 dark:hover:border-slate-700 transition-all">
          <div className="rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/40 dark:to-indigo-800/20 w-14 h-14 flex items-center justify-center mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-indigo-600 dark:text-indigo-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 font-display">Voice-to-Text Diary</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
            Speak your thoughts naturally and watch them transform into beautifully formatted journal entries within seconds.
          </p>
          <a href="#" className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        
        <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-xl shadow-purple-500/5 border border-purple-50 dark:border-slate-700/50 hover:shadow-purple-500/10 hover:border-purple-100 dark:hover:border-slate-700 transition-all">
          <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-purple-800/20 w-14 h-14 flex items-center justify-center mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-purple-600 dark:text-purple-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 font-display">Memory Search</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
            Ask natural questions like "When did I first meet Sara?" and instantly find the exact memories you're looking for.
          </p>
          <a href="#" className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium hover:text-purple-800 dark:hover:text-purple-300 transition-colors">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        
        <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-xl shadow-pink-500/5 border border-pink-50 dark:border-slate-700/50 hover:shadow-pink-500/10 hover:border-pink-100 dark:hover:border-slate-700 transition-all">
          <div className="rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/40 dark:to-pink-800/20 w-14 h-14 flex items-center justify-center mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-pink-600 dark:text-pink-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 font-display">AI Companion</h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
            A compassionate AI friend who learns your personality, remembers your past, and provides emotional support exactly when you need it.
          </p>
          <a href="#" className="inline-flex items-center text-pink-600 dark:text-pink-400 font-medium hover:text-pink-800 dark:hover:text-pink-300 transition-colors">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Testimonial section */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-3xl p-8 md:p-12 mb-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6 text-indigo-500">
              <path d="M14.028 6C6.684 11.184 1.5 19.68 1.5 29.04C1.5 36.672 5.244 42 10.428 42C14.172 42 17.1 39.36 17.1 35.904C17.1 32.304 14.46 29.76 11.004 29.76C9.492 29.76 8.412 30.096 7.476 30.672C7.476 23.472 11.22 16.704 16.404 12.672L14.028 6ZM35.292 6C27.948 11.184 22.764 19.68 22.764 29.04C22.764 36.672 26.508 42 31.692 42C35.436 42 38.364 39.36 38.364 35.904C38.364 32.304 35.724 29.76 32.268 29.76C30.756 29.76 29.676 30.096 28.74 30.672C28.74 23.472 32.484 16.704 37.668 12.672L35.292 6Z" fill="currentColor"/>
            </svg>
            <p className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              DiaryVio has completely transformed how I process my thoughts. The AI companion feels like talking to a close friend who knows me deeply. It's uncanny how it remembers things I've mentioned months ago!
            </p>
            <div className="flex items-center">
              <div className="mr-4 w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-700 dark:text-indigo-300 font-bold text-lg">JK</div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white">Jessica Kim</h4>
                <p className="text-slate-600 dark:text-slate-400">Professional Writer</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <span className="text-2xl">😌</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">Yesterday, 8:42 PM</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Today's presentation went so much better than I expected! I was nervous about the Q&A but ended up handling all the questions really well. DiaryVio helped me practice answers yesterday, which made all the difference.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full">Presentation</span>
              <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">Win</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
