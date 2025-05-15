"use client";

import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

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

export default function Pricing() {
  return (
    <motion.section 
      id="pricing" 
      className="py-32 px-6 bg-gray-50 dark:bg-gray-900"
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
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Choose the plan that best fits your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Free Plan */}
          <motion.div variants={fadeIn}>
            <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Free</h3>
              <div className="mb-8">
                <span className="text-5xl font-bold text-gray-900 dark:text-white">$0</span>
                <span className="text-gray-600 dark:text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited text entries",
                  "Voice-to-text conversion",
                  "Basic AI insights",
                  "Smart search",
                  "Basic analytics"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-400">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 px-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div variants={fadeIn}>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-10 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-white/10 px-4 py-1 rounded-bl-lg text-white text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Premium</h3>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">$9.99</span>
                <span className="text-white/80">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Everything in Free",
                  "Unlimited photo storage",
                  "Video journal entries",
                  "Advanced AI insights",
                  "Priority support",
                  "Custom themes",
                  "Export options",
                  "Advanced analytics"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-white">
                    <CheckIcon className="w-5 h-5 text-white mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 px-8 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={fadeIn}
          className="text-center mt-16 text-gray-600 dark:text-gray-400"
        >
          <p>All plans include a 14-day free trial. No credit card required.</p>
          <p className="mt-2">Need a custom plan? <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">Contact us</a></p>
        </motion.div>
      </div>
    </motion.section>
  );
} 