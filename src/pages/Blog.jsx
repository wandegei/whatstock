import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';

const Blog = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Insights & News</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[1, 2, 3].map(i => (
             <div key={i} className="bg-white rounded-2xl shadow-card overflow-hidden hover:shadow-lg transition-shadow">
               <div className="h-48 bg-gray-200"></div>
               <div className="p-6">
                 <div className="flex items-center gap-2 text-xs text-secondary font-bold mb-3 uppercase tracking-wide">
                   <span>Strategy</span> • <span>5 min read</span>
                 </div>
                 <h3 className="text-xl font-bold mb-3 text-gray-900">Future of B2B Marketing in 2026</h3>
                 <p className="text-gray-600 mb-6 text-sm">Explore key trends shaping the industry landscape.</p>
                 <Button variant="link" className="text-primary p-0 font-bold hover:no-underline">Read More &rarr;</Button>
               </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;