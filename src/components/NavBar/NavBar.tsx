import React from 'react';
import { ROUTES } from '../../router/routes/routes.constant';
import UserMenu from '../UserMenu/UserMenu';
import {
  CustomContainer,
  CustomList,
  CustomListItem,
  CustomListItemNext,
  CustomNav,
  CustomNavLink,
} from './NavBar.styles';

const NavBar = (): JSX.Element => {
  return (
    <CustomNav>
      <CustomContainer>
        <CustomList>
          <CustomListItem>
            <CustomNavLink to={ROUTES.MAIN}>Main</CustomNavLink>
          </CustomListItem>
          <CustomListItem>
            <CustomNavLink to={ROUTES.WELCOME}>About</CustomNavLink>
          </CustomListItem>
          <CustomListItemNext>
            <UserMenu />
          </CustomListItemNext>
        </CustomList>
      </CustomContainer>
    </CustomNav>
  );
};

export default NavBar;
