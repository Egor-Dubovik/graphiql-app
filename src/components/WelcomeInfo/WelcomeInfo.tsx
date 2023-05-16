import React from 'react';
import { FitImage, ImageBox, MainBox, MiddleBox, TextBox, boxTheme } from './WelcomeInfo.styles';
import { Typography } from '@mui/material';

export const WelcomeInfo = () => {
  return (
    <MainBox theme={boxTheme}>
      <MiddleBox>
        <TextBox>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
            suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </TextBox>
        <ImageBox>
          <FitImage
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/330px-GraphQL_Logo.svg.png"
            alt="graphql logo"
          ></FitImage>
        </ImageBox>
        <TextBox>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
            suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </TextBox>
      </MiddleBox>
      <MiddleBox>
        <ImageBox>
          <FitImage src="https://rs.school/images/partners/logo-rs.svg" alt="rss logo"></FitImage>
        </ImageBox>
        <TextBox>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
            suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
            dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </TextBox>
        <ImageBox>
          <FitImage
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt="react logo"
          ></FitImage>
        </ImageBox>
      </MiddleBox>
    </MainBox>
  );
};
