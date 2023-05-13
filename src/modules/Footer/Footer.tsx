import { Container, ThemeProvider, Tooltip, Typography } from '@mui/material';
import React, { FC } from 'react';
import {
  CenterFooterBox,
  GhImage,
  InnerRSSBox,
  LeftFooterBox,
  RightFooterBox,
  footerTheme,
} from './Footer.styles';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <ThemeProvider theme={footerTheme}>
        <Container
          maxWidth="xl"
          sx={{
            [footerTheme.breakpoints.down(480)]: {
              height: '140px',
              flexDirection: 'column',
              alignItems: 'center',
            },
          }}
        >
          <LeftFooterBox>
            <Tooltip title="E.Dubovik github">
              <a href="https://github.com/Egor-Dubovik">
                <GhImage
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="github logo"
                ></GhImage>
              </a>
            </Tooltip>
            <Tooltip title="O.Grishanova github">
              <a href="https://github.com/grishanova-oa">
                <GhImage
                  src="https://www.svgrepo.com/show/365441/github-logo-thin.svg"
                  alt="github logo"
                ></GhImage>
              </a>
            </Tooltip>
            <Tooltip title="A.Prygunov github">
              <a href="https://github.com/harry177">
                <GhImage
                  src="https://cdn.cdnlogo.com/logos/g/55/github.svg"
                  alt="github logo"
                ></GhImage>
              </a>
            </Tooltip>
          </LeftFooterBox>
          <CenterFooterBox>
            <Typography
              variant="body2"
              sx={{
                [footerTheme.breakpoints.down('md')]: {
                  typography: 'caption',
                },
              }}
            >
              Created by HolyCoders Team <br /> 2023
            </Typography>
          </CenterFooterBox>
          <RightFooterBox>
            <Tooltip title="RSS web site">
              <InnerRSSBox>
                <a href="https://rs.school/">
                  <img src="https://rs.school/images/rs_school.svg" alt="rss logo"></img>
                </a>
              </InnerRSSBox>
            </Tooltip>
          </RightFooterBox>
        </Container>
      </ThemeProvider>
    </footer>
  );
};

export default Footer;
