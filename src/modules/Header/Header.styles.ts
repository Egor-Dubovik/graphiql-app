import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const MotionHeader = motion(AppBar);
export const FinalHeader = styled(MotionHeader)({});

const MotionToolBar = motion(Toolbar);
export const FinalToolbar = styled(MotionToolBar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const MotionTypography = motion(Typography);
export const FinalTypography = styled(MotionTypography)({});
