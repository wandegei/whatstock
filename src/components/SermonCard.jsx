import React from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, Clock, User } from 'lucide-react';
import { itemVariants } from '../lib/animationPresets';
import { useToast } from '../components/ui/use-toast';

const SermonCard = ({ sermon, index }) => {
  const { toast } = useToast();

  const handlePlay = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "Audio/video playback functionality will be available soon."
    });
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden group"
    >
      {/* Thumbnail with Play Button */}
      <div className="relative aspect-video bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center overflow-hidden">
        <button
          onClick={handlePlay}
          className="relative z-10 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-accent transition-all duration-300"
          aria-label={`Play sermon: ${sermon.title}`}
        >
          <Play className="w-8 h-8 text-primary group-hover:text-white ml-1" fill="currentColor" />
        </button>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-playfair text-xl font-bold text-primary mb-3 line-clamp-2">
          {sermon.title}
        </h3>

        <div className="flex flex-col gap-2 mb-4 text-sm text-dark-text/60 font-lato">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(sermon.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{sermon.pastor}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{sermon.duration}</span>
          </div>
        </div>

        <p className="font-lato text-dark-text/70 line-clamp-3 mb-4">
          {sermon.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-accent/20 text-primary text-sm font-lato font-medium rounded-full">
            {sermon.topic}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default SermonCard;