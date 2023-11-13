import React from 'react';
// import img from './404-image.jpg';
import { ImgWrapper, StyledImg } from './StyledNotFound';
import { NavLink } from 'react-router-dom';

export const NotFound = () => {
  return (
    <ImgWrapper>
      <span>
        You can go<NavLink to="/">home</NavLink>
      </span>
    </ImgWrapper>
  );
};
