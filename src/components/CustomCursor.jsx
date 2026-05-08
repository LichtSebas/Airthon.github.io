import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  
  // High-performance springs for smooth movement
  const cursorX = useSpring(0, { damping: 25, stiffness: 200 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 200 });

  useEffect(() => {
    const moveCursor = (e) => {
      // Set the spring values to the current mouse position
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      const target = e.target;
      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button');
        
      setIsPointer(!!isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Central Dot - Perfectly aligned */}
      <motion.div 
        className="cursor-dot" 
        style={{ 
          left: cursorX, 
          top: cursorY,
          x: "-50%", // Center offset
          y: "-50%",
          position: 'fixed',
          pointerEvents: 'none'
        }}
      />
      {/* Expanding Outline Circle - Perfectly aligned and reactive */}
      <motion.div 
        className="cursor-outline" 
        animate={{
          width: isPointer ? 90 : 24, // Expanded size on hover
          height: isPointer ? 90 : 24,
          backgroundColor: isPointer ? 'rgba(243, 156, 18, 0.15)' : 'transparent',
          borderWidth: isPointer ? '1px' : '2px',
          opacity: 1
        }}
        style={{ 
          left: cursorX, 
          top: cursorY,
          x: "-50%", // Center offset
          y: "-50%",
          position: 'fixed',
          pointerEvents: 'none'
        }}
        transition={{ 
          type: "spring", 
          damping: 20, 
          stiffness: 150,
          width: { duration: 0.2 },
          height: { duration: 0.2 }
        }}
      />
    </>
  );
};

export default CustomCursor;
