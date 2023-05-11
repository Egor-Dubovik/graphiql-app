import React from 'react';
import { DevCardList } from '../../components/DevCardList/DevCardList';
import { Container } from '@mui/material';
import { CustomH2, CustomSection } from './WelcomePage.styles';
import { WelcomeInfo } from '../../components/WelcomeInfo/WelcomeInfo';

const WelcomePage = () => {
  return (
    <main className="main">
      <Container
        maxWidth="xl"
        sx={{
          height: 100,
          textAlign: 'center',
        }}
      >
        <CustomSection>
          <CustomH2>Welcome Page</CustomH2>
        </CustomSection>
      </Container>
      <Container maxWidth="xl">
        <DevCardList />
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          textAlign: 'center',
        }}
      >
        <WelcomeInfo />
      </Container>
    </main>
  );
};

export default WelcomePage;
