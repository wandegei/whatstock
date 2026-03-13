import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <button className="w-full px-6 py-4 text-left font-bold flex justify-between items-center hover:bg-gray-50">
                <span>How does your pricing model work?</span>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;