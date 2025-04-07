import React from 'react';
import ServiceSection from '../components/ServiceSection';
import ProductGallery from '../components/ProductGallery';

const techProducts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "CCTV Systems",
    description: "Advanced surveillance solutions for complete security"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Network Infrastructure",
    description: "Robust networking solutions for businesses"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Software Solutions",
    description: "Custom software implementation and support"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1581092921461-39b21c7f90f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Access Control",
    description: "Modern access control systems for enhanced security"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "System Integration",
    description: "Seamless integration of security and network systems"
  }
];

const Technology = () => {
  return (
    <div className="pt-24">
      <ServiceSection
        title="CCTV, Network & Software Solutions"
        description="Secure and enhance your creative assets with our technology solutions. We provide comprehensive security and networking services to protect what matters most."
        features={[
          'CCTV Installation & Monitoring',
          'Network Setup & Maintenance',
          'Software Installation',
          'Security Consulting'
        ]}
        image="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        imageAlt="Technology Services"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Solutions Portfolio</h2>
        <ProductGallery products={techProducts} />
      </div>
    </div>
  );
};

export default Technology;