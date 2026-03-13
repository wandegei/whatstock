import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Globe } from 'lucide-react';
import { containerVariants, itemVariants } from '../lib/animationPresets';

const AboutChurch = () => {
  const values = [
    {
      icon: Heart,
      title: 'Love & Compassion',
      description: 'We are driven by God\'s love to serve and care for all people with genuine compassion.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a strong, supportive community where everyone belongs and grows together in faith.'
    },
    {
      icon: BookOpen,
      title: 'Biblical Truth',
      description: 'Grounded in Scripture, we teach and live by God\'s Word as our foundation for life and faith.'
    },
    {
      icon: Globe,
      title: 'Outreach & Mission',
      description: 'Committed to spreading the Gospel and making a positive impact in our community and beyond.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Church - Love of Christ Christian Fellowship Church</title>
        <meta name="description" content="Learn about Love of Christ Christian Fellowship Church, our mission, history, and core values. Discover how we serve God and our community." />
      </Helmet>

      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative h-96 mb-16"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1603820112305-479d8d4a7ed9"
              alt="Love of Christ Christian Fellowship Church"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
          </div>
          <div className="relative h-full flex items-center justify-center px-4">
            <motion.h1
              variants={itemVariants}
              className="font-playfair text-5xl md:text-6xl font-bold text-white text-center"
            >
              About Our Church
            </motion.h1>
          </div>
        </motion.section>

        <div className="container mx-auto px-4">
          {/* Mission Statement */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16 max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="font-playfair text-4xl font-bold text-primary mb-4">Our Mission</h2>
              <div className="w-24 h-1 bg-accent mx-auto" />
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="font-lato text-xl text-dark-text/80 leading-relaxed text-center"
            >
              At Love of Christ Christian Fellowship Church, our mission is to glorify God by making disciples of Jesus Christ, 
              fostering a loving community, and serving our neighbors with compassion. We are committed to spreading the Gospel, 
              nurturing spiritual growth, and demonstrating Christ's love through our words and actions.
            </motion.p>
          </motion.section>

          {/* History Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16 max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <h2 className="font-playfair text-4xl font-bold text-primary mb-4">Our History</h2>
              <div className="w-24 h-1 bg-accent mx-auto" />
            </motion.div>
            <motion.div variants={itemVariants} className="font-lato text-lg text-dark-text/80 leading-relaxed space-y-4">
              <p>
                Love of Christ Christian Fellowship Church was founded with a vision to create a spiritual home where people 
                from all walks of life could experience God's transforming love. Under the faithful leadership of Pastor 
                Pr Godfrey Mponye, our church has grown into a vibrant community of believers dedicated to worship, discipleship, 
                and service.
              </p>
              <p>
                Through the years, we have remained committed to our core values while adapting to meet the changing needs of 
                our community. Our church has become a beacon of hope, offering spiritual guidance, practical support, and a 
                welcoming environment for all who seek to know Christ.
              </p>
              <p>
                Today, we continue to build on this foundation, reaching out to our community with the message of God's love 
                and grace, while nurturing the spiritual growth of each member of our church family.
              </p>
            </motion.div>
          </motion.section>

          {/* Core Values */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="font-playfair text-4xl font-bold text-primary mb-4">Our Core Values</h2>
              <div className="w-24 h-1 bg-accent mx-auto" />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-primary mb-3 text-center">
                    {value.title}
                  </h3>
                  <p className="font-lato text-dark-text/70 text-center leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default AboutChurch;