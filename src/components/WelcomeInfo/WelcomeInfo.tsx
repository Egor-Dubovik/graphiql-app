import React from 'react';
import { CustomBox, FitImage, boxTheme } from './WelcomeInfo.styles';
import { Box } from '@mui/material';

export const WelcomeInfo = () => {
  return (
    <CustomBox
      theme={boxTheme}
      sx={{
        [boxTheme.breakpoints.down('md')]: {
          height: '1000px',
          justifyContent: 'space-around',
          alignItems: 'center',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '40%',
          display: 'flex',
          justifyContent: 'space-around',
          [boxTheme.breakpoints.down('md')]: {
            flexDirection: 'column',
            width: '90%',
            height: '50%',
          },
        }}
      >
        <Box
          sx={{
            width: '30%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            [boxTheme.breakpoints.down('md')]: {
              width: '100%',
              height: '30%',
            },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
          suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Box>
        <Box
          sx={{
            width: '30%',
            height: '100%',
            [boxTheme.breakpoints.down('md')]: {
              width: '100%',
              height: '30%',
            },
          }}
        >
          <FitImage
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/330px-GraphQL_Logo.svg.png"
            alt="graphql logo"
          ></FitImage>
        </Box>
        <Box
          sx={{
            width: '30%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            [boxTheme.breakpoints.down('md')]: {
              width: '100%',
              height: '30%',
            },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
          suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '40%',
          display: 'flex',
          justifyContent: 'space-around',
          [boxTheme.breakpoints.down('md')]: {
            flexDirection: 'column',
            width: '90%',
            height: '50%',
          },
        }}
      >
        <Box
          sx={{
            width: '30%',
            height: '100%',
            [boxTheme.breakpoints.down('md')]: {
              width: '100%',
              height: '30%',
            },
          }}
        >
          <FitImage src="https://rs.school/images/partners/logo-rs.svg" alt="rss logo"></FitImage>
        </Box>
        <Box
          sx={{
            width: '30%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
            [boxTheme.breakpoints.down('md')]: {
              width: '100%',
              height: '30%',
            },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
          suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Box>
        <Box
          sx={{
            width: '30%',
            height: '100%',
            [boxTheme.breakpoints.down('md')]: {
              width: '100%',
              height: '30%',
            },
          }}
        >
          <FitImage
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt="react logo"
          ></FitImage>
        </Box>
      </Box>
    </CustomBox>
  );
};
