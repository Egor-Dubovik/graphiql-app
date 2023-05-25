import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export const MotionLi = motion('li');

export const FinalLi = styled(MotionLi)({
  display: 'flex',
  justifyContent: 'center',
  fontSize: 28,
});

export const CustomNavLink = styled(NavLink)({
  borderRadius: '5px',
  width: '40px',
  height: '20px',
  flex: 1,
  color: '#fff',
  textDecoration: 'none',
  textAlign: 'center',
  fontFamily: 'sans-serif',
});

export const CustomDiv = styled('div')({
  position: 'relative',
  borderRadius: '5px',
  width: '90px',
  height: '20px',
  flex: 1,
});

const MotionUl = motion('ul');

export const BurgerMenuUl = styled(MotionUl)`
  height: 300px;
  display: flex;
  flex-direction: column;

  li:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const NavContainer = styled('nav')({
  position: 'absolute',
  top: '50px',
  right: '90px',
  width: '80px',
  height: '400px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  zIndex: 100,
});
