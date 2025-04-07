import React from 'react';
import { motion } from 'framer-motion';

interface ServiceSectionProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  reversed?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  features,
  image,
  imageAlt,
  reversed = false
}) => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
          <motion.div
            initial={{ opacity: 0, x: reversed ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <img
              src={image}
              alt={imageAlt}
              className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: reversed ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{title}</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">{description}</p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700 text-lg">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[#38BDF8] bg-opacity-20 flex items-center justify-center mr-3">
                    <span className="text-[#38BDF8] text-sm">✓</span>
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection