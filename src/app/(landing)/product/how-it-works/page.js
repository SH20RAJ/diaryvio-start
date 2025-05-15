"use client";

import { motion } from 'framer-motion';
import { 
  MicrophoneIcon, 
  DocumentTextIcon,
  PhotoIcon,
  VideoCameraIcon,
  MagnifyingGlassIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const steps = [
  {
    icon: MicrophoneIcon,
    title: "Record Your Thoughts",
    description: "Start by speaking your mind. Our AI will transform your voice into beautifully formatted text entries.",
    details: [
      "Speak naturally in any language",
      "Real-time transcription",
      "Automatic punctuation and formatting",
      "Emotion detection for better context"
    ]
  },
  {
    icon: DocumentTextIcon,
    title: "Write Your Story",
    description: "Prefer typing? Use our distraction-free editor to write your thoughts and reflections.",
    details: [
      "Rich text formatting",
      "Markdown support",
      "Auto-save functionality",
      "Version history"
    ]
  },
  {
    icon: PhotoIcon,
    title: "Add Visual Memories",
    description: "Upload photos to complement your entries. Our AI will help organize and tag them automatically.",
    details: [
      "Drag and drop upload",
      "AI-powered tagging",
      "Smart organization",
      "Easy sharing options"
    ]
  },
  {
    icon: VideoCameraIcon,
    title: "Capture Moments in Motion",
    description: "Record video entries to capture the full experience of your memories.",
    details: [
      "HD video recording",
      "Automatic transcription",
      "Video chapters",
      "Secure streaming"
    ]
  },
  {
    icon: MagnifyingGlassIcon,
    title: "Find Anything Instantly",
    description: "Search through your memories with our powerful AI-powered search.",
    details: [
      "Semantic search",
      "Voice search",
      "Image search",
      "Advanced filters"
    ]
  },
  {
    icon: SparklesIcon,
    title: "Get AI Insights",
    description: "Receive personalized insights and reflections about your journey.",
    details: [
      "Writing patterns",
      "Mood tracking",
      "Memory highlights",
      "Personal growth insights"
    ]
  }
];

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 pt-24">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              How DiaryVio Works
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A simple, intuitive way to capture and relive your most precious memories
          </p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              <div className="flex-1">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 shadow-lg">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-gray-600 dark:text-gray-400">
                        <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-[3rem] blur-3xl"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-[3rem] p-8 shadow-2xl border border-indigo-100 dark:border-indigo-900/50">
                    <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-32 mb-32"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Ready to start your journey?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/20">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 rounded-full font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all">
              Watch Demo
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 