import React from 'react';
import { Container } from '@mui/material';
import { MainH2, MainSection } from './MainPage.styles';
import NavMain from '../../components/NavMain/NavMain';
import Editors from '../../modules/forms/Editors/Editors';

const MainPage = () => {
  return (
    <main className="main">
      <Container
        maxWidth="xl"
        sx={{
          height: 100,
          textAlign: 'center',
        }}
      >
        <MainSection>
          <MainH2>MainPage</MainH2>
          <NavMain />
          <Editors />
        </MainSection>
      </Container>
    </main>
  );
};

export default MainPage;
