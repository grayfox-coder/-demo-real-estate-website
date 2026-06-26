'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, BookOpen, Briefcase, Zap, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions', icon: Home },
    { name: 'Standards', href: '#standards', icon: BookOpen },
    { name: 'Portfolio', href: '#portfolio', icon: Briefcase },
    { name: 'How It Works', href: '#how-it-works', icon: Zap },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-[#4A6741] rounded-lg flex items-center justify-center">
              <span className="text-white font-serif font-bold text-xl">T</span>
            </div>
            <span className={`font-serif font-bold text-xl ${scrolled ? 'text-[#1C1C1C]' : 'text-white'}`}>
              Terranova
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-[#4A6741] ${
                  scrolled ? 'text-[#1C1C1C]' : 'text-white'
                }`}
              >
                <link.icon size={16} />
                <span>{link.name}</span>
              </motion.a>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-[#4A6741] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#4A6741]/90 transition-colors"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}