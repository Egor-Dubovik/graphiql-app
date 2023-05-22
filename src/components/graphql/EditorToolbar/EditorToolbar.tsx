import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box, Fab } from '@mui/material';

const EditorToolBar = () => {
  return (
    <Box sx={{ p: 2 }} bgcolor="white">
      <Fab size="medium" color="primary" aria-label="play">
        <PlayArrowIcon fontSize="large" />
      </Fab>
    </Box>
  );
};

export default EditorToolBar;
