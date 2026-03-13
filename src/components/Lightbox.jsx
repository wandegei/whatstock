import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ images, selectedIndex, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate((selectedIndex - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        onNavigate((selectedIndex + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, images.length, onClose, onNavigate]);

  const handlePrevious = () => {
    onNavigate((selectedIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    onNavigate((selectedIndex + 1) % images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all z-10"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Image Counter */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="font-lato text-white">
            {selectedIndex + 1} / {images.length}
          </span>
        </div>

        {/* Image */}
        <motion.div
          key={selectedIndex}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="max-w-7xl max-h-[90vh] w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[selectedIndex].url}
            alt={images[selectedIndex].title}
            className="w-full h-full object-contain rounded-lg"
          />
          <div className="mt-4 text-center">
            <h3 className="font-playfair text-2xl font-bold text-white mb-2">
              {images[selectedIndex].title}
            </h3>
            <p className="font-lato text-white/80">
              {images[selectedIndex].description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;