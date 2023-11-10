import { Blur, StyledHeaderH1 } from 'components/StyledApp';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/addContact">Add contact</NavLink>
          <StyledHeaderH1>PHONEBOOK</StyledHeaderH1>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </nav>
      </header>
      <Blur></Blur>
      <Outlet />
    </>
  );
};
