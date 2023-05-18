import React, { FC, useEffect, useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import GraphqlUrlInput from '../GraphqlUrlInput/GraphqlUrlInput';
import { selectSchemaData, setIsOpen } from '../../../features/Shema/schemaSlice';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import { sxButton, sxContainer, sxSection } from './GraphqlTools.style';
import { isEmptyObject } from '../../../utils/isEmptyObject';

const GraphqlTools: FC = () => {
  const [isSchemaReceived, setSchemaReceived] = useState(false);
  const schemaData = useAppSelector(selectSchemaData);
  const dispatch = useAppDispatch();

  const handleSchemaOpen = async () => {
    dispatch(setIsOpen(true));
  };

  useEffect(() => {
    if (!isEmptyObject(schemaData)) {
      setSchemaReceived(true);
    }
  }, [schemaData]);

  return (
    <Box component="section" sx={sxSection}>
      <Container sx={sxContainer} maxWidth="xl">
        <GraphqlUrlInput />
        <Button
          onClick={handleSchemaOpen}
          disabled={!isSchemaReceived}
          sx={sxButton}
          variant="contained"
        >
          schema
        </Button>
      </Container>
    </Box>
  );
};

export default GraphqlTools;
