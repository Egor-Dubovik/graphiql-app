import React, { useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, Fab } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import { saveResponse, selectUserSchema } from '../../../features/Schema/schemaSlice';
import { useGetUserSchemaMutation } from '../../../features/Schema/schemaAPI';

const EditorToolBar = () => {
  const userSchema = useAppSelector(selectUserSchema);
  const dispatch = useAppDispatch();

  const [getUserSchema, { data, error, isError }] = useGetUserSchemaMutation();
  const sendSchemaRequest = () => {
    getUserSchema(userSchema);
  };

  useEffect(() => {
    dispatch(saveResponse(data));
    console.log('!!!!!!!!', data);
  }, [dispatch, data]);

  return (
    <Box sx={{ p: 2 }} bgcolor="white">
      <Fab size="medium" color="primary" aria-label="play" onClick={sendSchemaRequest}>
        <PlayArrowIcon fontSize="large" />
      </Fab>
    </Box>
  );
};

export default EditorToolBar;
