"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
  'https://plus.unsplash.com/premium_photo-1681843661864-3f46bfb1a4fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWR1Y2F0aW9uJTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVkdWNhdGlvbiUyMGJhY2tncm91bmR8ZW58MHwwfDB8fHww',
  'https://plus.unsplash.com/premium_photo-1663126288619-f8ef33cd006b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVkdWNhdGlvbnxlbnwwfDB8MHx8fDA%3D',
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] flex justify-center items-center ">
      
      <motion.img
        key={currentImage}
        src={images[currentImage]}
        alt="Carousel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-full object-cover "
      />
    </div>
  );
};

export default Carousel;
