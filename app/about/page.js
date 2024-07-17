// pages/about.js
"use client"
// pages/about.js
import React from 'react';
import { motion } from 'framer-motion';


const containerVariants = {
  hidden: { opacity: 0, x: '-100vw' },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', stiffness: 50, delay: 0.3 }
  },
  exit: {
    x: '100vw',
    transition: { ease: 'easeInOut' }
  }
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { delay: 0.5, duration: 1 }
  }
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const AboutPage = () => {
  return (
    
    <motion.div
      className='about-container'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h1
        className='about-title'
        variants={itemVariants}
      >
        About Our Funding Platform
      </motion.h1>
      <motion.p
        className='about-description'
        variants={itemVariants}
      >
        Welcome to our funding platform. We are dedicated to providing the best financial solutions to startups and businesses. Our mission is to support innovation and entrepreneurship by offering flexible funding options.
      </motion.p>
      <motion.div
        className='about-details'
        variants={listVariants}
      >
        <motion.p
          className='about-details-item'
          variants={listItemVariants}
        >
          Our platform connects investors with startups, offering a seamless experience for both parties. We believe in the power of collaboration and strive to create opportunities for growth and success.
        </motion.p>
        <motion.p
          className='about-details'
          variants={listItemVariants}
        >
          Join us on this journey and take the next step towards achieving your business goals with our comprehensive funding solutions.
        </motion.p>
        
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;