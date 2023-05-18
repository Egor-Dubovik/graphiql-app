import React, { FC, useEffect, useState } from 'react';
import { Box, Button, Container } from '@mui/material';
import GraphqlUrlInput from '../GraphqlUrlInput/GraphqlUrlInput';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import { sxButton, sxContainer, sxSection } from './GraphqlTools.style';
import { isEmptyObject } from '../../../utils/isEmptyObject';
import {
  selectSchemaData,
  selectSchemaError,
  setIsOpen,
} from '../../../features/Schema/schemaSlice';

const GraphqlTools: FC = () => {
  const [isSchemaReceived, setSchemaReceived] = useState(false);
  const schemaData = useAppSelector(selectSchemaData);
  const isSchemaError = useAppSelector(selectSchemaError);
  const dispatch = useAppDispatch();

  const handleSchemaOpen = async () => {
    dispatch(setIsOpen(true));
  };

  useEffect(() => {
    if (isSchemaError) {
      setSchemaReceived(false);
      return;
    }
    if (!isEmptyObject(schemaData)) {
      setSchemaReceived(true);
    }
  }, [schemaData, isSchemaError]);

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
