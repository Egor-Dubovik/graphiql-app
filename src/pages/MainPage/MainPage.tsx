import React from 'react';
import { Main, MainSection } from './MainPage.styles';
import GraphqlTools from '../../components/graphql/GraphqlTools/GraphqlTools';
import Editors from '../../modules/forms/Editors/Editors';
import Schema from '../../features/Schema/Schema';

const MainPage = () => {
  return (
    <Main>
      <Schema />
      <MainSection>
        <GraphqlTools />
        <Editors />
      </MainSection>
    </Main>
  );
};

export default MainPage;
