import React from 'react';
import { Container } from '@mui/material';
import GraphqlUrlInput from '../GraphqlUrlInput/GraphqlUrlInput';

const GraphqlTools = () => {
  return (
    <section>
      <Container maxWidth="xl">
        <GraphqlUrlInput />
      </Container>
    </section>
  );
};

export default GraphqlTools;
