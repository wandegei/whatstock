import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';

const SuccessStories = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'WholeSalers', 'Retailers', 'Final Consumer', 'Service Provider'];
  
  const cases = [
    {
      title: "FinTech Scale-up",
      category: "Finance",
      metric: "250% Growth",
      image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?auto=format&fit=crop&q=80",
      desc: "How we helped a mobile banking app acquire 50k users in 3 months."
    },
    {
      title: "Local Clinic Expansion",
      category: "Healthcare",
      metric: "500+ Leads",
      image: "https://images.unsplash.com/photo-1682514149196-e75fe2d1b899?auto=format&fit=crop&q=80",
      desc: "Doubling patient appointments through targeted local SEO."
    },
    {
      title: "E-commerce Boost",
      category: "Retail",
      metric: "3x ROI",
      image: "https://images.unsplash.com/photo-1659353219716-699803846194?auto=format&fit=crop&q=80",
      desc: "Optimizing ad spend for a fashion retailer."
    }
  ];

  const filteredCases = filter === 'All' ? cases : cases.filter(c => c.category === filter);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Real Results</h1>
          <p className="text-xl text-gray-600">See how we transform businesses across industries.</p>
        </div>

        {/* Filters   WholeSalers */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${filter === cat ? 'bg-primary text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredCases.map((item, index) => (
            <motion.div 
              key={index} 
              layout
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-accent text-green-900 px-3 py-1 rounded-full text-xs font-bold">
                  {item.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-primary font-bold mb-2">
                  <TrendingUp className="w-4 h-4" /> {item.metric}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.desc}</p>
                <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">Read Case Study</Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;