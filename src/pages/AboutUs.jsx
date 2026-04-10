import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Globe, Heart, Clock, Award, Users } from 'lucide-react';
import { containerVariants, itemVariants } from '../lib/animationPresets';

const AboutUs = () => {
  const team = [
    { name: "", role: "Marketing is shifting beyond traditional street selling.", image: "https://svxrsjrkghluzxwtmjvt.supabase.co/storage/v1/object/public/HamImages/whatsstockimages/WhatsApp%20Image%202026-03-04%20at%201.27.58%20PM.jpeg", bio: "" },
    { name: "", role: "Businesses focus on visibility instead of connecting with real buyers.", image: "https://svxrsjrkghluzxwtmjvt.supabase.co/storage/v1/object/public/HamImages/whatsstockimages/WhatsApp%20Image%202026-03-04%20at%203.08.30%20PM.jpeg", bio: "" },
    { name: "", role: "Many Ugandan retailer struggle to source and transport goods efficiently from Kampala", image: "https://svxrsjrkghluzxwtmjvt.supabase.co/storage/v1/object/public/HamImages/whatsstockimages/WhatsApp%20Image%202026-03-04%20at%203.06.03%20PM.jpeg", bio: "" }
  ];

  const timeline = [
    { year: "2022", title: "Foundation", desc: "Started with a vision to revolutionize B2B marketing." },
    { year: "2023", title: "Expansion", desc: "Opened regional offices and launched youth program." },
    { year: "2024", title: "Innovation", desc: "Integrated AI-driven analytics into all services." },
    { year: "2025", title: "Global Reach", desc: "Serving clients in over 15 Districts." }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-24"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            We Are <span className="text-primary">Mogg Gadgets Uganda</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We connect businesses across the full supply chain  from wholesalers to retailers to end consumers building trusted partnerships that drive sustainable growth and long-term success.
          </motion.p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-white to-green-50 p-10 rounded-3xl shadow-card border border-primary/10"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To empower businesses with cutting-edge digital tools while creating sustainable career pathways for youth, fostering a cycle of economic growth and innovation.
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-white to-cyan-50 p-10 rounded-3xl shadow-card border border-secondary/10"
          >
            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To be the global standard for ethical B2B marketing, where business success and social responsibility go hand in hand.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-5/12"></div>
                  <div className="z-10 bg-white border-4 border-primary rounded-full w-12 h-12 flex items-center justify-center shadow-lg my-4 md:my-0">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center md:text-left"
                  >
                    <span className="text-secondary font-bold text-xl block mb-2">{item.year}</span>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Why We Established Mogg Gadgets Uganda</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-card group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white text-sm">{member.bio}</p>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;