import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Users2, Rocket, Heart, BookOpen } from 'lucide-react';
import { containerVariants, itemVariants } from '../lib/animationPresets';
import { Button } from '../components/ui/button';

const YouthEmpowerment = () => {
  const modules = [
    { title: "Express Taxi Transport", desc: "We use taxis traveling to your area to deliver goods from Kampala quickly." },
    { title: "Trusted Drivers", desc: "We work with qualified and registered drivers." },
    { title: "Online Receipts", desc: "Digital receipts confirm every transaction." },  
    { title: "Register With Us", desc: "Customers register with us for secure and reliable service."},
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.h1 variants={itemVariants} className="text-5xl font-bold text-gray-900 mb-6">
              Make People from Far Buy Goods in  <span className="text-primary">Kampala (MPFK)</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-8 leading-relaxed">
              Helps people from different parts of Uganda easily buy goods from Kampala, the country’s main business center. We assist with purchasing, packaging, and loading the goods onto taxis or transport heading to the buyer’s destination, where the owner can conveniently pick them up.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold rounded-full px-8">Join Program</Button>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="relative">
             <div className="absolute -inset-4 bg-accent/30 rounded-full blur-3xl"></div>
             <img src="https://images.unsplash.com/photo-1517486638152-b7660c99e85c?auto=format&fit=crop&q=80" alt="Youth Training" className="relative rounded-3xl shadow-2xl z-10" />
          </motion.div>
        </div>

        {/* Stats   Success Stories*/}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { label: "Trust Us", val: "500+" },
            { label: "Come In", val: "85%" },
            { label: "Ask", val: "50+" },
            { label: "Still", val: "25+" }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-bold text-primary mb-1">{stat.val}</div>
              <div className="text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Digital Fundamentals */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Why You Can Trust Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((mod, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 text-secondary">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold mb-2">{mod.title}</h3>
                <p className="text-gray-600 text-sm">{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stories  Trust Us */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Terms and Conditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-card border border-gray-100 flex gap-6">
               <img src="https://images.unsplash.com/photo-1666085420650-c535449a2a8b?auto=format&fit=crop&q=80" alt="Student" className="w-24 h-24 rounded-full object-cover" />
               <div>
       <p className="italic text-gray-600 mb-4">
  "We compensate customers if goods are lost during delivery under our responsibility."
</p>

<p className="font-bold text-sm text-primary">
  We are not responsible for losses caused by road accidents during transportation.
</p>
               </div>
            </div>
             <div className="bg-white p-8 rounded-3xl shadow-card border border-gray-100 flex gap-6">
               <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-400">SJ</div>
               <div>
                 <p className="italic text-gray-600 mb-4">"If you cannot come to Kampala, we can purchase quality goods on your behalf and send them to you."</p>
                 <h4 className="font-bold text-gray-900">Please click Accept to agree to these terms and trust our service.</h4>
                 
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouthEmpowerment;