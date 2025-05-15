"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  CalendarIcon, 
  UserIcon, 
  TagIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const featuredPost = {
  title: "The Future of Personal Journaling: How AI is Transforming the Way We Record Our Lives",
  excerpt: "Discover how artificial intelligence is revolutionizing the way we capture, organize, and relive our most precious memories.",
  author: "Sarah Chen",
  date: "March 15, 2024",
  category: "Technology",
  image: "/blog/featured.jpg",
  readTime: "8 min read"
};

const recentPosts = [
  {
    title: "5 Tips for Maintaining a Consistent Journaling Habit",
    excerpt: "Learn practical strategies to make journaling a daily habit that sticks.",
    author: "Michael Rodriguez",
    date: "March 12, 2024",
    category: "Lifestyle",
    image: "/blog/journaling-tips.jpg",
    readTime: "5 min read"
  },
  {
    title: "The Science Behind Memory and Digital Preservation",
    excerpt: "Exploring how digital tools can help us better preserve and recall our memories.",
    author: "Emma Thompson",
    date: "March 10, 2024",
    category: "Science",
    image: "/blog/memory-science.jpg",
    readTime: "6 min read"
  },
  {
    title: "Privacy in the Digital Age: How We Protect Your Memories",
    excerpt: "A deep dive into our security measures and commitment to data privacy.",
    author: "David Kim",
    date: "March 8, 2024",
    category: "Security",
    image: "/blog/privacy.jpg",
    readTime: "7 min read"
  }
];

const categories = [
  "All",
  "Technology",
  "Lifestyle",
  "Science",
  "Security",
  "Product Updates"
];

export default function BlogPage() {
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
              Our Blog
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Insights, stories, and updates from the DiaryVio team
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <UserIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {featuredPost.author}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {featuredPost.date}
                      </p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                    <span className="font-medium">Read More</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recent Posts */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
            Recent Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 shadow-lg overflow-hidden group"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <UserIcon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {post.author}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {post.date}
                        </p>
                      </div>
                    </div>
                    <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                      <ArrowRightIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
              Get the latest articles, product updates, and exclusive offers delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 