import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { containerVariants, itemVariants } from '../lib/animationPresets';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';

const Events = () => {
  const { toast } = useToast();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Upcoming', 'Weekly', 'Monthly'];

  const events = [
    {
      title: 'Sunday Worship Service',
      date: '2026-02-02',
      time: '10:00 AM - 12:00 PM',
      location: 'Main Sanctuary',
      description: 'Join us for inspirational worship, powerful preaching, and fellowship with believers. All are welcome!',
      category: 'Weekly',
      attendees: '200+'
    },
    {
      title: 'Wednesday Bible Study',
      date: '2026-01-29',
      time: '7:00 PM - 8:30 PM',
      location: 'Fellowship Hall',
      description: 'Dive deep into God\'s Word with interactive Bible study, discussion, and prayer. Growing in faith together.',
      category: 'Weekly',
      attendees: '80+'
    },
    {
      title: 'Friday Prayer Meeting',
      date: '2026-01-31',
      time: '6:00 PM - 7:30 PM',
      location: 'Prayer Room',
      description: 'Come together in powerful intercessory prayer for our church, community, and world. Experience God\'s presence.',
      category: 'Weekly',
      attendees: '50+'
    },
    {
      title: 'Community Outreach Day',
      date: '2026-02-15',
      time: '9:00 AM - 3:00 PM',
      location: 'Local Community',
      description: 'Serve our community with practical help, food distribution, and sharing God\'s love through action.',
      category: 'Monthly',
      attendees: '100+'
    },
    {
      title: 'Youth Conference 2026',
      date: '2026-03-07',
      time: '6:00 PM - 9:00 PM',
      location: 'Youth Center',
      description: 'An inspiring evening for young people with worship, testimonies, and empowering messages about faith and purpose.',
      category: 'Upcoming',
      attendees: '150+'
    },
    {
      title: 'Family Fun Day',
      date: '2026-03-22',
      time: '12:00 PM - 5:00 PM',
      location: 'Church Grounds',
      description: 'A day of family-friendly activities, games, food, and fellowship. Bring the whole family for fun and connection!',
      category: 'Upcoming',
      attendees: '300+'
    }
  ];

  const filteredEvents = events.filter(event => {
    if (activeFilter === 'All') return true;
    return event.category === activeFilter;
  });

  const handleRegister = (eventTitle) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: `Registration for "${eventTitle}" will be available soon.`
    });
  };

  return (
    <>
      <Helmet>
        <title>Events - Love of Christ Christian Fellowship Church</title>
        <meta name="description" content="Join us for upcoming events at Love of Christ Christian Fellowship Church. Sunday services, Bible studies, prayer meetings, and community outreach." />
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
              Church Events
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="font-lato text-xl text-white/90 max-w-2xl mx-auto"
            >
              Stay connected and engaged with our community through worship services, Bible studies, and special events
            </motion.p>
          </div>
        </motion.section>

        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-12"
          >
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-lato font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-white text-dark-text/70 hover:bg-cream hover:text-primary shadow-card'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </motion.div>
          </motion.section>

          {/* Events Grid */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
                >
                  {/* Event Header */}
                  <div className="bg-gradient-to-br from-primary to-primary/80 p-6 text-white">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-playfair text-2xl font-bold flex-1">
                        {event.title}
                      </h3>
                      <span className="px-3 py-1 bg-accent text-dark-text text-xs font-lato font-semibold rounded-full">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-6">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3 text-dark-text/70 font-lato">
                        <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>
                          {new Date(event.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-dark-text/70 font-lato">
                        <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-dark-text/70 font-lato">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-dark-text/70 font-lato">
                        <Users className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{event.attendees} Expected</span>
                      </div>
                    </div>

                    <p className="font-lato text-dark-text/70 leading-relaxed mb-6">
                      {event.description}
                    </p>

                    <Button
                      onClick={() => handleRegister(event.title)}
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                    >
                      Register Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default Events;