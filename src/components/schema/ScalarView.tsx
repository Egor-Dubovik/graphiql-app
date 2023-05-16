import { Typography } from '@mui/material';
import React, { FC } from 'react';
import { IRootType } from '../../features/Sheme/types';

interface IScalarViewProps {
  object: IRootType;
}

const ScalarView: FC<IScalarViewProps> = ({ object }) => {
  return (
    <div>
      <Typography variant="h4">{object.name}</Typography>
      <Typography variant="h4">{object.description}</Typography>
    </div>
  );
};

export default ScalarView;
