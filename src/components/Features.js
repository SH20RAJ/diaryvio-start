"use client";

import { motion } from 'framer-motion';
import { 
  MicrophoneIcon, 
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  PhotoIcon,
  VideoCameraIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

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

export default function Features() {
  return (
    <motion.section 
      id="features" 
      className="py-32 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Capture Memories Your Way
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Choose how you want to document your journey with our versatile features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: MicrophoneIcon,
              title: "Voice-to-Text",
              description: "Speak naturally and watch your thoughts transform into beautifully formatted entries. Free for all users.",
              free: true
            },
            {
              icon: DocumentTextIcon,
              title: "Text Journaling",
              description: "Write your thoughts directly with our beautiful editor. Perfect for detailed reflections.",
              free: true
            },
            {
              icon: PhotoIcon,
              title: "Photo Memories",
              description: "Upload and organize your photos with AI-powered captions and tags. Premium feature.",
              free: false
            },
            {
              icon: VideoCameraIcon,
              title: "Video Journals",
              description: "Record video entries and store them securely with automatic transcription. Premium feature.",
              free: false
            },
            {
              icon: MagnifyingGlassIcon,
              title: "Smart Search",
              description: "Find any memory instantly with AI-powered search that understands context.",
              free: true
            },
            {
              icon: ChatBubbleLeftRightIcon,
              title: "AI Companion",
              description: "Get insights and reflections from an AI that truly understands your journey.",
              free: true
            }
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              variants={fadeIn}
              className="group"
            >
              <div className="bg-white dark:bg-gray-900 p-10 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all shadow-lg shadow-indigo-500/5 hover:shadow-xl hover:shadow-indigo-500/10">
                <div className="flex items-center justify-between mb-6">
                  <feature.icon className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
                  {feature.free ? (
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
                      Free
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
                      Premium
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 