'use client';

import { motion } from 'framer-motion';
import { FiPlay, FiCheck, FiLock, FiZap, FiTrendingUp, FiImage } from 'react-icons/fi';

export default function FeaturesSection() {
  const features = [
    {
      icon: <FiPlay className="w-6 h-6 text-violet-400" />,
      title: 'One-Click Generation',
      description: 'Upload your video and get AI-powered thumbnail suggestions instantly'
    },
    {
      icon: <FiZap className="w-6 h-6 text-violet-400" />,
      title: 'Smart AI Technology',
      description: 'Our advanced AI understands your video content to create perfect thumbnails'
    },
    {
      icon: <FiTrendingUp className="w-6 h-6 text-violet-400" />,
      title: 'Engagement Optimization',
      description: 'Data-driven suggestions to maximize your click-through rates'
    },
    {
      icon: <FiImage className="w-6 h-6 text-violet-400" />,
      title: 'Custom Styling',
      description: 'Customize colors, fonts, and layouts to match your brand'
    },
    {
      icon: <FiCheck className="w-6 h-6 text-violet-400" />,
      title: 'Smart Optimization',
      description: 'Our AI analyzes your content to create thumbnails that maximize engagement'
    },
    {
      icon: <FiLock className="w-6 h-6 text-violet-400" />,
      title: 'Secure & Private',
      description: 'Your content is always protected with enterprise-grade security'
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-indigo-400 text-transparent bg-clip-text">
            Powerful Features
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Everything you need to create stunning thumbnails that capture attention and drive engagement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-violet-500/50 transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
