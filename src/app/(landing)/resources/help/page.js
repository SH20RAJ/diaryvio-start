"use client";

import { motion } from 'framer-motion';
import { 
  QuestionMarkCircleIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const categories = [
  {
    title: "Getting Started",
    icon: <BookOpenIcon className="w-6 h-6" />,
    faqs: [
      {
        question: "How do I create my first journal entry?",
        answer: "To create your first journal entry, simply click the 'New Entry' button in the top right corner. You can choose between text, voice, or video entry. For text entries, you'll get a clean, distraction-free editor. For voice entries, just start speaking and we'll transcribe it automatically."
      },
      {
        question: "What's the difference between free and premium features?",
        answer: "Our free plan includes unlimited text entries and voice-to-text conversion. Premium features include unlimited photo storage, video journals, advanced AI insights, and priority support. You can upgrade to premium anytime from your account settings."
      },
      {
        question: "How secure is my data?",
        answer: "We take security seriously. All your data is encrypted both in transit and at rest. We use industry-standard security measures and never share your data with third parties. You can also enable two-factor authentication for additional security."
      }
    ]
  },
  {
    title: "Features & Usage",
    icon: <QuestionMarkCircleIcon className="w-6 h-6" />,
    faqs: [
      {
        question: "How does the voice-to-text feature work?",
        answer: "Our voice-to-text feature uses advanced AI to transcribe your spoken words into text. Simply tap the microphone icon and start speaking. The transcription happens in real-time, and you can edit the text afterward if needed."
      },
      {
        question: "Can I export my journal entries?",
        answer: "Yes, you can export your entries in various formats including PDF, DOCX, and plain text. Premium users can also export their entire journal with all media attachments. Go to Settings > Export to access these options."
      },
      {
        question: "How do I organize my entries with tags?",
        answer: "You can add tags to any entry by clicking the tag icon in the editor. Tags help you organize and find entries easily. You can also create custom tag categories and filter entries by multiple tags."
      }
    ]
  },
  {
    title: "Account & Billing",
    icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
    faqs: [
      {
        question: "How do I change my subscription plan?",
        answer: "You can upgrade or downgrade your subscription at any time from your account settings. Changes to your plan will take effect at the start of your next billing cycle."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely through our payment partners."
      },
      {
        question: "How do I cancel my subscription?",
        answer: "You can cancel your subscription from your account settings. Your premium features will remain active until the end of your current billing period."
      }
    ]
  }
];

const guides = [
  {
    title: "Getting Started Guide",
    description: "Learn the basics of DiaryVio and start your journaling journey.",
    icon: <BookOpenIcon className="w-6 h-6" />
  },
  {
    title: "Voice Journaling Tips",
    description: "Make the most of our voice-to-text feature with these pro tips.",
    icon: <QuestionMarkCircleIcon className="w-6 h-6" />
  },
  {
    title: "Privacy & Security",
    description: "Understand how we protect your data and privacy.",
    icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />
  }
];

export default function HelpPage() {
  const [openFaqs, setOpenFaqs] = useState({});

  const toggleFaq = (categoryIndex, faqIndex) => {
    const key = `${categoryIndex}-${faqIndex}`;
    setOpenFaqs(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 pt-24">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Help Center
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Find answers to your questions and learn how to make the most of DiaryVio
          </p>
        </motion.div>

        {/* Search Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Quick Guides */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
            Quick Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  {guide.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {guide.description}
                </p>
                <button className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                  <span className="font-medium">Read Guide</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-indigo-600 dark:text-indigo-400">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <motion.div
                      key={faqIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: faqIndex * 0.1 }}
                      className="bg-white dark:bg-gray-800 rounded-2xl border border-indigo-100 dark:border-indigo-900/50 shadow-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(categoryIndex, faqIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left"
                      >
                        <span className="text-lg font-medium text-gray-900 dark:text-white">
                          {faq.question}
                        </span>
                        <ChevronDownIcon
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            openFaqs[`${categoryIndex}-${faqIndex}`] ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openFaqs[`${categoryIndex}-${faqIndex}`] && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 dark:text-gray-400">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Still Need Help?
            </h2>
            <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you 24/7. Get in touch with us through any of these channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-colors">
                Live Chat
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-colors">
                Email Support
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 