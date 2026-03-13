import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../lib/animationPresets';
import GalleryImage from '../components/GalleryImage';
import Lightbox from '../components/Lightbox';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1603820112305-479d8d4a7ed9',
      title: 'Sunday Worship Service',
      description: 'Our congregation gathered in joyful worship and praise'
    },
    {
      url: 'https://images.unsplash.com/photo-1614648789731-5b396e99b62d',
      title: 'Community Prayer Meeting',
      description: 'Coming together in powerful intercessory prayer'
    },
    {
      url: 'https://images.unsplash.com/photo-1645878942008-235c58d3b040',
      title: 'Youth Ministry Event',
      description: 'Young people growing in faith and fellowship'
    },
    {
      url: 'https://images.unsplash.com/photo-1683151509495-2f418bf617d4',
      title: 'Community Outreach',
      description: 'Serving our community with love and compassion'
    },
    {
      url: 'https://images.unsplash.com/photo-1531808012724-688c1de500b4',
      title: 'Worship Team Ministry',
      description: 'Leading the congregation in heartfelt worship'
    },
    {
      url: 'https://images.unsplash.com/photo-1580913265668-5cdecfaa7759',
      title: 'Church Family Gathering',
      description: 'Fellowship and connection with our church family'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gallery - Love of Christ Christian Fellowship Church</title>
        <meta name="description" content="View photos from our church services, events, and community activities at Love of Christ Christian Fellowship Church." />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-gradient-to-br from-primary to-primary/80 py-20 mb-16"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              variants={itemVariants}
              className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4"
            >
              Photo Gallery
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="font-lato text-xl text-white/90 max-w-2xl mx-auto"
            >
              Capturing moments of worship, fellowship, and service in our church community
            </motion.p>
          </div>
        </motion.section>

        {/* Gallery Grid */}
        <div className="container mx-auto px-4">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <GalleryImage
                  key={index}
                  image={image}
                  index={index}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </motion.section>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <Lightbox
            images={images}
            selectedIndex={selectedImage}
            onClose={() => setSelectedImage(null)}
            onNavigate={setSelectedImage}
          />
        )}
      </div>
    </>
  );
};

export default Gallery;