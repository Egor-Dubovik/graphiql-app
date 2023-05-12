import { Box, Container, ThemeProvider } from '@mui/material';
import React, { FC } from 'react';
import { GhImage, footerTheme } from './Footer.styles';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <ThemeProvider theme={footerTheme}>
        <Container maxWidth="xl">
          <Box
            sx={{
              width: '200px',
              height: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              [footerTheme.breakpoints.down('md')]: {
                width: '100px',
              },
            }}
          >
            <a href="https://github.com/Egor-Dubovik">
              <GhImage
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="github logo"
                sx={{
                  [footerTheme.breakpoints.down('md')]: {
                    width: '30px',
                    height: '30px',
                  },
                }}
              ></GhImage>
            </a>
            <a href="https://github.com/grishanova-oa">
              <GhImage
                src="https://www.svgrepo.com/show/365441/github-logo-thin.svg"
                alt="github logo"
                sx={{
                  [footerTheme.breakpoints.down('md')]: {
                    width: '30px',
                    height: '30px',
                  },
                }}
              ></GhImage>
            </a>
            <a href="https://github.com/harry177">
              <GhImage
                src="https://cdn.cdnlogo.com/logos/g/55/github.svg"
                alt="github logo"
                sx={{
                  [footerTheme.breakpoints.down('md')]: {
                    width: '30px',
                    height: '30px',
                  },
                }}
              ></GhImage>
            </a>
          </Box>
          <Box
            sx={{
              width: '200px',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              [footerTheme.breakpoints.down('md')]: {
                width: '100px',
              },
            }}
          >
            Created by HolyCoders Team <br /> 2023
          </Box>
          <Box
            sx={{
              width: '200px',
              height: '100%',
              [footerTheme.breakpoints.down('md')]: {
                width: '100px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            }}
          >
            <Box sx={{ width: '100%', height: '50%' }}>
              <a href="https://rs.school/">
                <img src="https://rs.school/images/rs_school.svg" alt="rss logo"></img>
              </a>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </footer>
  );
};

export default Footer;
