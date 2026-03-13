import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { Button } from '../components/ui/button';

const Contact = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Let's Talk</h1>
            <p className="text-xl text-gray-600 mb-12">Whether you have a question about features, pricing, or just want to see a demo, our team is ready to answer all your questions.</p>
            
            <div className="space-y-8">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                   <MapPin className="w-6 h-6" />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg">Visit Us</h3>
                   <p className="text-gray-600">123 Innovation Drive, Suite 400<br/>Tech City, TC 90210</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary flex-shrink-0">
                   <Mail className="w-6 h-6" />
                 </div>
                 <div>
                   <h3 className="font-bold text-lg">Email Us</h3>
                   <p className="text-gray-600">hello@Whatstock Business.com<br/>support@Whatstock Business.com</p>
                 </div>
               </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary outline-none"></textarea>
              </div>
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;