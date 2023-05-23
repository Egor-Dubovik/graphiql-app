import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { FallbackProps } from 'react-error-boundary';

export const fallbackRender = ({ error, resetErrorBoundary }: FallbackProps): JSX.Element => {
  const retry = () => {
    resetErrorBoundary();
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <Box>
      <Box sx={{ mb: 1 }}>
        <Typography sx={{ fontSize: '24px', fontWeight: 500 }}>Something went wrong:</Typography>
        <Typography sx={{ fontSize: '24px', color: 'red' }}>{error.message}</Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="outlined" onClick={retry}>
          try again
        </Button>
        <Button variant="outlined" onClick={reloadPage}>
          reload Page
        </Button>
      </Box>
    </Box>
  );
};
