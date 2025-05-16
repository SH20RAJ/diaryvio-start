"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SparklesIcon, PlayIcon } from '@heroicons/react/24/outline';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Hero({ onVideoOpen }) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="pt-32 pb-20 px-6"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div variants={fadeIn} className="space-y-10">
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full"
            >
              <SparklesIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-2" />
              <span className="text-indigo-700 dark:text-indigo-300 font-medium">Your Digital Memory Vault</span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                Capture Every Moment
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                In Your Own Way
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
            >
              Transform your thoughts, voice, photos, and videos into beautifully organized memories.
              Let AI help you preserve and relive your journey.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="/login" className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/20 text-lg inline-flex items-center">
                Start Free Trial
              </a>
              <a href="/todos" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg shadow-purple-500/20 text-lg inline-flex items-center">
                Try Todos App
              </a>
              <button
                onClick={onVideoOpen}
                className="px-8 py-4 border-2 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 rounded-full font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all text-lg flex items-center space-x-2"
              >
                <PlayIcon className="w-6 h-6" />
                <span>Watch Demo</span>
              </button>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="flex items-center space-x-4 text-gray-500 dark:text-gray-400"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-medium">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm">
                <span className="font-semibold text-gray-900 dark:text-white">10,000+</span> people already sharing their stories
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-[3rem] blur-3xl"></div>
            <div className="relative bg-white dark:bg-gray-900 rounded-[3rem] p-8 shadow-2xl border border-indigo-100 dark:border-indigo-900/50">
              <div className="aspect-square relative">
                <Image
                  src="/hero.png" // Replace with your image path
                  alt="Voice diary illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}