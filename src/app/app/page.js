"use client";

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

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