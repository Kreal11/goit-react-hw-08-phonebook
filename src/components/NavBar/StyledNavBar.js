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
    color: #4b0082;
    transition: color 0.5s, background-color 0.5s;
    border-radius: 3px;
    &:hover {
      background-color: #4b0082;
      color: white;
    }
  }
`;
