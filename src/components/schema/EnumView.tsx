import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { IRootType } from '../../features/Sheme/types';

interface IEnumViewProps {
  object: IRootType;
}

const EnumView: FC<IEnumViewProps> = ({ object }) => {
  return (
    <>
      <Typography variant="h4">{object.name}</Typography>
      <ul>
        {object.enumValues?.map((value) => (
          <li key={value.name}>{value.name}</li>
        ))}
      </ul>
    </>
  );
};

export default EnumView;
