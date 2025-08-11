"use client";

import React, { useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/sections/hero';
import BiographySection from '@/components/sections/biography';
import { ShowsSection } from '@/components/sections/shows';
import { GallerySection } from '@/components/sections/gallery';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          const headerHeight = 80; // Adjust based on your header height
          const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listeners to all anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    // Cleanup event listeners on unmount
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <BiographySection />
        <ShowsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}