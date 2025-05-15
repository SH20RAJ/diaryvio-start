"use client";

import { motion } from 'framer-motion';
import { 
  MicrophoneIcon, 
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  PhotoIcon,
  VideoCameraIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  CloudArrowUpIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const features = [
  {
    icon: MicrophoneIcon,
    title: "Voice-to-Text",
    description: "Transform your spoken thoughts into beautifully formatted text entries. Our advanced AI ensures accurate transcription and natural language processing.",
    benefits: [
      "Real-time transcription",
      "Multiple language support",
      "Automatic punctuation",
      "Emotion detection"
    ]
  },
  {
    icon: DocumentTextIcon,
    title: "Text Journaling",
    description: "Write your thoughts with our beautiful, distraction-free editor. Perfect for detailed reflections and long-form content.",
    benefits: [
      "Rich text formatting",
      "Markdown support",
      "Auto-save",
      "Version history"
    ]
  },
  {
    icon: PhotoIcon,
    title: "Photo Memories",
    description: "Upload and organize your photos with AI-powered captions and tags. Create visual stories that last forever.",
    benefits: [
      "AI-powered tagging",
      "Smart organization",
      "High-resolution storage",
      "Easy sharing"
    ]
  },
  {
    icon: VideoCameraIcon,
    title: "Video Journals",
    description: "Record video entries and store them securely with automatic transcription. Perfect for capturing moments in motion.",
    benefits: [
      "HD video storage",
      "Auto-transcription",
      "Video chapters",
      "Secure streaming"
    ]
  },
  {
    icon: MagnifyingGlassIcon,
    title: "Smart Search",
    description: "Find any memory instantly with our AI-powered search that understands context and meaning.",
    benefits: [
      "Semantic search",
      "Voice search",
      "Image search",
      "Advanced filters"
    ]
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "AI Companion",
    description: "Get insights and reflections from an AI that truly understands your journey and helps you grow.",
    benefits: [
      "Personal insights",
      "Mood tracking",
      "Writing suggestions",
      "Memory highlights"
    ]
  },
  {
    icon: ShieldCheckIcon,
    title: "Privacy & Security",
    description: "Your memories are protected with enterprise-grade security and privacy controls.",
    benefits: [
      "End-to-end encryption",
      "Two-factor authentication",
      "Privacy controls",
      "Regular backups"
    ]
  },
  {
    icon: CloudArrowUpIcon,
    title: "Cloud Sync",
    description: "Access your memories from anywhere with seamless cloud synchronization.",
    benefits: [
      "Cross-device sync",
      "Offline access",
      "Automatic backup",
      "Version control"
    ]
  },
  {
    icon: ChartBarIcon,
    title: "Analytics & Insights",
    description: "Gain valuable insights about your journaling habits and emotional patterns.",
    benefits: [
      "Writing analytics",
      "Mood tracking",
      "Habit formation",
      "Progress reports"
    ]
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile Experience",
    description: "Capture memories on the go with our beautiful mobile apps.",
    benefits: [
      "iOS & Android apps",
      "Offline mode",
      "Quick capture",
      "Push notifications"
    ]
  }
];

export default function FeaturesPage() {
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
              Powerful Features
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Everything you need to capture, organize, and relive your most precious memories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <feature.icon className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-gray-600 dark:text-gray-400">
                        <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20 mb-32"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Ready to start your journey?
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