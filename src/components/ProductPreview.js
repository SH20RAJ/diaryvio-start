"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircleIcon, PlusCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ProductPreview() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-4xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              Try Our Todo App
            </span>
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Experience our simple yet powerful todo application. A perfect example of how DiaryVio helps you organize your life.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">My Todos</h3>
            <Link 
              href="/todos"
              className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
            >
              Open App <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          <div className="p-6">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <input 
                  type="text" 
                  placeholder="Add a new todo..."
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-r-lg">
                  <PlusCircleIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="space-y-3">
              {[
                { id: 1, text: "Complete project proposal", completed: true },
                { id: 2, text: "Schedule team meeting", completed: true },
                { id: 3, text: "Research new technologies", completed: false },
                { id: 4, text: "Update portfolio website", completed: false },
                { id: 5, text: "Plan weekend activities", completed: false }
              ].map(todo => (
                <div 
                  key={todo.id}
                  className={`flex items-center p-4 rounded-lg ${
                    todo.completed 
                      ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900' 
                      : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <div className="mr-3">
                    {todo.completed ? (
                      <CheckCircleIcon className="w-6 h-6 text-green-500" />
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600" />
                    )}
                  </div>
                  <span className={`flex-grow ${todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'}`}>
                    {todo.text}
                  </span>
                  <button className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-center">
            <Link 
              href="/todos"
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
            >
              Go to Todo App
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            This is just one of many features available in DiaryVio. Sign up today to explore all the tools we offer.
          </p>
          <Link 
            href="/login"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/20"
          >
            Get Started Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
