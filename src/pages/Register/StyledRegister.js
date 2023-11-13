import styled from 'styled-components';

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 50px 0;

  span {
    font-size: 14px;
    a {
      padding: 2px;
      color: #8b5a8b;
      transition: color 0.5s, background-color 0.5s;
      border-radius: 3px;
      &:hover {
        background-color: #8b5a8b;
        color: white;
      }
    }
  }
`;

export const InputWrapper = styled.div`
  margin: 0 auto;
  width: 270px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    to bottom,
    rgb(227, 213, 255),
    rgb(255, 231, 231)
  );
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
`;

export const RegisterInput = styled.input`
  min-width: 250px;
  height: 40px;
  border: none;
  outline: none;
  caret-color: rgb(255, 81, 0);
  background-color: rgb(255, 255, 255);
  border-radius: 30px;
  padding-left: 10px;
  letter-spacing: 0.8px;
  color: rgb(19, 19, 19);
  font-size: 15.3px;
`;

export const RegisterButton = styled.button`
  max-width: 150px;
  padding: 10px;
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
  padding: 0.6em 1.5em;
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
`;
