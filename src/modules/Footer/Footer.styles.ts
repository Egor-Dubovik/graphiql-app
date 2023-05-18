import { Box } from '@mui/material';
import { createTheme, styled } from '@mui/material/styles';

export const footerTheme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          height: '70px',
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'space-around',
        },
      },
    },
  },
});

export const GhImage = styled('img')({
  width: '50px',
  height: '50px',
  [footerTheme.breakpoints.down('md')]: {
    width: '30px',
    height: '30px',
  },
});

export const LeftFooterBox = styled(Box)({
  width: '200px',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [footerTheme.breakpoints.down('md')]: {
    width: '100px',
  },
});

export const CenterFooterBox = styled(Box)({
  width: '200px',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  [footerTheme.breakpoints.down(480)]: {
    width: '100%',
    order: 3,
  },
});

export const RightFooterBox = styled(Box)({
  width: '200px',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [footerTheme.breakpoints.down('md')]: {
    width: '100px',
  },
});

export const InnerRSSBox = styled(Box)({
  width: '80%',
  height: '56px',
  [footerTheme.breakpoints.down('md')]: {
    height: '30px',
  },
});
