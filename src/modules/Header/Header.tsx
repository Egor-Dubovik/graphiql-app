import React from 'react';
import { Container } from '@mui/material';
import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar/NavBar';
import { useTransform, useScroll, useAnimation } from 'framer-motion';
import { FinalHeader, FinalToolbar } from './Header.styles';

const Header = (): JSX.Element => {
  const { scrollY } = useScroll();
  const scrollYRange = [0, 200, 400];
  const nextYRange = ['0px', '-20px', '-64px'];

  const controls = useAnimation();

  const cont = useTransform(scrollY, scrollYRange, nextYRange);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toolHeight: any = useTransform(scrollY, scrollYRange, ['64px', '32px', '32px']);

  return (
    <FinalHeader
      position="fixed"
      initial="visible"
      animate={controls}
      transition={{ duration: 1 }}
      style={{ y: cont }}
    >
      <Container maxWidth="xl">
        <FinalToolbar
          sx={{ p: 0 }}
          transition={{ duration: 1 }}
          style={{ height: toolHeight, minHeight: toolHeight }}
          animate={controls}
        >
          <Logo />
          <NavBar />
        </FinalToolbar>
      </Container>
    </FinalHeader>
  );
};

export default Header;
