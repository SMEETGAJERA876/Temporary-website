import React from 'react';
import { motion } from 'motion/react';
import { fadeInUp } from '../utils/motionVariants';

export default function AnimatedSection({ 
  children, 
  className = '', 
  variants = fadeInUp, 
  delay = 0,
  margin = '-60px' 
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: {
            ...variants.visible.transition,
            delay: delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
