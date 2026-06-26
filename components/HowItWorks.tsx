'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Wrench } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery',
      description: 'We learn about your vision, budget, and the perfect location for your rural property.',
    },
    {
      number: '02',
      icon: PenTool,
      title: 'Design',
      description: 'Our architects create custom plans that maximize your site\'s potential and your lifestyle.',
    },
    {
      number: '03',
      icon: Wrench,
      title: 'Build',
      description: 'We manage construction from groundbreaking to final walkthrough, ensuring quality every step.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-16 text-center"
        >
          Using a process built around you.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#4A6741] rounded-xl flex items-center justify-center">
                    <step.icon className="text-white" size={32} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-6xl font-serif text-[#C9B99A]/30 mb-2 -ml-4">
                    {step.number}
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#1C1C1C] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#1C1C1C]/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}