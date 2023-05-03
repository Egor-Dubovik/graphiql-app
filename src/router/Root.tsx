import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../modules/Footer/Footer';
import Header from '../modules/Header/Header';

const Root = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
