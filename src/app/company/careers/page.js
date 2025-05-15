"use client";

import { motion } from 'framer-motion';
import { 
  BriefcaseIcon, 
  GlobeAltIcon, 
  HeartIcon, 
  SparklesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const benefits = [
  {
    icon: <GlobeAltIcon className="w-8 h-8" />,
    title: "Remote First",
    description: "Work from anywhere in the world with our distributed team."
  },
  {
    icon: <HeartIcon className="w-8 h-8" />,
    title: "Health & Wellness",
    description: "Comprehensive health coverage and wellness programs."
  },
  {
    icon: <SparklesIcon className="w-8 h-8" />,
    title: "Learning & Growth",
    description: "Annual learning budget and regular skill development workshops."
  }
];

const positions = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build beautiful, performant user interfaces for our web and mobile applications."
  },
  {
    title: "AI/ML Engineer",
    department: "AI",
    location: "Remote",
    type: "Full-time",
    description: "Develop and improve our AI models for voice recognition and natural language processing."
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create intuitive and delightful user experiences across our product suite."
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build and maintain our cloud infrastructure and deployment pipelines."
  }
];

export default function CareersPage() {
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
              Join Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Help us build the future of personal memory preservation
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Why Join Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 shadow-lg"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Open Positions
            </h2>
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
              <span className="text-sm font-medium">View all positions</span>
              <ArrowRightIcon className="w-4 h-4" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400">
                      {position.department}
                    </p>
                  </div>
                  <BriefcaseIcon className="w-6 h-6 text-gray-400" />
                </div>
                <div className="flex gap-4 mb-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {position.location}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {position.type}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {position.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Don't See Your Role?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. 
            Even if you don't see a position that matches your skills, 
            we'd love to hear from you.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/20">
            Send Us Your Resume
          </button>
        </motion.div>
      </div>
    </main>
  );
} 