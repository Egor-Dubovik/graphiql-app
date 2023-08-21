import React, { FC, useState, useEffect } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BackspaceIcon from '@mui/icons-material/Backspace';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hooks';
import {
  selectSchemaData,
  selectSchemaError,
  selectUserSchema,
  setIsOpen,
  setUserSchema,
} from '../../../../features/Schema/schemaSlice';
import { useTranslation } from 'react-i18next';
import { isEmptyObject } from '../../../../utils/isEmptyObject';
import { sxButton, sxEditorTools } from './EditorTools.style';
import formatGraphQLCode from '../../../../utils/formatGraphQLCode';

const EditorTools: FC = () => {
  const [isSchemaReceived, setSchemaReceived] = useState(false);
  const schemaData = useAppSelector(selectSchemaData);
  const userSchemaCode = useAppSelector(selectUserSchema);
  const isSchemaError = useAppSelector(selectSchemaError);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleFormatGraphQLCode = (): void => {
    dispatch(setUserSchema(formatGraphQLCode(userSchemaCode)));
  };

  useEffect(() => {
    if (!isEmptyObject(schemaData)) setSchemaReceived(true);
  }, [schemaData]);

  useEffect(() => {
    if (isSchemaError) setSchemaReceived(false);
  }, [isSchemaError]);

  return (
    <Box sx={sxEditorTools}>
      <Tooltip title={t('schema')}>
        <span>
          <IconButton
            sx={sxButton}
            onClick={() => dispatch(setIsOpen(true))}
            disabled={!isSchemaReceived}
          >
            <LibraryBooksIcon />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title={'выровнять'}>
        <IconButton sx={sxButton} onClick={handleFormatGraphQLCode}>
          <AlignHorizontalLeftIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={'стереть'}>
        <IconButton sx={sxButton} onClick={() => dispatch(setUserSchema(''))}>
          <BackspaceIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default EditorTools;
