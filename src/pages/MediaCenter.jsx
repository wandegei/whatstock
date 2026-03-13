import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Image as ImageIcon, FileText } from 'lucide-react';
import Lightbox from '../components/Lightbox';
import { Button } from '../components/ui/button';

const MediaCenter = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('photos');

  const images = [
    { url: 'https://images.unsplash.com/photo-1657737184816-97bb5e63c32b', title: 'Annual Summit', description: 'Our team gathering 2025' },
    { url: 'https://images.unsplash.com/photo-1657737185882-4403efaaa92d', title: 'Campaign Launch', description: 'Behind the scenes' },
    { url: 'https://images.unsplash.com/photo-1625296276703-3fbc924f07b5', title: 'Strategy Room', description: 'Planning session' },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Media Center</h1>
          <p className="text-xl text-gray-600">News, photos, and updates from Whatstock Business.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-12 border-b border-gray-200">
           {['photos', 'videos', 'press'].map(tab => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`pb-4 px-4 font-bold capitalize transition-colors border-b-2 ${activeTab === tab ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
             >
               {tab}
             </button>
           ))}
        </div>

        {/* Content */}
        {activeTab === 'photos' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(index)}
                className="cursor-pointer rounded-2xl overflow-hidden shadow-md aspect-video relative group"
              >
                <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ImageIcon className="text-white w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'videos' && (
           <div className="text-center py-20 bg-gray-50 rounded-3xl">
             <Play className="w-16 h-16 text-gray-300 mx-auto mb-4" />
             <p className="text-gray-500">Video gallery coming soon.</p>
           </div>
        )}

        {activeTab === 'press' && (
           <div className="space-y-4">
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
               <div>
                 <div className="text-sm text-secondary font-bold mb-1">Feb 2026</div>
                 <h3 className="font-bold text-gray-900">Whatstock Business Announces New Global HQ</h3>
               </div>
               <Button variant="ghost" size="sm">Read</Button>
             </div>
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
               <div>
                 <div className="text-sm text-secondary font-bold mb-1">Jan 2026</div>
                 <h3 className="font-bold text-gray-900">Q4 Report: 200% YOY Growth</h3>
               </div>
               <Button variant="ghost" size="sm">Read</Button>
             </div>
           </div>
        )}

        {selectedImage !== null && (
          <Lightbox
            images={images}
            selectedIndex={selectedImage}
            onClose={() => setSelectedImage(null)}
            onNavigate={setSelectedImage}
          />
        )}
      </div>
    </div>
  );
};

export default MediaCenter;