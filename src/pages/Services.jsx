import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Inbox, Share2, Check, ArrowRight, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { containerVariants, itemVariants } from '../lib/animationPresets';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: MessageCircle,
      title: "WhatsApp Bulk Messaging",
      features: ["98% Open Rate", "Verified Business API", "Automated Workflows", "Compliance Checks"],
      price: ""
    },
    {
      id: 2,
      icon: Mail,
      title: "Email Marketing",
      features: ["A/B Testing", "List Segmentation", "Custom Templates", "Detailed Analytics"],
      price: ""
    },
    {
      id: 3,
      icon: Inbox,
      title: "Direct Messaging",
      features: ["Lead Qualification", "24/7 Response", "Script Optimization", "Appointment Setting"],
      price: ""
    },
    {
      id: 4,
      icon: Share2,
      title: "Social Media Promotion",
      features: ["Content Strategy", "Cross-platform Posting", "Community Management", "Growth Reporting"],
      price: ""
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h1 variants={itemVariants} className="text-5xl font-bold text-gray-900 mb-6">
            Services That <span className="text-secondary">Deliver</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
           Driving business growth through strategic WhatsApp marketing, email campaigns, and direct inbox engagement.
          </motion.p>
        </motion.div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-24 border border-gray-100">
          <div className="p-8 bg-gray-50 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">We are committed to promote you business through this Below.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            {services.map((service) => (
              <div key={service.id} className="p-8 hover:bg-green-50/30 transition-colors">
                <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 text-secondary">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-primary font-bold text-lg mb-6">{service.price}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-primary" /> {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold rounded-lg">
                    Select Plan
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Metrics */}
        <div className="bg-primary rounded-3xl p-12 text-white mb-24 text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-[80px] opacity-20"></div>
           <div className="relative z-10">
             <h2 className="text-3xl font-bold mb-12">Average Client Results</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div>
                 <div className="text-5xl font-bold text-accent mb-2">300%</div>
                 <div className="text-white/80">ROI within 3 months</div>
               </div>
               <div>
                 <div className="text-5xl font-bold text-accent mb-2">50%</div>
                 <div className="text-white/80">Lower Cost Per Lead</div>
               </div>
               <div>
                 <div className="text-5xl font-bold text-accent mb-2">24/7</div>
                 <div className="text-white/80">Active Engagement</div>
               </div>
             </div>
           </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-900 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Not sure what you need?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Book a free strategy call with our experts. We'll analyze your current setup and recommend the best path forward.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-full">
              Book Consultation
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;