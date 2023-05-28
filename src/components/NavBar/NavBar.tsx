import React from 'react';
import { ROUTES } from '../../router/routes/routes.constant';
import UserMenu from '../UserMenu/UserMenu';
import { useTranslation } from 'react-i18next';
import {
  CustomList,
  CustomListItem,
  CustomListItemNext,
  CustomNav,
  CustomNavLink,
} from './NavBar.styles';

const NavBar = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <CustomNav>
      <CustomList>
        <CustomListItem>
          <CustomNavLink to={ROUTES.MAIN}>{t('nav-main')}</CustomNavLink>
        </CustomListItem>
        <CustomListItem>
          <CustomNavLink to={ROUTES.WELCOME}>{t('nav-about')}</CustomNavLink>
        </CustomListItem>
        <CustomListItemNext>
          <UserMenu />
        </CustomListItemNext>
      </CustomList>
    </CustomNav>
  );
};

export default NavBar;
