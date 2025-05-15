"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    name: "Sarah Chen",
    role: "Founder & CEO",
    image: "/team/sarah.jpg",
    bio: "Former AI researcher at Google, passionate about helping people preserve their memories."
  },
  {
    name: "Michael Rodriguez",
    role: "CTO",
    image: "/team/michael.jpg",
    bio: "Ex-engineering lead at Dropbox, building the future of personal data storage."
  },
  {
    name: "Emma Thompson",
    role: "Head of Design",
    image: "/team/emma.jpg",
    bio: "Award-winning designer focused on creating beautiful, intuitive experiences."
  },
  {
    name: "David Kim",
    role: "Head of AI",
    image: "/team/david.jpg",
    bio: "PhD in Machine Learning, making AI more accessible and human-friendly."
  }
];

const values = [
  {
    title: "Privacy First",
    description: "Your memories are yours alone. We use state-of-the-art encryption and never share your data."
  },
  {
    title: "Human-Centered",
    description: "Technology should enhance human connection, not replace it. We build tools that feel natural and intuitive."
  },
  {
    title: "Continuous Innovation",
    description: "We're constantly pushing the boundaries of what's possible with AI and personal journaling."
  },
  {
    title: "User Empowerment",
    description: "We believe in giving you full control over your digital memories and how you use them."
  }
];

export default function AboutPage() {
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
              Our Story
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Building the future of personal memory preservation
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                At DiaryVio, we believe that everyone's story deserves to be preserved and cherished. 
                Our mission is to make it effortless for people to capture, organize, and relive their 
                most precious memories using the power of AI.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Founded in 2023, we're a team of AI researchers, engineers, and designers who are 
                passionate about creating technology that enhances human connection and preserves 
                personal history.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-[3rem] blur-3xl"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-[3rem] p-8 shadow-2xl border border-indigo-100 dark:border-indigo-900/50">
                <div className="aspect-square relative">
                  <Image
                    src="/about/mission.jpg"
                    alt="Our mission"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 shadow-lg overflow-hidden"
              >
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {member.bio}
                  </p>
                </div>
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
            Join Us on Our Journey
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/20">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 rounded-full font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-all">
              View Open Positions
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 