"use client";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import Features from '@/components/Features';
import ProductPreview from '@/components/ProductPreview';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <ProductPreview />
      <Pricing />
      <Footer />
    </main>
  );
}
