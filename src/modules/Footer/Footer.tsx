import { Box, Container } from '@mui/material';
import React, { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <Container
        maxWidth="xl"
        sx={{
          height: '70px',
          backgroundColor: '#1976d2',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Box
          sx={{
            width: '200px',
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <a href="https://github.com/Egor-Dubovik">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="github logo"
              width={50}
              height={50}
            ></img>
          </a>
          <a href="https://github.com/grishanova-oa">
            <img
              src="https://www.svgrepo.com/show/365441/github-logo-thin.svg"
              alt="github logo"
              width={50}
              height={50}
            ></img>
          </a>
          <a href="https://github.com/harry177">
            <img
              src="https://cdn.cdnlogo.com/logos/g/55/github.svg"
              alt="github logo"
              width={50}
              height={50}
            ></img>
          </a>
        </Box>
        <Box
          sx={{
            width: '200px',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Created by HolyCoders Team
        </Box>
        <Box sx={{ width: '200px', height: '100%' }}>
          <a href="https://rs.school/">
            <img src="https://rs.school/images/rs_school.svg" alt="rss logo"></img>
          </a>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
