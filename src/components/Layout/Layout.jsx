import { NavBar } from 'components/NavBar/NavBar';
import { Blur } from 'components/StyledApp';
import React from 'react';
import { Outlet } from 'react-router-dom';

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
