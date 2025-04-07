import React from 'react';
import ServiceSection from '../components/ServiceSection';
import ProductGallery from '../components/ProductGallery';

const graphicsProducts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Brand Identity Design",
    description: "Complete brand identity packages including logos, color schemes, and typography"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Marketing Materials",
    description: "Eye-catching designs for brochures, flyers, and social media"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Custom T-Shirt Design",
    description: "Unique and trendy t-shirt designs for your brand or event"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Digital Illustrations",
    description: "Custom illustrations for various digital and print applications"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Packaging Design",
    description: "Creative packaging solutions that stand out on the shelf"
  }
];

const GraphicsArts = () => {
  return (
    <div className="pt-24">
      <ServiceSection
        title="Professional Graphics Design"
        description="Our graphics design services include branding, logo design, marketing materials, digital art, and custom T-shirt designs. We transform your ideas into visual masterpieces that communicate your message effectively."
        features={[
          'Brand Identity Design',
          'Print & Digital Media',
          'Custom Illustrations',
          'Marketing Collateral'
        ]}
        image="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        imageAlt="Graphics Design Services"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Work</h2>
        <ProductGallery products={graphicsProducts} />
      </div>
    </div>
  );
};

export default GraphicsArts;