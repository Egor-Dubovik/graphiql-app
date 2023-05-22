import React, { Suspense, lazy } from 'react';
import { Main, MainSection } from './MainPage.styles';
import GraphqlTools from '../../components/graphql/GraphqlTools/GraphqlTools';
import Editors from '../../modules/forms/Editors/Editors';
import Loader from '../../components/Loader/Loader';
const Schema = lazy(() => import('../../features/Schema/Schema'));

const MainPage = (): JSX.Element => {
  return (
    <Main>
      <Suspense fallback={<Loader />}>
        <Schema />
      </Suspense>
      <MainSection>
        <GraphqlTools />
        <Editors />
      </MainSection>
    </Main>
  );
};

export default MainPage;
