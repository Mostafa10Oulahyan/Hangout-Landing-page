import React from 'react';
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { HappeningNow } from "@/components/HappeningNow";
import { Discover } from "@/components/Discover";
import { FAQ } from "@/components/FAQ";

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HappeningNow />
      <Features />
      <Discover />
      <FAQ />
      <Footer />

    </main>
  );
}