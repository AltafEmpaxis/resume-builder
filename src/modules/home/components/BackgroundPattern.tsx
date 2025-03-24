import React from 'react';
import { motion } from 'framer-motion';

interface BackgroundPatternProps {
  className?: string;
}

const BackgroundPattern: React.FC<BackgroundPatternProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Grid Pattern */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-0 opacity-[0.03] text-gray-900"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
      </svg>

      {/* Circles */}
      <motion.div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-500 opacity-[0.07] blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      
      <motion.div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-indigo-500 opacity-[0.07] blur-3xl"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Dots Pattern */}
      <svg
        className="absolute top-0 right-0 w-full h-full z-0 opacity-[0.07] text-gray-900"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dots-pattern"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots-pattern)" />
      </svg>
    </div>
  );
};

export default BackgroundPattern; 