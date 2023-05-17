import React from 'react';
import { Main, MainSection } from './MainPage.styles';
import NavMain from '../../components/NavMain/NavMain';
import Editors from '../../modules/forms/Editors/Editors';

const MainPage = () => {
  return (
    <Main>
      <MainSection>
        <NavMain />
        <Editors />
      </MainSection>
    </Main>
  );
};

export default MainPage;
