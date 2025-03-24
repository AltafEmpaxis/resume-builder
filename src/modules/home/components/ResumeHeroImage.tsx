import React from 'react';
import { motion } from 'framer-motion';

interface ResumeHeroImageProps {
  className?: string;
}

const ResumeHeroImage: React.FC<ResumeHeroImageProps> = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Main Resume Paper */}
        <motion.rect
          x="100"
          y="50"
          width="400"
          height="500"
          rx="8"
          fill="white"
          stroke="#e5e7eb"
          strokeWidth="1"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="shadow-lg"
        />

        {/* Header Section */}
        <motion.rect
          x="130"
          y="90"
          width="340"
          height="80"
          rx="4"
          fill="#f0f9ff"
          initial={{ width: 0 }}
          animate={{ width: 340 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />
        
        {/* Name */}
        <motion.rect
          x="150"
          y="110"
          width="180"
          height="15"
          rx="2"
          fill="#3b82f6"
          initial={{ width: 0 }}
          animate={{ width: 180 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        
        {/* Title */}
        <motion.rect
          x="150"
          y="135"
          width="140"
          height="10"
          rx="2"
          fill="#93c5fd"
          initial={{ width: 0 }}
          animate={{ width: 140 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        
        {/* Contact Info */}
        <motion.rect
          x="150"
          y="155"
          width="100"
          height="8"
          rx="2"
          fill="#dbeafe"
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        />

        {/* Experience Section Title */}
        <motion.rect
          x="130"
          y="190"
          width="120"
          height="12"
          rx="2"
          fill="#1e40af"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 130, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />
        
        {/* Experience Items */}
        <motion.rect
          x="130"
          y="215"
          width="340"
          height="1"
          fill="#e5e7eb"
          initial={{ width: 0 }}
          animate={{ width: 340 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
        
        <motion.rect
          x="130"
          y="230"
          width="160"
          height="12"
          rx="2"
          fill="#64748b"
          initial={{ width: 0 }}
          animate={{ width: 160 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        />
        
        <motion.rect
          x="130"
          y="250"
          width="120"
          height="8"
          rx="2"
          fill="#94a3b8"
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 0.5, delay: 1 }}
        />
        
        <motion.rect
          x="130"
          y="270"
          width="320"
          height="30"
          rx="2"
          fill="#f8fafc"
          initial={{ width: 0 }}
          animate={{ width: 320 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        />
        
        <motion.rect
          x="130"
          y="315"
          width="340"
          height="1"
          fill="#e5e7eb"
          initial={{ width: 0 }}
          animate={{ width: 340 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />
        
        <motion.rect
          x="130"
          y="330"
          width="150"
          height="12"
          rx="2"
          fill="#64748b"
          initial={{ width: 0 }}
          animate={{ width: 150 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        />
        
        <motion.rect
          x="130"
          y="350"
          width="110"
          height="8"
          rx="2"
          fill="#94a3b8"
          initial={{ width: 0 }}
          animate={{ width: 110 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        />
        
        <motion.rect
          x="130"
          y="370"
          width="310"
          height="30"
          rx="2"
          fill="#f8fafc"
          initial={{ width: 0 }}
          animate={{ width: 310 }}
          transition={{ duration: 0.7, delay: 1.5 }}
        />
        
        {/* Skills Section */}
        <motion.rect
          x="130"
          y="420"
          width="80"
          height="12"
          rx="2"
          fill="#1e40af"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 130, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        />
        
        <motion.rect
          x="130"
          y="445"
          width="340"
          height="1"
          fill="#e5e7eb"
          initial={{ width: 0 }}
          animate={{ width: 340 }}
          transition={{ duration: 0.8, delay: 1.7 }}
        />
        
        {/* Skill Bars */}
        <g>
          <motion.rect
            x="130"
            y="460"
            width="60"
            height="10"
            rx="2"
            fill="#94a3b8"
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.4, delay: 1.8 }}
          />
          <motion.rect
            x="200"
            y="460"
            width="220"
            height="10"
            rx="5"
            fill="#f1f5f9"
            initial={{ width: 0 }}
            animate={{ width: 220 }}
            transition={{ duration: 0.6, delay: 1.9 }}
          />
          <motion.rect
            x="200"
            y="460"
            width="180"
            height="10"
            rx="5"
            fill="#3b82f6"
            initial={{ width: 0 }}
            animate={{ width: 180 }}
            transition={{ duration: 0.5, delay: 2 }}
          />
        </g>
        
        <g>
          <motion.rect
            x="130"
            y="480"
            width="60"
            height="10"
            rx="2"
            fill="#94a3b8"
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.4, delay: 2.1 }}
          />
          <motion.rect
            x="200"
            y="480"
            width="220"
            height="10"
            rx="5"
            fill="#f1f5f9"
            initial={{ width: 0 }}
            animate={{ width: 220 }}
            transition={{ duration: 0.6, delay: 2.2 }}
          />
          <motion.rect
            x="200"
            y="480"
            width="150"
            height="10"
            rx="5"
            fill="#3b82f6"
            initial={{ width: 0 }}
            animate={{ width: 150 }}
            transition={{ duration: 0.5, delay: 2.3 }}
          />
        </g>
        
        <g>
          <motion.rect
            x="130"
            y="500"
            width="60"
            height="10"
            rx="2"
            fill="#94a3b8"
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.4, delay: 2.4 }}
          />
          <motion.rect
            x="200"
            y="500"
            width="220"
            height="10"
            rx="5"
            fill="#f1f5f9"
            initial={{ width: 0 }}
            animate={{ width: 220 }}
            transition={{ duration: 0.6, delay: 2.5 }}
          />
          <motion.rect
            x="200"
            y="500"
            width="200"
            height="10"
            rx="5"
            fill="#3b82f6"
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ duration: 0.5, delay: 2.6 }}
          />
        </g>
        
        {/* Second Page (Back) */}
        <motion.rect
          x="90"
          y="60"
          width="400"
          height="500"
          rx="8"
          fill="#f8fafc"
          stroke="#e5e7eb"
          strokeWidth="1"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 0.6 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ zIndex: -1 }}
        />
        
        {/* Third Page (Back) */}
        <motion.rect
          x="80"
          y="70"
          width="400"
          height="500"
          rx="8"
          fill="#f8fafc"
          stroke="#e5e7eb"
          strokeWidth="1"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          style={{ zIndex: -2 }}
        />
      </motion.svg>
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 blur-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      />
      
      <motion.div 
        className="absolute -bottom-5 left-10 w-32 h-32 bg-indigo-400 rounded-full opacity-20 blur-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      />
      
      <motion.div 
        className="absolute top-20 -left-10 w-16 h-16 bg-blue-300 rounded-full opacity-20 blur-xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      />
    </div>
  );
};

export default ResumeHeroImage; 