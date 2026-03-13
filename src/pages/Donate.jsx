import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, DollarSign } from 'lucide-react';
import { containerVariants, itemVariants } from '../lib/animationPresets';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';

const Donate = () => {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPurpose, setSelectedPurpose] = useState('General Fund');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const presetAmounts = [10, 25, 50, 100];
  const purposes = ['General Fund', 'Building Fund', 'Missions', 'Benevolence'];

  const handleDonate = (e) => {
    e.preventDefault();

    const amount = selectedAmount || customAmount;

    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "❌ Invalid Amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive"
      });
      return;
    }

    if (!donorInfo.name || !donorInfo.email) {
      toast({
        title: "❌ Missing Information",
        description: "Please fill in your name and email address.",
        variant: "destructive"
      });
      return;
    }

    // Stripe integration placeholder
    toast({
      title: "🚧 Payment Processing Coming Soon!",
      description: "Stripe integration will be implemented for secure donations. Thank you for your generosity!"
    });
  };

  return (
    <>
      <Helmet>
        <title>Give - Love of Christ Christian Fellowship Church</title>
        <meta name="description" content="Support the ministry of Love of Christ Christian Fellowship Church through your generous giving. Your donations help us serve our community and spread God's love." />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-gradient-to-br from-primary to-primary/80 py-20 mb-16"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.div variants={itemVariants} className="mb-6">
              <Heart className="w-16 h-16 text-accent mx-auto" />
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4"
            >
              Give Generously
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="font-lato text-xl text-white/90 max-w-2xl mx-auto"
            >
              Your generosity helps us spread God's love and serve our community
            </motion.p>
          </div>
        </motion.section>

        <div className="container mx-auto px-4 max-w-4xl">
          {/* Inspirational Message */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-12"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-accent/20 to-accent/10 p-8 rounded-2xl text-center"
            >
              <p className="font-playfair text-2xl text-primary italic mb-4">
                "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, 
                for God loves a cheerful giver."
              </p>
              <p className="font-lato text-dark-text/70">
                2 Corinthians 9:7
              </p>
            </motion.div>
          </motion.section>

          {/* Donation Form */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-card"
            >
              <form onSubmit={handleDonate} className="space-y-8">
                {/* Amount Selection */}
                <div>
                  <label className="block font-playfair text-2xl font-semibold text-primary mb-4">
                    Select Donation Amount
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    {presetAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`p-4 rounded-lg font-lato font-semibold text-lg transition-all ${
                          selectedAmount === amount
                            ? 'bg-primary text-white shadow-lg scale-105'
                            : 'bg-cream text-dark-text hover:bg-accent/20'
                        }`}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-text/40" />
                    <input
                      type="number"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      className="w-full pl-12 pr-4 py-4 bg-cream rounded-lg font-lato text-dark-text text-lg border-2 border-transparent focus:border-accent focus:outline-none transition-colors"
                      min="1"
                      step="0.01"
                    />
                  </div>
                </div>

                {/* Purpose Selection */}
                <div>
                  <label className="block font-playfair text-2xl font-semibold text-primary mb-4">
                    Donation Purpose
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {purposes.map((purpose) => (
                      <button
                        key={purpose}
                        type="button"
                        onClick={() => setSelectedPurpose(purpose)}
                        className={`p-4 rounded-lg font-lato font-medium transition-all ${
                          selectedPurpose === purpose
                            ? 'bg-primary text-white shadow-lg'
                            : 'bg-cream text-dark-text hover:bg-accent/20'
                        }`}
                      >
                        {purpose}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Donor Information */}
                <div>
                  <label className="block font-playfair text-2xl font-semibold text-primary mb-4">
                    Your Information
                  </label>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name *"
                      value={donorInfo.name}
                      onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                      className="w-full px-4 py-3 bg-cream rounded-lg font-lato text-dark-text border-2 border-transparent focus:border-accent focus:outline-none transition-colors"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address *"
                      value={donorInfo.email}
                      onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                      className="w-full px-4 py-3 bg-cream rounded-lg font-lato text-dark-text border-2 border-transparent focus:border-accent focus:outline-none transition-colors"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number (Optional)"
                      value={donorInfo.phone}
                      onChange={(e) => setDonorInfo({ ...donorInfo, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-cream rounded-lg font-lato text-dark-text border-2 border-transparent focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold"
                >
                  Donate Now
                </Button>

                {/* Tax Deductible Notice */}
                <p className="text-center font-lato text-sm text-dark-text/60">
                  Love of Christ Christian Fellowship Church is a 501(c)(3) tax-exempt organization. 
                  Your donation is tax-deductible to the extent allowed by law.
                </p>
              </form>
            </motion.div>
          </motion.section>

          {/* Additional Information */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mt-12"
          >
            <motion.div
              variants={itemVariants}
              className="bg-cream p-8 rounded-2xl"
            >
              <h2 className="font-playfair text-2xl font-bold text-primary mb-4 text-center">
                Why Give?
              </h2>
              <div className="font-lato text-dark-text/80 leading-relaxed space-y-3">
                <p>
                  Your generous contributions enable us to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Support our worship services and ministries</li>
                  <li>Maintain and improve our church facilities</li>
                  <li>Fund local and international mission work</li>
                  <li>Provide assistance to those in need through benevolence programs</li>
                  <li>Invest in youth and children's programs</li>
                  <li>Expand our outreach to the community</li>
                </ul>
                <p className="mt-4">
                  Every gift, regardless of size, makes a significant impact in advancing God's kingdom and 
                  transforming lives through the ministry of Love of Christ Christian Fellowship Church.
                </p>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default Donate;