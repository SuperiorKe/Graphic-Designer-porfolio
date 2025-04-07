import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Brush, Shield } from 'lucide-react';
import HutuLogo from '../HutuLogo.svg';

const About = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-48 h-48 mx-auto mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8] to-transparent opacity-20 rounded-full animate-pulse" />
          <img
            src={HutuLogo}
            alt="HUTU Logo"
            className="w-full h-full object-contain relative z-10"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            HUTU represents more than just a name - it embodies our core philosophy of empathy in everything we create.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Meaning Behind HUTU</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              HUTU, meaning "empathy" in English, was chosen with purpose. We believe that the process of transforming ideas into tangible products or services requires a deep understanding of both the creator's vision and the end user's needs. This empathetic approach guides everything we do - from initial concept to final execution.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our philosophy extends beyond creation to protection. We understand that once these creative works come to life, they become an integral part of their creator's identity. This is where our technology services come in, providing the security and infrastructure needed to protect and preserve these valuable assets.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <Palette className="h-12 w-12 text-[#38BDF8]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Art</h3>
            <p className="text-gray-600">
              Professional graphics design services that bring your visual ideas to life through creative excellence and technical precision.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <Brush className="h-12 w-12 text-[#38BDF8]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Craft</h3>
            <p className="text-gray-600">
              Expert painting and interior decoration services that transform spaces into inspiring environments.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <Shield className="h-12 w-12 text-[#38BDF8]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Technology</h3>
            <p className="text-gray-600">
              Comprehensive CCTV, networking, and software solutions that protect and enhance your creative assets.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;