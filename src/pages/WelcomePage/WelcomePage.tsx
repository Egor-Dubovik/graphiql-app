import React from 'react';
import { DevCardList } from '../../components/DevCardList/DevCardList';
import { Container } from '@mui/material';

import './WelcomePageStyles.scss';

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
        <section className="welcome-main">
          <h2 className="welcome-header">Welcome Page</h2>
        </section>
      </Container>
      <Container maxWidth="xl">
        <DevCardList />
      </Container>
    </main>
  );
};

export default WelcomePage;
