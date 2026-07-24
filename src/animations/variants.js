export const fadeIn = (direction = 'up', delay = 0) => ({
  hidden: {
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    opacity: 0,
    filter: 'blur(8px)',
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 100,
      duration: 0.8,
      delay,
    },
  },
});

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const scaleUp = (delay = 0) => ({
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 20,
      delay,
    },
  },
});

export const cardHoverVariant = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  },
};
