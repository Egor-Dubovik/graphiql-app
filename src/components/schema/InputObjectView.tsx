import React, { FC } from 'react';
import { List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { IRootType } from '../../features/Sheme/types';

interface IInputObjectProps {
  object: IRootType;
}

const InputObjectView: FC<IInputObjectProps> = ({ object }) => {
  return (
    <div>
      <Typography variant="h4">{object.name}</Typography>
      <List>
        {object.inputFields?.map((inputField) => {
          return (
            <ListItemButton
              key={inputField.name}
              // onClick={() => handlePropertyClick(fieldName)}
            >
              <ListItemText
                primary={`${inputField.name}(...)`}
                secondary={`type: ${inputField.type.name}`}
              />
            </ListItemButton>
          );
        })}
      </List>
    </div>
  );
};

export default InputObjectView;
