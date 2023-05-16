import React, { FC } from 'react';
import { Box, Button, Container } from '@mui/material';
import GraphqlUrlInput from '../GraphqlUrlInput/GraphqlUrlInput';
import { setIsOpen } from '../../../features/Sheme/schemaSlice';
import { useAppDispatch } from '../../../app/store/hooks';
import { sxButton, sxContainer, sxSection } from './GraphqlTools.style';

const GraphqlTools: FC = () => {
  const dispatch = useAppDispatch();

  const handleSchemaOpen = async () => {
    dispatch(setIsOpen(true));
  };

  return (
    <Box component="section" sx={sxSection}>
      <Container sx={sxContainer} maxWidth="xl">
        <GraphqlUrlInput />
        <Button onClick={handleSchemaOpen} sx={sxButton} variant="contained">
          schema
        </Button>
      </Container>
    </Box>
  );
};

export default GraphqlTools;
