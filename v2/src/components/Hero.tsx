import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-5rem)] md:min-h-screen pt-16 md:pt-24">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"
      />
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto py-8 md:py-16"
        > 
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Where Art & Craftmanship<br />
            Meet Technology
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto">
            We blend creativity with technical expertise to deliver exceptional solutions
            in graphics design, interior decoration, and technology services.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#38BDF8] text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium hover:bg-[#0EA5E9] transition-colors shadow-lg"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;