import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../lib/animationPresets';

const GalleryImage = ({ image, index, onClick }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer group"
      onClick={onClick}
    >
      <img
        src={image.url}
        alt={image.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-playfair text-xl font-bold text-white mb-2">
            {image.title}
          </h3>
          <p className="font-lato text-white/90 text-sm">
            {image.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryImage;