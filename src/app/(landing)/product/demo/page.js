"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  MicrophoneIcon, 
  DocumentTextIcon,
  PhotoIcon,
  VideoCameraIcon,
  PlayIcon,
  PauseIcon
} from '@heroicons/react/24/outline';

const demos = [
  {
    id: 'voice',
    title: "Voice-to-Text Demo",
    description: "Experience how our AI transforms your voice into beautifully formatted text entries.",
    icon: MicrophoneIcon,
    videoUrl: "/demos/voice-demo.mp4"
  },
  {
    id: 'writing',
    title: "Writing Experience",
    description: "See our distraction-free editor in action with rich text formatting and markdown support.",
    icon: DocumentTextIcon,
    videoUrl: "/demos/writing-demo.mp4"
  },
  {
    id: 'photos',
    title: "Photo Management",
    description: "Watch how our AI organizes and tags your photos automatically.",
    icon: PhotoIcon,
    videoUrl: "/demos/photos-demo.mp4"
  },
  {
    id: 'video',
    title: "Video Journals",
    description: "Explore how to create and manage video entries with automatic transcription.",
    icon: VideoCameraIcon,
    videoUrl: "/demos/video-demo.mp4"
  }
];

export default function DemoPage() {
  const [activeDemo, setActiveDemo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

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
              See DiaryVio in Action
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Watch how DiaryVio makes capturing and organizing your memories effortless
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Demo Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-[3rem] blur-3xl"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-[3rem] p-8 shadow-2xl border border-indigo-100 dark:border-indigo-900/50">
              <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-2xl overflow-hidden relative">
                {activeDemo ? (
                  <video
                    src={activeDemo.videoUrl}
                    className="w-full h-full object-cover"
                    controls
                    autoPlay={isPlaying}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400">Select a demo to start</p>
                  </div>
                )}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {activeDemo?.title || "Choose a Demo"}
                </h3>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800/30 transition-colors"
                >
                  {isPlaying ? (
                    <PauseIcon className="w-6 h-6" />
                  ) : (
                    <PlayIcon className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Demo Selection */}
          <div className="space-y-6">
            {demos.map((demo, index) => (
              <motion.button
                key={demo.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  setActiveDemo(demo);
                  setIsPlaying(true);
                }}
                className={`w-full p-6 rounded-2xl border transition-all ${
                  activeDemo?.id === demo.id
                    ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-800'
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${
                    activeDemo?.id === demo.id
                      ? 'bg-indigo-100 dark:bg-indigo-800/50'
                      : 'bg-gray-100 dark:bg-gray-700'
                  }`}>
                    <demo.icon className={`w-6 h-6 ${
                      activeDemo?.id === demo.id
                        ? 'text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-600 dark:text-gray-400'
                    }`} />
                  </div>
                  <div className="text-left">
                    <h3 className={`text-lg font-semibold mb-2 ${
                      activeDemo?.id === demo.id
                        ? 'text-indigo-600 dark:text-indigo-400'
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {demo.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {demo.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-32 mb-32"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Ready to try it yourself?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/20">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 rounded-full font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all">
              View Pricing
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 