import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Target,
  ShieldCheck,
  TrendingUp,
  Zap,
  BarChart,
  Smartphone,
  MessageSquare
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { containerVariants, itemVariants } from '../lib/animationPresets';

const HomePage = () => {
  const [count, setCount] = useState({ leads: 0, businesses: 0, growth: 0 });

  /* ===============================
     HERO SLIDES (Background Images)
  =============================== */
  const slides = [
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop'
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  /* ===============================
     COUNTER ANIMATION
  =============================== */
  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount({
          leads: Math.floor((10000 / steps) * currentStep),
          businesses: Math.floor((500 / steps) * currentStep),
          growth: Math.floor((150 / steps) * currentStep)
        });
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  /* ===============================
     AUTO SLIDE EFFECT
  =============================== */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const coreValues = [
    { icon: Users, title: "Real Connections", description: "Bridging the gap between businesses and verified leads." },
    { icon: Target, title: "Strategic Marketing", description: "Data-driven campaigns targeting your ideal audience." },
    { icon: ShieldCheck, title: "Transparency & Trust", description: "Ethical practices and honest reporting you can rely on." },
    { icon: TrendingUp, title: "Youth Empowerment", description: "Fueling innovation by investing in young digital talent." }
  ];

  const services = [
    { icon: MessageSquare, title: "WhatsApp Marketing", desc: "High open-rate bulk messaging." },
    { icon: Zap, title: "Email Automation", desc: "Nurture leads into loyal customers." },
    { icon: Smartphone, title: "Social Promotion", desc: "Amplify your brand voice globally." },
    { icon: BarChart, title: "Data Analytics", desc: "Actionable insights for growth." }
  ];

  return (
    <div className="pt-0">

      {/* ===============================
          HERO SECTION WITH SLIDER
      =============================== */}
      <div className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background Slides */}
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-20 pt-20 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.span
                variants={itemVariants}
                className="inline-block py-1 px-3 rounded-full bg-accent/30 text-white text-sm font-bold tracking-wide mb-6 border border-accent/50"
              >
                #1 B2B Growth Agency
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight"
              >
                Accelerate <span className="text-accent">Growth</span><br />
                With Real Leads.
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
              >
                We turn visibility into measurable sales through ethical marketing and strategic youth empowerment.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-7 text-lg font-bold shadow-xl hover:scale-105 transition-transform"
                  >
                    Start Growing
                  </Button>
                </Link>

                <Link to="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-7 text-lg font-bold"
                  >
                    Explore Services
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ===============================
          STATISTICS SECTION
      =============================== */}<br /> <br />
      <section className="py-16 bg-white relative -mt-20 z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">
                {count.businesses}+
              </div>
              <div className="text-gray-500 font-medium">
                Businesses Served
              </div>
            </div>

            <div className="text-center md:border-l border-gray-200">
              <div className="text-5xl font-bold text-secondary mb-2">
                {count.leads.toLocaleString()}+
              </div>
              <div className="text-gray-500 font-medium">
                Leads Generated
              </div>
            </div>

            <div className="text-center md:border-l border-gray-200">
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {count.growth}%
              </div>
              <div className="text-gray-500 font-medium">
                Avg. ROI Increase
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================
          CORE VALUES
      =============================== */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our foundation is built on integrity, innovation, and impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 text-white">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;