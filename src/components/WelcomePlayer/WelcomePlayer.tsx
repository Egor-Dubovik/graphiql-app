import React from 'react';
import { OuterBox, PlayerBox, boxTheme } from './WelcomePlayer.styles';
import ReactPlayer from 'react-player';

export const WelcomePlayer = () => {
  return (
    <OuterBox>
      <PlayerBox theme={boxTheme}>
        <ReactPlayer url="https://www.youtube.com/watch?v=2kPYnZ-PoI8" width="100%" height="100%" />
      </PlayerBox>
    </OuterBox>
  );
};
