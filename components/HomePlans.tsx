'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function HomePlans() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  const plans = [
    {
      name: 'ADU',
      beds: '1-2',
      baths: '1',
      sqft: '400-800',
      image1: 'https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&h=300&fit=crop',
      image2: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&h=300&fit=crop',
    },
    {
      name: 'Small Bar',
      beds: '2',
      baths: '1-2',
      sqft: '800-1,200',
      image1: 'https://images.unsplash.com/photo-1600596542815-2a4d9f6facb3?w=400&h=300&fit=crop',
      image2: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
    },
    {
      name: 'Medium Bar',
      beds: '3',
      baths: '2',
      sqft: '1,200-1,800',
      image1: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
      image2: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=300&fit=crop',
    },
    {
      name: 'Big Bar',
      beds: '4',
      baths: '2-3',
      sqft: '1,800-2,500',
      image1: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=400&h=300&fit=crop',
      image2: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop',
    },
    {
      name: 'Dogtrot',
      beds: '2-3',
      baths: '2',
      sqft: '1,000-1,500',
      image1: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=300&fit=crop',
      image2: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=400&h=300&fit=crop',
    },
    {
      name: 'Small L',
      beds: '3',
      baths: '2',
      sqft: '1,200-1,600',
      image1: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=400&h=300&fit=crop',
      image2: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=400&h=300&fit=crop',
    },
    {
      name: 'Big L',
      beds: '4',
      baths: '3',
      sqft: '1,800-2,400',
      image1: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop',
      image2: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&h=300&fit=crop',
    },
    {
      name: 'Village',
      beds: '5+',
      baths: '3+',
      sqft: '2,500+',
      image1: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=300&fit=crop',
      image2: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&h=300&fit=crop',
    },
  ];

  return (
    <section id="standards" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-16 text-center"
        >
          Home Plans Catalog
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onMouseEnter={() => setHoveredPlan(plan.name)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={hoveredPlan === plan.name ? plan.image2 : plan.image1}
                  alt={plan.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={hoveredPlan === plan.name ? 'image2' : 'image1'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-serif text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-center gap-4 text-sm opacity-90">
                  <span>{plan.beds} bed</span>
                  <span>•</span>
                  <span>{plan.baths} bath</span>
                  <span>•</span>
                  <span>{plan.sqft} sqft</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}