import React from 'react';
import { BurgerMenuUl, CustomNavLink, FinalLi, NavContainer } from './NavBurgerMenu.styles';
import { ROUTES } from '../../router/routes/routes.constant';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const phases = {
  open: {
    y: 30,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const NavBurgerMenu = () => (
  <NavContainer>
    <BurgerMenuUl variants={variants}>
      <FinalLi variants={phases} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <CustomNavLink to={ROUTES.MAIN}>Main</CustomNavLink>
      </FinalLi>
      <FinalLi variants={phases} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <CustomNavLink to={ROUTES.WELCOME}>About</CustomNavLink>
      </FinalLi>
    </BurgerMenuUl>
  </NavContainer>
);
