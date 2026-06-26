'use client';

import { motion } from 'framer-motion';
import { Building2, MapPin, Target, Scan } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    {
      icon: Building2,
      value: '200K+',
      label: 'sq ft under construction',
    },
    {
      icon: MapPin,
      value: '18',
      label: 'states',
    },
    {
      icon: Target,
      value: '5%',
      label: 'build cost accuracy',
    },
    {
      icon: Scan,
      value: '5,000+',
      label: 'land parcels evaluated',
    },
  ];

  return (
    <section className="py-16 bg-[#4A6741]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <stat.icon className="text-white" size={24} />
                </div>
              </div>
              <div className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}