"use client";

import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

const contactMethods = [
  {
    icon: <EnvelopeIcon className="w-6 h-6" />,
    title: "Email",
    description: "Get in touch with our team",
    value: "hello@diaryvio.com"
  },
  {
    icon: <PhoneIcon className="w-6 h-6" />,
    title: "Phone",
    description: "Call us directly",
    value: "+1 (555) 123-4567"
  },
  {
    icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
    title: "Live Chat",
    description: "Chat with our support team",
    value: "Available 24/7"
  }
];

const offices = [
  {
    city: "San Francisco",
    address: "123 Market Street, Suite 100",
    country: "United States",
    icon: <MapPinIcon className="w-6 h-6" />
  },
  {
    city: "London",
    address: "45 Old Street, Shoreditch",
    country: "United Kingdom",
    icon: <MapPinIcon className="w-6 h-6" />
  },
  {
    city: "Singapore",
    address: "71 Robinson Road, #14-01",
    country: "Singapore",
    icon: <MapPinIcon className="w-6 h-6" />
  }
];

export default function ContactPage() {
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
              Get in Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We'd love to hear from you. Here's how you can reach us.
          </p>
        </motion.div>

        {/* Contact Methods Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 shadow-lg"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {method.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {method.description}
                </p>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                  {method.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/20"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                Our Offices
              </h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-indigo-600 dark:text-indigo-400">
                        {office.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                          {office.city}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-1">
                          {office.address}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          {office.country}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Check out our 
            <a href="/help" className="text-indigo-600 dark:text-indigo-400 hover:underline ml-1">
              Help Center
            </a>
          </p>
        </motion.div>
      </div>
    </main>
  );
} 