import { Container, ThemeProvider, Tooltip, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  CenterFooterBox,
  GhImage,
  InnerRSSBox,
  LeftFooterBox,
  RightFooterBox,
  footerTheme,
} from './Footer.styles';

const Footer: FC = () => {
  const { t } = useTranslation();
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
            <Tooltip title={t('egor-tooltip')}>
              <a href="https://github.com/Egor-Dubovik">
                <GhImage
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="github logo"
                ></GhImage>
              </a>
            </Tooltip>
            <Tooltip title={t('olga-tooltip')}>
              <a href="https://github.com/grishanova-oa">
                <GhImage
                  src="https://www.svgrepo.com/show/365441/github-logo-thin.svg"
                  alt="github logo"
                ></GhImage>
              </a>
            </Tooltip>
            <Tooltip title={t('artem-tooltip')}>
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
              {t('creation')} <br /> 2023
            </Typography>
          </CenterFooterBox>
          <RightFooterBox>
            <Tooltip title={t('school-tooltip')}>
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
