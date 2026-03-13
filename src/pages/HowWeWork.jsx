import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Zap, BarChart, RefreshCw, CheckCircle } from 'lucide-react';
import { containerVariants } from '../lib/animationPresets';

const HowWeWork = () => {
  const steps = [
    {
      icon: Search,
      title: "We check for the",   
      desc: "Quality and type of the product and service",
      metric: "100% Transparency"
    },
    {
      icon: PenTool,
      title: "Strategy Design",
      desc: "Creating a roadmap tailored to your specific growth KPIs.",
      metric: "Custom Roadmap"
    },
    {
      icon: Zap,
      title: "Execution",
      desc: "Launching campaigns across chosen channels with precision.",
      metric: "Rapid Deployment"
    },
    {
      icon: BarChart,
      title: "Optimization",
      desc: "Real-time data monitoring to improve performance daily.",
      metric: "Data-Driven"
    },
    {
      icon: RefreshCw,
      title: "Scale",
      desc: "Expanding what works to maximize revenue and reach.",
      metric: "Exponential Growth"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Process</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From analysis to execution, our 5-step methodology ensures consistent results.
          </p>
        </motion.div>

        {/* Visual Process */}
        <div className="relative max-w-5xl mx-auto mb-32">
          <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary hidden md:block transform -translate-x-1/2 rounded-full"></div>
          
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={`bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden group hover:border-primary/30 transition-colors ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                    <div className={`absolute top-0 w-2 h-full bg-primary transition-all duration-300 ${index % 2 !== 0 ? 'right-0' : 'left-0'}`}></div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.desc}</p>
                    <div className={`inline-flex items-center gap-2 text-sm font-bold text-secondary bg-secondary/10 px-3 py-1 rounded-full`}>
                      <CheckCircle className="w-4 h-4" /> {step.metric}
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex-shrink-0 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-glow border-4 border-primary">
                  <step.icon className="w-10 h-10 text-primary" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-gray-800 border-2 border-white">
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials for Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-gray-50 p-8 rounded-3xl flex items-start gap-4">
            <img src="https://images.unsplash.com/photo-1544212408-c711b7c19b92?auto=format&fit=crop&q=80" alt="Client" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <p className="italic text-gray-600 mb-4">"The discovery phase was an eye-opener. They found opportunities we didn't even know existed."</p>
              <h4 className="font-bold text-gray-900">Lisa M.</h4>
              <span className="text-sm text-gray-500">Retail Owner</span>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-3xl flex items-start gap-4">
            <img src="https://images.unsplash.com/photo-1575383596664-30f4489f9786?auto=format&fit=crop&q=80" alt="Client" className="w-16 h-16 rounded-full object-cover" />
            <div>
              <p className="italic text-gray-600 mb-4">"Execution was flawless. We were live in under a week and saw results immediately."</p>
              <h4 className="font-bold text-gray-900">James T.</h4>
              <span className="text-sm text-gray-500">Tech Startup Founder</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;