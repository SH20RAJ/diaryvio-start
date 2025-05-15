'use client';

import { motion } from 'framer-motion';
import { FiPlay, FiStar } from 'react-icons/fi';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-indigo-200 text-transparent bg-clip-text">
            Transform Your Videos with AI Magic
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10">
            Create stunning video thumbnails in seconds using our advanced AI technology.
            Stand out on YouTube with thumbnails that drive more clicks and views.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-xl font-medium shadow-lg shadow-violet-500/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <FiPlay className="w-5 h-5" />
              <span>Try it Free</span>
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium backdrop-blur-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <FiStar className="w-5 h-5" />
              <span>View Examples</span>
            </button>
          </div>
          
          {/* Demo Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-video bg-gradient-to-br from-violet-600/20 to-indigo-600/20 backdrop-blur-xl border border-white/10">
              {/* Add demo video or screenshot here */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white/60">Demo Preview Coming Soon</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
