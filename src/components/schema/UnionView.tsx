import { List, ListItemButton, ListItemText, Typography } from '@mui/material';
import React, { FC } from 'react';
import { IRootType } from '../../features/Sheme/types';

interface IUnionViewProps {
  object: IRootType;
}

const UnionView: FC<IUnionViewProps> = ({ object }) => {
  return (
    <div>
      <Typography variant="h4">{object.name}</Typography>

      <List>
        {object.possibleTypes?.map((types) => {
          const name =
            types.name === 'OBJECT' || types.name === 'INPUT_OBJECT'
              ? `${types.name}(...)`
              : types.name;
          return (
            <ListItemButton
              key={types.name}
              // onClick={() => handlePropertyClick(fieldName)}
            >
              <ListItemText primary={name} secondary={''} />
            </ListItemButton>
          );
        })}
      </List>
    </div>
  );
};

export default UnionView;
