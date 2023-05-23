import React from 'react';
import { DevCardList } from '../../components/DevCardList/DevCardList';
import { Container, Typography } from '@mui/material';
import { CustomH2, CustomSection, ShadowBox } from './WelcomePage.styles';
import { WelcomeInfo } from '../../components/WelcomeInfo/WelcomeInfo';
import { WelcomePlayer } from '../../components/WelcomePlayer/WelcomePlayer';
import { useAppSelector } from '../../app/store/hooks';

const WelcomePage = () => {
  const navBurgerOpen = useAppSelector((state) => state.burger.burger);

  navBurgerOpen
    ? (document.body.style.overflowY = 'hidden')
    : (document.body.style.overflowY = 'scroll');

  return (
    <main className="main">
      <ShadowBox sx={{ position: 'relative' }}>
        <Container
          maxWidth="xl"
          sx={{
            height: 200,
            textAlign: 'center',
          }}
        >
          <CustomSection>
            <Typography variant="h3">
              <CustomH2>Welcome Page</CustomH2>
            </Typography>
          </CustomSection>
        </Container>
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
