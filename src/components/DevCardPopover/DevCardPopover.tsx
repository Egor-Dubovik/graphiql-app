import React from 'react';
import { IDevCardPopover } from '../../common/interfaces/iDevCardPopover';
import { Popover, Typography } from '@mui/material';

export const DevCardPopover: React.FC<IDevCardPopover> = ({
  id,
  card,
  anchor,
  handleClose,
  devMore,
}) => {
  return (
    <>
      <Popover
        id={id}
        open={card}
        anchorEl={anchor}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>{devMore}</Typography>
      </Popover>
    </>
  );
};
