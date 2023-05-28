import React, { Suspense, lazy } from 'react';
import { Main } from './MainPage.styles';
import MainGraphqlSection from '../../components/graphql/MainGraphqlSection/MainGraphqlSection';
import Loader from '../../components/Loader/Loader';
const Schema = lazy(() => import('../../features/Schema/Schema'));

const MainPage = (): JSX.Element => {
  return (
    <Main>
      <Suspense fallback={<Loader />}>
        <Schema />
        <MainGraphqlSection />
      </Suspense>
    </Main>
  );
};

export default MainPage;
