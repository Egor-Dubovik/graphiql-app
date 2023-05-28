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
  position: 'relative',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  top: '15px',
  width: '32px',
  height: '25px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 500,
});
