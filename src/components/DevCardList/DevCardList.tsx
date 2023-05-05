import React from 'react';
import { DevCard } from '../DevCard/DevCard';
import { developers } from '../../common/data/developers';
import './DevCardListStyles.scss';

export const DevCardList = () => {
  return (
    <div className="card-container">
      {developers.map((dev) => {
        return <DevCard key={dev.id} {...dev} />;
      })}
    </div>
  );
};
