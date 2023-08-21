import React, { FC, useEffect, useState } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import GraphqlUrlInput from '../GraphqlUrlInput/GraphqlUrlInput';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import { sxButton, sxContainer, sxSection } from './GraphqlTools.style';
import { isEmptyObject } from '../../../utils/isEmptyObject';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  useEffect(() => {
    if (isSchemaError) {
      setSchemaReceived(false);
      return;
    }
    if (!isEmptyObject(schemaData)) setSchemaReceived(true);
  }, [schemaData, isSchemaError]);

  return (
    <Box component="section" sx={sxSection}>
      <Box sx={sxContainer}>
        <GraphqlUrlInput />
        <Tooltip title={t('schema')}>
          <IconButton
            sx={sxButton}
            onClick={() => dispatch(setIsOpen(true))}
            disabled={!isSchemaReceived}
          >
            <LibraryBooksIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default GraphqlTools;
