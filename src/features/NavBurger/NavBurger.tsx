import { NavToggle } from '../../components/NavToggle/NavToggle';
import { useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { BurgerContainer, BurgerMenu, Shadowfield, boxTheme } from './NavBurger.styles';
import { ThemeProvider } from '@mui/material';
import { NavBurgerMenu } from '../../components/NavBurgerMenu/NavBurgerMenu';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleBurger } from './navBurgerSlice';

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
    clipPath: 'circle(20px at 218px 28px)',
    transition: {
      delay: 0.3,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const shadowbar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
      delay: 0.2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 483px 28px)',
    transition: {
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
  const updateDispatch = useAppDispatch();
  const navBurgerOpen = useAppSelector((state) => state.burger.burger);

  const [isOpen, toggleOpen] = useState(navBurgerOpen);
  const containerRef = useRef(null);
  const { height } = useSizes(containerRef);

  const { scrollY } = useScroll();
  const scrollYRange = [0, 200];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const burgerColor: any = useTransform(scrollY, scrollYRange, ['#1976d2', '#33bfff']);

  const updateState = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    toggleOpen((prevstate) => !prevstate);
    updateDispatch(toggleBurger(!isOpen));
  };

  const fieldUpdate = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    toggleOpen((prevstate) => !prevstate);
    updateDispatch(toggleBurger(!isOpen));
  };

  return (
    <ThemeProvider theme={boxTheme}>
      <BurgerContainer
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <Shadowfield variants={shadowbar} onClick={fieldUpdate} />
        <BurgerMenu
          variants={sidebar}
          style={{ backgroundColor: burgerColor }}
          onClick={fieldUpdate}
        />
        <NavToggle toggle={updateState} />
        <NavBurgerMenu />
      </BurgerContainer>
    </ThemeProvider>
  );
};
