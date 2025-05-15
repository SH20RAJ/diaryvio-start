"use client";

import { motion } from 'framer-motion';
import { 
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  ArrowTrendingUpIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const metrics = [
  {
    title: "Market Size",
    value: "$12B",
    description: "Total Addressable Market",
    icon: <GlobeAltIcon className="w-8 h-8" />
  },
  {
    title: "Growth Rate",
    value: "300%",
    description: "Year-over-Year Growth",
    icon: <ArrowTrendingUpIcon className="w-8 h-8" />
  },
  {
    title: "Active Users",
    value: "500K+",
    description: "Monthly Active Users",
    icon: <UserGroupIcon className="w-8 h-8" />
  },
  {
    title: "Revenue",
    value: "$2.5M",
    description: "Annual Recurring Revenue",
    icon: <CurrencyDollarIcon className="w-8 h-8" />
  }
];

const questions = [
  {
    question: "What problem are you solving?",
    answer: "In today's digital age, people are creating more memories than ever, but they're scattered across different platforms and often lost. DiaryVio solves this by providing a unified, AI-powered platform that makes it effortless to capture, organize, and relive precious memories through text, voice, photos, and video.",
    icon: <LightBulbIcon className="w-6 h-6" />
  },
  {
    question: "What's your competitive advantage?",
    answer: "Our proprietary AI technology sets us apart. We offer real-time voice-to-text transcription, emotion detection, smart organization, and personalized insights that no other platform provides. Our focus on privacy and security also gives us an edge in the market.",
    icon: <ShieldCheckIcon className="w-6 h-6" />
  },
  {
    question: "What's your business model?",
    answer: "We operate on a freemium model with three tiers: Free, Pro ($9.99/month), and Premium ($19.99/month). Our conversion rate from free to paid users is 15%, well above industry average. We also offer enterprise solutions for organizations.",
    icon: <CurrencyDollarIcon className="w-6 h-6" />
  },
  {
    question: "What's your growth strategy?",
    answer: "We're focusing on three key areas: 1) Product-led growth through viral features and referrals, 2) Strategic partnerships with mental health and wellness platforms, and 3) Enterprise expansion into healthcare and education sectors.",
    icon: <RocketLaunchIcon className="w-6 h-6" />
  },
  {
    question: "What's your team's background?",
    answer: "Our founding team brings together expertise from Google, Dropbox, and leading AI research institutions. We have a proven track record of building successful products and scaling startups.",
    icon: <UserGroupIcon className="w-6 h-6" />
  },
  {
    question: "What's your funding history?",
    answer: "We've raised $2.5M in seed funding from top-tier investors. Our current round is $5M Series A, which will be used for product development, market expansion, and team growth.",
    icon: <ChartBarIcon className="w-8 h-8" />
  }
];

const marketTrends = [
  {
    title: "Digital Memory Market",
    growth: "25% CAGR",
    description: "Growing demand for digital memory preservation"
  },
  {
    title: "AI in Personal Tech",
    growth: "40% CAGR",
    description: "Rapid adoption of AI in personal applications"
  },
  {
    title: "Mental Wellness Tech",
    growth: "30% CAGR",
    description: "Increasing focus on mental health and wellness"
  }
];

export default function PitchPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 pt-24">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              The Future of Personal Memory Preservation
            </span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-400">
            Join us in revolutionizing how people capture, organize, and relive their most precious memories
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 shadow-lg"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  {metric.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {metric.value}
                </h3>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                  {metric.title}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Market Trends */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Market Opportunity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marketTrends.map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-indigo-600 to-purple-600 p-8 rounded-3xl text-white"
              >
                <h3 className="text-xl font-bold mb-2">
                  {trend.title}
                </h3>
                <p className="text-3xl font-bold mb-2">
                  {trend.growth}
                </p>
                <p className="text-indigo-100">
                  {trend.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Questions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Key Questions
          </h2>
          <div className="space-y-8">
            {questions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 shadow-lg"
              >
                <div className="flex items-start gap-6">
                  <div className="text-indigo-600 dark:text-indigo-400">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                      {item.question}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investment Ask */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Investment Opportunity
            </h2>
            <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
              We're raising $5M in Series A funding to accelerate our growth and capture the rapidly expanding market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-colors">
                Schedule a Meeting
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors">
                Download Pitch Deck
              </button>
            </div>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
            Backed by Industry Leaders
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Sequoia', 'Andreessen Horowitz', 'Y Combinator', 'First Round'].map((investor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-900/50 shadow-lg"
              >
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {investor}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
} 