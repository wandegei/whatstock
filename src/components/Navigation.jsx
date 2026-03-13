import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BarChart2 } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/how-we-work', label: 'How We Work' },
    { path: '/partnerships', label: 'Partnerships' },
    { path: '/mpftk-empowerment', label: 'MPFTK' },
    { path: '/success-stories', label: 'Stories' },
    { path: '/media', label: 'Media' },
    { path: '/contact', label: 'Contact' },
    { path: '/faq', label: 'FAQ' }
  ];  
  // dddddd rrrrr

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Brand   
B2B Solutions*/}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-2 rounded-xl group-hover:bg-primary/90 transition-colors shadow-glow">
                <img
                  src="https://svxrsjrkghluzxwtmjvt.supabase.co/storage/v1/object/public/HamImages/whatsstockimages/WhatsApp%20Image%202026-03-04%20at%2012.12.46%20PM.jpeg"
                  alt="Whatstock Business Logo"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-gray-900 leading-tight">
                  Whatstock Business
                </span>
                <span className="text-[10px] text-secondary font-bold tracking-wider uppercase">
                  B2B Support
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group overflow-hidden ${
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-white-600 hover:text-primary'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold shadow-lg hover:shadow-glow transition-all rounded-full px-6">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg hover:bg-gray-100 text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[70px] left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl z-40 border-t border-gray-100 xl:hidden overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-2 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 mt-2">
                <Link to="/contact" className="w-full block">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-xl py-3">
                    Get Started Now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;