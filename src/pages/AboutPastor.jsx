import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Users, Award } from 'lucide-react';
import { containerVariants, itemVariants } from '../lib/animationPresets';

const AboutPastor = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: 'Biblical Teacher',
      description: 'Passionate about teaching God\'s Word with clarity and relevance'
    },
    {
      icon: Heart,
      title: 'Compassionate Leader',
      description: 'Dedicated to caring for the spiritual needs of the congregation'
    },
    {
      icon: Users,
      title: 'Community Builder',
      description: 'Fostering unity and fellowship among believers'
    },
    {
      icon: Award,
      title: 'Servant Leader',
      description: 'Leading by example through humble service and dedication'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Pastor - Love of Christ Christian Fellowship Church</title>
        <meta name="description" content="Meet Pastor Pr Godfrey Mponye, the spiritual leader of Love of Christ Christian Fellowship Church. Learn about his vision, ministry, and calling." />
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
            <motion.h1
              variants={itemVariants}
              className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4"
            >
              Pastor Pr Godfrey Mponye
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="font-lato text-xl text-accent"
            >
              Senior Pastor & Spiritual Leader
            </motion.p>
          </div>
        </motion.section>

        <div className="container mx-auto px-4">
          {/* Pastor Profile */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <div className="bg-gradient-to-br from-primary to-primary/70 aspect-[3/4] rounded-2xl shadow-card flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-6xl font-playfair font-bold">PM</span>
                    </div>
                    <p className="font-lato text-lg opacity-90">Photo placeholder</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="lg:col-span-3">
                <h2 className="font-playfair text-3xl font-bold text-primary mb-6">Biography</h2>
                <div className="font-lato text-lg text-dark-text/80 leading-relaxed space-y-4">
                  <p>
                    Pastor Pr Godfrey Mponye is a devoted servant of God who has dedicated his life to ministry and the 
                    spiritual growth of his congregation. With a deep love for Scripture and a heart for people, he has 
                    been faithfully serving as the Senior Pastor of Love of Christ Christian Fellowship Church.
                  </p>
                  <p>
                    His journey into ministry began with a profound calling to share God's love and truth. Through years 
                    of theological study, pastoral experience, and unwavering faith, Pastor Godfrey has developed a ministry 
                    characterized by biblical teaching, compassionate care, and servant leadership.
                  </p>
                  <p>
                    Pastor Godfrey is known for his engaging preaching style, which combines solid biblical exposition with 
                    practical application for everyday life. His sermons inspire believers to deepen their relationship with 
                    Christ and live out their faith authentically in the world.
                  </p>
                  <p>
                    Beyond the pulpit, Pastor Godfrey is deeply involved in pastoral care, community outreach, and 
                    discipleship. He believes in the importance of personal relationships and takes time to mentor and 
                    encourage individuals in their spiritual journeys.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Pastoral Vision */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-16 max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="bg-cream p-8 md:p-12 rounded-2xl shadow-card">
              <h2 className="font-playfair text-3xl font-bold text-primary mb-6 text-center">Pastoral Vision</h2>
              <div className="font-lato text-lg text-dark-text/80 leading-relaxed space-y-4">
                <p>
                  "My vision for Love of Christ Christian Fellowship Church is to see a community of believers who are 
                  not only growing in their knowledge of God but are also actively living out their faith in transformative 
                  ways. I envision a church where every person feels welcomed, valued, and equipped to fulfill their God-given 
                  purpose."
                </p>
                <p>
                  "We are called to be the hands and feet of Jesus in our community, demonstrating His love through acts 
                  of service, compassion, and justice. My prayer is that our church would be a place of healing, hope, and 
                  spiritual renewal for all who enter our doors."
                </p>
                <p>
                  "Together, let us pursue excellence in worship, depth in discipleship, and boldness in evangelism as we 
                  fulfill the Great Commission and advance God's kingdom here on earth."
                </p>
                <p className="text-right font-semibold text-primary mt-6">
                  - Pastor Pr Godfrey Mponye
                </p>
              </div>
            </motion.div>
          </motion.section>

          {/* Ministry Highlights */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="font-playfair text-4xl font-bold text-primary mb-4">Ministry Highlights</h2>
              <div className="w-24 h-1 bg-accent mx-auto" />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <highlight.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-primary mb-3 text-center">
                    {highlight.title}
                  </h3>
                  <p className="font-lato text-dark-text/70 text-center">
                    {highlight.description}
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

export default AboutPastor;