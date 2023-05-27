import React from 'react';
import { Container } from '@mui/material';
import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar/NavBar';
import { useTransform, useScroll, useAnimation } from 'framer-motion';
import { FinalHeader, FinalToolbar, FinalTypography, ThirdHeaderBox } from './Header.styles';
import { NavBurger } from '../../features/NavBurger/NavBurger';
import { LangSwitcher } from '../../components/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';

const Header = (): JSX.Element => {
  const { scrollY } = useScroll();
  const scrollYRange = [0, 200];

  const controls = useAnimation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toolHeight: any = useTransform(scrollY, scrollYRange, ['64px', '32px']);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toolOpacity: any = useTransform(scrollY, scrollYRange, [0, 1]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toolColor: any = useTransform(scrollY, scrollYRange, ['#1976d2', '#33bfff']);

  const { t } = useTranslation();

  return (
    <FinalHeader
      position="fixed"
      initial="visible"
      animate={controls}
      transition={{ duration: 1 }}
      style={{ backgroundColor: toolColor }}
    >
      <Container maxWidth="xl">
        <FinalToolbar
          sx={{ p: 0 }}
          transition={{ duration: 1 }}
          style={{ height: toolHeight, minHeight: toolHeight }}
          animate={controls}
        >
          <Logo />
          <FinalTypography style={{ opacity: toolOpacity }}>{t('greetings')}</FinalTypography>
          <LangSwitcher />
          <ThirdHeaderBox>
            <NavBar />
            <NavBurger />
          </ThirdHeaderBox>
        </FinalToolbar>
      </Container>
    </FinalHeader>
  );
};

export default Header;
