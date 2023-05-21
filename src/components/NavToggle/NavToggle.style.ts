import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const MotionPath = motion('path');

export const NavTogglePath = styled(MotionPath)({
  fill: 'transparent',
  strokeWidth: 3,
  stroke: '#fff',
  strokeLinecap: 'round',
});

export const CustomButton = styled('button')({
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  position: 'absolute',
  top: '11px',
  right: '30px',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  zIndex: 100,
});
