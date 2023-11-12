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

export const LoggedLinksWrapper = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  min-width: 780px;

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

  button {
    max-width: 150px;
    padding: 5px 10px;
    margin: 0 auto;
    border: none;
    color: #333333;
    background: linear-gradient(
      to bottom,
      rgb(227, 213, 255),
      rgb(255, 231, 231)
    );
    border-radius: 20px;
    background-size: 100% auto;
    font-family: inherit;
    font-size: 18px;
    transition: transform 0.2s;

    &:active:not(:disabled) {
      opacity: 0.7;
      transform: scale(0.95);
    }
    &:hover:not(:disabled) {
      background-position: right center;
      background-size: 200% auto;
      -webkit-animation: pulse 2s infinite;
      animation: pulse512 1.5s infinite;
    }

    @keyframes pulse512 {
      0% {
        box-shadow: 0 0 0 0 #cea2fd;
      }

      70% {
        box-shadow: 0 0 0 10px rgb(218 103 68 / 0%);
      }

      100% {
        box-shadow: 0 0 0 0 rgb(218 103 68 / 0%);
      }
    }
  }
`;
