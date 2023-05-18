import React from 'react';
import Schema from '../../features/Shema/Schema';
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
