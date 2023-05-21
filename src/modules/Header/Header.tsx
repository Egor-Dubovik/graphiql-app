import React from 'react';
import { Container } from '@mui/material';
import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar/NavBar';
import { useTransform, useScroll, useAnimation } from 'framer-motion';
import { FinalHeader, FinalToolbar, FinalTypography } from './Header.styles';
import { NavBurger } from '../../components/NavBurger/NavBurger';

const Header = (): JSX.Element => {
  const { scrollY } = useScroll();
  const scrollYRange = [0, 200];

  const controls = useAnimation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toolHeight: any = useTransform(scrollY, scrollYRange, ['64px', '32px']);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toolOpacity: any = useTransform(scrollY, scrollYRange, [0, 1]);

  return (
    <FinalHeader position="fixed" initial="visible" animate={controls} transition={{ duration: 1 }}>
      <Container maxWidth="xl">
        <FinalToolbar
          sx={{ p: 0 }}
          transition={{ duration: 1 }}
          style={{ height: toolHeight, minHeight: toolHeight }}
          animate={controls}
        >
          <Logo />
          <FinalTypography style={{ opacity: toolOpacity }}>Welcome</FinalTypography>
          <NavBar />
          <NavBurger />
        </FinalToolbar>
      </Container>
    </FinalHeader>
  );
};

export default Header;
