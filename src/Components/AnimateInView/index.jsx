import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import { useInView } from 'react-intersection-observer';

function AnimateInView({ children, transition, initial, variants }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5
  });

  useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={initial}
      transition={transition}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export default AnimateInView;
