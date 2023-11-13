import React from 'react';
// import img from './404-image.jpg';
import { ImgWrapper } from './StyledNotFound';
import { NavLink } from 'react-router-dom';

export const NotFound = () => {
  return (
    <ImgWrapper>
      <h2>It seems like You can find nothing here😭</h2>
      <span>
        You can go <NavLink to="/">back</NavLink>
      </span>
    </ImgWrapper>
  );
};
