import { MenuToggle } from '../NavToggle/NavToggle';
import { motion, useCycle } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { BurgerContainer, BurgerMenu, boxTheme } from './NavBurger.styles';
import { ThemeProvider } from '@mui/material';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.3,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const useDimensions = (ref: React.MutableRefObject<HTMLElement | null>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = (ref.current as unknown as HTMLElement).offsetWidth;
    dimensions.current.height = (ref.current as unknown as HTMLElement).offsetHeight;
  });

  return dimensions.current;
};

export const NavBurger = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <ThemeProvider theme={boxTheme}>
      <BurgerContainer>
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={containerRef}
        >
          <BurgerMenu variants={sidebar} />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
      </BurgerContainer>
    </ThemeProvider>
  );
};
