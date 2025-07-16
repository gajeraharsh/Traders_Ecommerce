'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturedCategories from '@/components/home/FeaturedCategories';
import ProductGrid from '@/components/products/ProductGrid';
import NewsletterSignup from '@/components/common/NewsletterSignup';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ToastProvider } from '@/components/providers/ToastProvider';

export default function Home() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>
            <HeroSection />
            <FeaturedCategories />
            <section className="py-16 bg-secondary/20">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
                <ProductGrid />
              </div>
            </section>
            <NewsletterSignup />
          </main>
          <Footer />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}