import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Briefcase, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { containerVariants, itemVariants } from '../lib/animationPresets';

const Partnerships = () => {
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
            Partner With <span className="lime-highlight">Impact</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our network of elite service providers and grow your business alongside us.
          </motion.p>
        </motion.div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { icon: Users, title: "Shared Leads", desc: "Access our pool of pre-qualified leads." },
            { icon: Award, title: "Co-Branding", desc: "Leverage our reputation to build trust." },
            { icon: Briefcase, title: "Resource Hub", desc: "Get exclusive access to our marketing tools." }
          ].map((item, index) => (
            <motion.div key={index} whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Tiers */}
        <div className="bg-gray-900 rounded-3xl p-12 text-white mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-secondary">Affiliate</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-accent" /> Referral Commission</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-accent" /> Marketing Assets</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-accent" /> Monthly Newsletter</li>
              </ul>
              <Button className="w-full bg-transparent border border-white hover:bg-white hover:text-gray-900">Apply Now</Button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-accent relative">
              <div className="absolute top-0 right-0 bg-accent text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
              <h3 className="text-2xl font-bold mb-4 text-accent">Strategic Partner</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-accent" /> Revenue Share</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-accent" /> Dedicated Account Manager</li>
                <li className="flex items-center gap-2"><Check className="w-5 h-5 text-accent" /> Joint Webinars</li>
              </ul>
              <Button className="w-full bg-accent text-gray-900 hover:bg-white font-bold">Apply Now</Button>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
           <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl group">
             <img src="https://images.unsplash.com/photo-1566304660263-c15041ac11c0?auto=format&fit=crop&q=80" alt="Partner Event" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
               <div className="text-white">
                 <h3 className="text-2xl font-bold mb-2">TechCorp Alliance</h3>
                 <p>"Partnering with Whatstock Business doubled our service inquiries in 6 months."</p>
               </div>
             </div>
           </div>
           <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl group">
             <img src="https://images.unsplash.com/photo-1686771416282-3888ddaf249b?auto=format&fit=crop&q=80" alt="Partner Success" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
               <div className="text-white">
                 <h3 className="text-2xl font-bold mb-2">Global Reach Initiative</h3>
                 <p>"We expanded into 3 new markets thanks to their network."</p>
               </div>
             </div>
           </div>
        </div>

        <div className="text-center">
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-6 text-lg rounded-full">
              Become a Partner
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Partnerships;