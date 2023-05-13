import React from 'react';
import { DevCard } from '../DevCard/DevCard';
import { developers } from '../../common/data/developers';
import { divTheme, CustomDiv } from './DevCardList.styles';

export const DevCardList = () => {
  return (
    <CustomDiv
      theme={divTheme}
      sx={{
        [divTheme.breakpoints.down('md')]: {
          flexDirection: 'column',
          alignItems: 'center',
          height: '1790px',
        },
      }}
    >
      {developers.map((dev) => {
        return <DevCard key={dev.id} {...dev} />;
      })}
    </CustomDiv>
  );
};
