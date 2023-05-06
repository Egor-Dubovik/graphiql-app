import React from 'react';
import { DevCardList } from '../../components/DevCardList/DevCardList';
import { Container } from '@mui/material';
import { CustomH2, CustomSection } from './WelcomePage.styles';

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
    </main>
  );
};

export default WelcomePage;
