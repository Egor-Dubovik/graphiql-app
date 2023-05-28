import React, { useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, Fab } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import {
  saveResponse,
  selectHeaders,
  selectUserSchema,
  selectVariables,
} from '../../../features/Schema/schemaSlice';
import { useGetUserSchemaMutation } from '../../../features/Schema/schemaAPI';
import { IReqData } from '../../../features/Schema/types';

const getOperationName = (userSchema: string) => {
  const userSchemaArr = userSchema.split(' ');
  return userSchemaArr[userSchemaArr.indexOf('query') + 1];
};

const EditorToolBar = () => {
  const userSchema = useAppSelector(selectUserSchema);
  const variables = useAppSelector(selectVariables);
  const headers = useAppSelector(selectHeaders);
  const dispatch = useAppDispatch();

  const [getUserSchema, { data, error, isError }] = useGetUserSchemaMutation();

  const reqData: IReqData = {
    operationName: variables ? null : getOperationName(userSchema),
    query: userSchema,
  };

  if (variables) {
    reqData.variables = variables;
  }

  const sendSchemaRequest = () => {
    const actualHeaders = headers ? JSON.parse(headers) : {};

    getUserSchema({ data: reqData, headers: actualHeaders });
  };

  useEffect(() => {
    if (data) {
      dispatch(saveResponse(data));
    }
  }, [dispatch, data]);

  useEffect(() => {
    if (error) {
      dispatch(saveResponse(error));
    }
  }, [dispatch, isError]);

  return (
    <Box sx={{ p: 2 }} bgcolor="white">
      <Fab size="medium" color="primary" aria-label="play" onClick={sendSchemaRequest}>
        <PlayArrowIcon fontSize="large" />
      </Fab>
    </Box>
  );
};

export default EditorToolBar;
