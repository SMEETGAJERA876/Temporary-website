import React from 'react';
import { motion } from 'motion/react';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'text'
  accent = 'blue', // 'blue' | 'bright' | 'electric' | 'sky'
  icon = true,
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const accentClasses = {
    blue: 'hover:bg-brand-electric hover:border-brand-electric text-white bg-brand-blue border-brand-blue shadow-lg shadow-brand-blue/20',
    bright: 'hover:bg-brand-blue hover:border-brand-blue text-white bg-brand-bright border-brand-bright',
    electric: 'hover:bg-brand-blue hover:border-brand-blue text-white bg-brand-electric border-brand-electric',
    sky: 'hover:bg-brand-blue hover:border-brand-blue text-brand-navy bg-brand-sky border-brand-sky',
  };

  const baseStyles = 'inline-flex items-center justify-center font-sans font-semibold tracking-tight transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue';
  
  let variantStyles = '';
  
  if (variant === 'primary') {
    variantStyles = `border ${accentClasses[accent] || accentClasses.blue} px-8 py-3.5 text-sm md:text-base`;
  } else if (variant === 'secondary') {
    variantStyles = `bg-transparent border border-brand-navy text-brand-navy px-8 py-3.5 text-sm md:text-base hover:bg-brand-navy hover:text-white`;
  } else if (variant === 'text') {
    variantStyles = `bg-transparent text-brand-navy py-2 px-0 text-sm md:text-base border-b-2 border-transparent hover:border-brand-navy rounded-none`;
  }

  const arrowVariants = {
    initial: { x: 0 },
    hover: { x: 5 }
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
      whileHover="hover"
      initial="initial"
      {...props}
    >
      <span className="flex items-center gap-2">
        {children}
        {icon && (
          <motion.span
            variants={arrowVariants}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="inline-block text-lg"
          >
            →
          </motion.span>
        )}
      </span>
    </motion.button>
  );
}
