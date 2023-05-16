import React from 'react';
import { Container } from '@mui/material';
import Schema from '../../features/Sheme/Schema';
import GraphqlTools from '../../components/graphql/GraphqlTools/GraphqlTools';

const MainPage = () => {
  return (
    <main className="main">
      <GraphqlTools />
      <Schema />
    </main>
  );
};

export default MainPage;
