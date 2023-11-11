import { StyledHeaderH1 } from 'components/StyledApp';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutThunk } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { NavLinksWrapper, NavWrapper } from './StyledNavBar';

export const NavBar = () => {
  const { name } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <div>
      <NavWrapper>
        <div>
          {/* {!isLoggedIn && <NavLink to="/">Start page</NavLink>} */}
          <StyledHeaderH1>PHONEBOOK</StyledHeaderH1>
          {/* {isLoggedIn && <NavLink to="/allContacts">My profile</NavLink>} */}
        </div>
        {!isLoggedIn ? (
          <NavLinksWrapper>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </NavLinksWrapper>
        ) : (
          <div>
            <span>{name}</span>
            <button onClick={() => dispatch(logoutThunk())}>Log out</button>
          </div>
        )}
      </NavWrapper>
    </div>
  );
};
