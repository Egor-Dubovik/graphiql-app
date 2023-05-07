import { styled } from '@mui/material/styles';

export const BackgroundImage = styled('img')({
  position: 'absolute',
  height: '100%',
  width: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  filter: 'blur(12px)',
  zIndex: -3,
});

export const sxAuthContainer = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
