import React from 'react';
import { DevCard } from '../DevCard/DevCard';
import { developersEN, developersRU } from '../../common/data/developers';
import { divTheme, CustomDiv } from './DevCardList.styles';
import { useTranslation } from 'react-i18next';

export const DevCardList = () => {
  const { t } = useTranslation();

  let developers;

  if ((<>{t('greetings')}</>).props.children === 'Welcome!') {
    developers = developersEN;
  } else {
    developers = developersRU;
  }

  return (
    <CustomDiv
      theme={divTheme}
      sx={{
        [divTheme.breakpoints.down('md')]: {
          flexDirection: 'column',
          alignItems: 'center',
        },
        [divTheme.breakpoints.down(650)]: {
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      {developers.map((dev) => {
        return <DevCard key={dev.id} {...dev} />;
      })}
    </CustomDiv>
  );
};
