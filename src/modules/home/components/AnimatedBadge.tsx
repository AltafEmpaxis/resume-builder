import React from 'react';
import { motion } from 'framer-motion';
import { BsCheckCircleFill } from 'react-icons/bs';

interface AnimatedBadgeProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedBadge: React.FC<AnimatedBadgeProps> = ({ 
  text, 
  className = '',
  delay = 0
}) => {
  return (
    <motion.div
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${className}`}
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
        delay: delay
      }}
    >
      <BsCheckCircleFill className="mr-1.5 h-3.5 w-3.5 flex-shrink-0" />
      {text}
    </motion.div>
  );
};

export default AnimatedBadge; 