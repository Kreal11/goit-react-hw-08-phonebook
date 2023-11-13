import React from 'react';
import { Outlet } from 'react-router-dom';

import { NavBar } from 'components/NavBar/NavBar';
import { Blur } from 'components/StyledApp';

export const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Blur></Blur>
      <Outlet />
    </>
  );
};
