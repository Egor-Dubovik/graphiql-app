import React from 'react';
import { DevCardList } from '../../components/DevCardList/DevCardList';
import { Container, Typography } from '@mui/material';
import { CustomSection, ShadowBox } from './WelcomePage.styles';
import { WelcomeInfo } from '../../components/WelcomeInfo/WelcomeInfo';
import { WelcomePlayer } from '../../components/WelcomePlayer/WelcomePlayer';
import { useAppSelector } from '../../app/store/hooks';
import { useTranslation } from 'react-i18next';

const WelcomePage = () => {
  const navBurgerOpen = useAppSelector((state) => state.burger.burger);

  navBurgerOpen
    ? (document.body.style.overflowY = 'hidden')
    : (document.body.style.overflowY = 'scroll');

  const { t } = useTranslation();

  return (
    <main className="main">
      <ShadowBox sx={{ position: 'relative' }}>
        <CustomSection>
          <Typography variant="h2">{t('greetings')}</Typography>
        </CustomSection>
        <Container maxWidth="xl">
          <DevCardList />
        </Container>
        <Container
          maxWidth="xl"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <WelcomeInfo />
          <WelcomePlayer />
        </Container>
      </ShadowBox>
    </main>
  );
};

export default WelcomePage;
