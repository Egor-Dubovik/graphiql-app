import React from 'react';
import { CustomButton, NavTogglePath } from './NavToggle.style';

interface IToggle {
  toggle: () => void;
}

export const NavToggle: React.FC<IToggle> = ({ toggle }) => (
  <CustomButton onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <NavTogglePath
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <NavTogglePath
        variants={{
          closed: { opacity: 1, d: 'M 2 9.423 L 20 9.423' },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <NavTogglePath
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </CustomButton>
);
