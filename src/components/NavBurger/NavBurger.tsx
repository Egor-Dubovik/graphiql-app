import { NavToggle } from '../NavToggle/NavToggle';
import { motion, useCycle, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { BurgerContainer, BurgerMenu, boxTheme } from './NavBurger.styles';
import { ThemeProvider } from '@mui/material';
import { NavBurgerMenu } from '../NavBurgerMenu/NavBurgerMenu';

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
    clipPath: 'circle(20px at 20px 20px)',
    transition: {
      delay: 0.3,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const useSizes = (ref: React.MutableRefObject<HTMLElement | null>) => {
  const sizes = useRef({ width: 0, height: 0 });

  useEffect(() => {
    sizes.current.width = (ref.current as unknown as HTMLElement).offsetWidth;
    sizes.current.height = (ref.current as unknown as HTMLElement).offsetHeight;
  });

  return sizes.current;
};

export const NavBurger = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useSizes(containerRef);

  const { scrollY } = useScroll();
  const scrollYRange = [0, 200];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const burgerColor: any = useTransform(scrollY, scrollYRange, ['#1976d2', '#33bfff']);

  return (
    <ThemeProvider theme={boxTheme}>
      <BurgerContainer>
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={containerRef}
        >
          <BurgerMenu variants={sidebar} style={{ backgroundColor: burgerColor }} />
          <NavToggle toggle={() => toggleOpen()} />
          <NavBurgerMenu />
        </motion.nav>
      </BurgerContainer>
    </ThemeProvider>
  );
};
