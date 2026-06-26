'use client';

import { motion } from 'framer-motion';

export default function NationwideCoverage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
              We do it across the country
            </h2>
            <p className="text-lg text-[#1C1C1C]/70 mb-8 leading-relaxed">
              From the mountains to the coast, our team has experience designing and developing rural properties in diverse climates and terrains. We understand local regulations and building practices in every region we serve.
            </p>
            <button className="bg-[#4A6741] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#4A6741]/90 transition-colors">
              See Our Projects
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-[#F8F5F0] rounded-2xl p-8 h-96 flex items-center justify-center">
              <svg
                viewBox="0 0 960 600"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 120 180 L 280 140 L 400 180 L 520 120 L 640 160 L 760 100 L 840 140 L 840 240 L 760 200 L 640 260 L 520 220 L 400 280 L 280 240 L 120 280 Z"
                  fill="#4A6741"
                  opacity="0.3"
                />
                <path
                  d="M 120 280 L 280 240 L 400 280 L 520 220 L 640 260 L 760 200 L 840 240 L 840 400 L 760 360 L 640 420 L 520 380 L 400 440 L 280 400 L 120 440 Z"
                  fill="#4A6741"
                  opacity="0.5"
                />
                <circle cx="480" cy="300" r="180" fill="#4A6741" opacity="0.2" />
                <circle cx="480" cy="300" r="120" fill="#4A6741" opacity="0.3" />
                <circle cx="480" cy="300" r="60" fill="#4A6741" opacity="0.4" />
                <circle cx="480" cy="300" r="8" fill="#4A6741" />
              </svg>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#C9B99A] text-[#1C1C1C] px-6 py-3 rounded-lg font-medium">
              18 States Covered
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}