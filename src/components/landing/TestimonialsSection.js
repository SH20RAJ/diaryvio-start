'use client';

import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'YouTube Creator',
      image: '/testimonials/sarah.jpg',
      content: 'AIThumb has completely transformed how I create thumbnails. My click-through rates have improved by 40% since I started using it!',
      stars: 5
    },
    {
      name: 'Mike Chen',
      role: 'Content Strategist',
      image: '/testimonials/mike.jpg',
      content: 'The AI suggestions are incredibly accurate and save me hours of work. Best investment for my channel growth.',
      stars: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Digital Marketing Manager',
      image: '/testimonials/emily.jpg',
      content: 'Simple, effective, and powerful. AIThumb helps us maintain consistent quality across all our video content.',
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-indigo-400 text-transparent bg-clip-text">
            Loved by Content Creators
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            See what our users are saying about their experience with AIThumb
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-violet-500/50 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mr-4">
                  {/* Replace with actual images later */}
                  <span className="text-violet-400 font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
