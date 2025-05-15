'use client';

import { useState } from 'react';
import DiaryEntry from '../../components/DiaryEntry';
import Link from 'next/link';
import { Switch } from '@headlessui/react';

export default function DiaryPage() {
  const [entries, setEntries] = useState([
    {
      id: 1,
      date: '2025-05-15',
      time: '14:23',
      content: "Today I had a great meeting with the team about our new project. Everyone seems excited about the direction we're taking. I need to follow up with Sarah about the design assets before Friday.",
      mood: 'happy',
    },
    {
      id: 2,
      date: '2025-05-14',
      time: '20:17',
      content: "Had dinner with Alex tonight. We talked about our future plans and it was really nice to connect after such a busy week. I feel much more grounded now.",
      mood: 'peaceful',
    },
    {
      id: 3,
      date: '2025-05-13',
      time: '09:45',
      content: 'Woke up feeling a bit anxious about the presentation tomorrow. I went for a run to clear my head, which helped a lot. Need to practice my talking points once more tonight.',
      mood: 'anxious',
    }
  ]);
  
  const [showFavorites, setShowFavorites] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Get mood emoji based on mood string
  const getMoodEmoji = (mood) => {
    const moodMap = {
      'happy': '😊',
      'peaceful': '😌',
      'anxious': '😰',
      'sad': '😔',
      'excited': '😃',
      'tired': '😴',
      'neutral': '😐'
    };
    return moodMap[mood] || '😐';
  };
  
  // Format date to display in a friendly way
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  // Filter entries based on the active filter
  const filteredEntries = entries.filter(entry => {
    if (activeFilter === 'all') return true;
    return entry.mood === activeFilter;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold">My Diary</h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Capturing your thoughts and memories</p>
          </div>
          
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex items-center space-x-2">
              <Switch
                checked={showFavorites}
                onChange={setShowFavorites}
                className={`${
                  showFavorites ? 'bg-indigo-600' : 'bg-slate-200 dark:bg-slate-700'
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
              >
                <span className="sr-only">Show favorites only</span>
                <span
                  className={`${
                    showFavorites ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
              <span className="text-sm text-slate-600 dark:text-slate-400">Favorites</span>
            </div>
            
            <div className="flex gap-1">
              <button 
                onClick={() => setActiveFilter('all')}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                  activeFilter === 'all' 
                    ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 font-medium' 
                    : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveFilter('happy')}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                  activeFilter === 'happy' 
                    ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 font-medium' 
                    : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                😊 Happy
              </button>
              <button 
                onClick={() => setActiveFilter('anxious')}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                  activeFilter === 'anxious' 
                    ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 font-medium' 
                    : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                😰 Anxious
              </button>
            </div>
            
            <button className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg shadow-md shadow-indigo-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
              </svg>
              <span>Record New Entry</span>
            </button>
          </div>
        </div>
        
        {/* Search bar */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search your diary entries..."
            className="w-full p-3 pl-12 rounded-xl bg-white dark:bg-slate-800 border border-indigo-100 dark:border-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all"
          />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-500 dark:text-indigo-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </div>
        
        {/* Diary entries */}
        <div className="grid grid-cols-1 gap-4 mb-24">
          {filteredEntries.length > 0 ? (
            filteredEntries.map(entry => (
              <DiaryEntry 
                key={entry.id} 
                entry={entry} 
                formatDate={formatDate} 
                getMoodEmoji={getMoodEmoji} 
              />
            ))
          ) : (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-medium mb-2">No entries found</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {activeFilter !== 'all' 
                  ? `You don't have any entries with the "${activeFilter}" mood.`
                  : "You haven't created any diary entries yet."}
              </p>
              <button className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-lg font-medium">
                {activeFilter !== 'all' 
                  ? "View all entries"
                  : "Create your first entry"}
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Mobile recording button */}
      <div className="md:hidden fixed bottom-20 right-6 z-40">
        <button className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
