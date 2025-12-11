import { useEffect } from 'react';
import Hero from '@/components/Hero';
import WhatIsMoji from '@/components/WhatIsMoji';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import MojiAI from '@/components/MojiAI';
import Pricing from '@/components/Pricing';
import FinalCTA from '@/components/FinalCTA';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white">
      <Hero />
      <WhatIsMoji />
      <Benefits />
      <HowItWorks />
      <MojiAI />
      <Pricing />
      <FinalCTA />
    </div>
  );
};

export default Index;