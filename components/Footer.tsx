'use client';

import { Share2, MessageCircle, Camera, Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1C1C1C] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-[#4A6741] rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">T</span>
              </div>
              <span className="font-serif font-bold text-xl">Terranova</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Designing and developing rural properties across the country with precision and care.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Housing Solutions</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Starter Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Forever Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Second Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">ADU</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investment Property</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Standards</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Home Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Design Process</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Build Quality</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Materials</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-white/70 mb-6">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Share2 size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Camera size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Briefcase size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © 2024 Terranova. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}