'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Terranova made our dream of a mountain retreat a reality. Their team handled everything from design to construction with incredible attention to detail.",
      client: "Sarah M.",
      location: "Asheville, NC",
      projectType: "Second Home",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=100&h=100&fit=crop",
    },
    {
      quote: "The ADU they built in our backyard has been perfect for my aging parents. The process was seamless and the quality exceeded our expectations.",
      client: "Michael R.",
      location: "Austin, TX",
      projectType: "ADU",
      image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=100&h=100&fit=crop",
    },
    {
      quote: "As an investor, I appreciate their expertise in identifying properties with strong potential. Their build cost accuracy is remarkable.",
      client: "Jennifer L.",
      location: "Denver, CO",
      projectType: "Investment Property",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=100&h=100&fit=crop",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-16 text-center"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.client}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#F8F5F0] rounded-2xl p-8 relative"
            >
              <Quote className="text-[#4A6741] mb-4" size={32} />
              <p className="text-[#1C1C1C]/80 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.client}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-[#1C1C1C]">{testimonial.client}</div>
                  <div className="text-sm text-[#1C1C1C]/60">
                    {testimonial.location} • {testimonial.projectType}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}