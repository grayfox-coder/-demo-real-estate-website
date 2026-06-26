'use client';

import { motion } from 'framer-motion';
import { Home, Heart, Calendar, GitBranch, Building2, TrendingUp, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

export default function HousingSolutions() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const solutions = [
    {
      icon: Home,
      title: 'Starter Home',
      description: 'Your first step into rural living with efficient, affordable designs.',
    },
    {
      icon: Heart,
      title: 'Forever Home',
      description: 'Build the permanent residence you and your family will love for generations.',
    },
    {
      icon: Calendar,
      title: 'Second Home',
      description: 'A perfect weekend retreat or vacation property in your favorite location.',
    },
    {
      icon: GitBranch,
      title: 'Hybrid Home',
      description: 'Flexible spaces that adapt to your changing needs over time.',
    },
    {
      icon: Building2,
      title: 'ADU',
      description: 'Accessory Dwelling Units for multigenerational living or rental income.',
    },
    {
      icon: TrendingUp,
      title: 'Investment Property',
      description: 'Strategic rural properties designed for long-term value appreciation.',
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
      setCanScrollRight(
        scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      );
    }
  };

  return (
    <section id="solutions" className="py-24 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-16 text-center"
        >
          Whatever type of place you have in mind.
        </motion.h2>

        <div className="relative">
          {/* Left Scroll Button */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all ${
              !canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <ChevronLeft className="text-[#4A6741]" size={24} />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide scroll-smooth px-12"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-80 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-[#4A6741]/10 rounded-xl flex items-center justify-center mb-6">
                  <solution.icon className="text-[#4A6741]" size={28} />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#1C1C1C] mb-3">
                  {solution.title}
                </h3>
                <p className="text-[#1C1C1C]/70 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-[#4A6741] font-medium hover:underline"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Right Scroll Button */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all ${
              !canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            <ChevronRight className="text-[#4A6741]" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}