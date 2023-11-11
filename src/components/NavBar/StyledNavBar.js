import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavLinksWrapper = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    padding: 5px;
    text-decoration: none;
    color: #8b5a8b;
    transition: color 0.5s, background-color 0.5s;
    border-radius: 3px;
    &:hover {
      background-color: #8b5a8b;
      color: white;
    }
    &.active {
      border-bottom: #8b5a8b 3px solid;
    }
  }
`;
