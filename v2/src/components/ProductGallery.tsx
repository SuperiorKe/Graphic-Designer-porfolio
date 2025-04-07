import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface ProductGalleryProps {
  products: Product[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
      {products.map((product) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative overflow-hidden rounded-2xl shadow-lg"
        >
          <div className="aspect-w-16 aspect-h-12 w-full">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <h3 className="text-white text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-200 text-sm">{product.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGallery;