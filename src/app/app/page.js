"use client";

import Navbar from '@/components/app/Navbar';
import HeroSection from '@/components/app/HeroSection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* FeaturesSection, TeachersSection, BlogSection, Footer will be added here */}
      </main>
    </>
  );
} 