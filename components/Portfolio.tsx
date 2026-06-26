'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'ADU', 'Second Home', 'Investment'];

  const projects = [
    {
      name: 'Mountain Retreat',
      type: 'Second Home',
      beds: 3,
      baths: 2,
      sqft: '1,800',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=400&fit=crop',
    },
    {
      name: 'Cottage ADU',
      type: 'ADU',
      beds: 1,
      baths: 1,
      sqft: '600',
      image: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=600&h=400&fit=crop',
    },
    {
      name: 'Lakeside Investment',
      type: 'Investment',
      beds: 4,
      baths: 3,
      sqft: '2,200',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
    },
    {
      name: 'Forest Cabin',
      type: 'Second Home',
      beds: 2,
      baths: 1,
      sqft: '900',
      image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=600&h=400&fit=crop',
    },
    {
      name: 'Backyard Studio',
      type: 'ADU',
      beds: 1,
      baths: 1,
      sqft: '450',
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=400&fit=crop',
    },
    {
      name: 'Meadow Property',
      type: 'Investment',
      beds: 3,
      baths: 2,
      sqft: '1,600',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop',
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-12 text-center"
        >
          Portfolio
        </motion.h2>

        <div className="flex justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-[#4A6741] text-white'
                  : 'bg-white text-[#1C1C1C] hover:bg-[#C9B99A]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#4A6741] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-[#1C1C1C] mb-3">
                  {project.name}
                </h3>
                <div className="flex items-center gap-4 text-sm text-[#1C1C1C]/70">
                  <span>{project.beds} bed</span>
                  <span>•</span>
                  <span>{project.baths} bath</span>
                  <span>•</span>
                  <span>{project.sqft} sqft</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}