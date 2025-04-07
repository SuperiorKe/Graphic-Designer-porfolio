import React from 'react';
import ServiceSection from '../components/ServiceSection';
import ProductGallery from '../components/ProductGallery';

const interiorProducts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Modern Living Spaces",
    description: "Contemporary interior designs for modern living"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Custom Wall Finishes",
    description: "Unique wall treatments and artistic finishes"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Kitchen Renovations",
    description: "Complete kitchen transformations with custom finishes"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Office Spaces",
    description: "Professional office interior design and decoration"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Decorative Elements",
    description: "Artistic touches that elevate your space"
  }
];

const InteriorCrafts = () => {
  return (
    <div className="pt-24">
      <ServiceSection
        title="Painting & Interior Decoration"
        description="Transform your spaces with our expert interior decoration and painting services. We blend artistry with functionality to create environments that inspire and comfort."
        features={[
          'Custom Wall Painting',
          'Interior Design Consultation',
          'Decorative Elements',
          'Space Optimization'
        ]}
        image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        imageAlt="Interior Decoration Services"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Projects</h2>
        <ProductGallery products={interiorProducts} />
      </div>
    </div>
  );
};

export default InteriorCrafts;