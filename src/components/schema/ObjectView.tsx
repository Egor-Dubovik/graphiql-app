import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { IRootType } from '../../features/Sheme/types';

export interface IObjectProps {
  object: IRootType;
}

const ObjectView: FC<IObjectProps> = ({ object }) => {
  return (
    <div>
      <Typography variant="h4">{object.name}</Typography>
      <List>
        {object.fields?.map((field) => {
          const name = field.type.kind === 'OBJECT' ? `${field.name}(...)` : field.name;
          return (
            <ListItemButton
              key={field.name}
              // onClick={() => handlePropertyClick(fieldName)}
            >
              <ListItemText primary={name} secondary={`type: ${field.type.name}`} />
            </ListItemButton>
          );
        })}
      </List>
    </div>
  );
};

export default ObjectView;
