import React, { useEffect, useMemo, useState } from 'react';
import {
  GameContainer,
  OptionButton,
  OptionsContainer,
  ResultText,
} from './StyledGamePlug';

export const GamePlug = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const choices = useMemo(() => ['rock🏔️', 'paper🧻', 'scissors✂️'], []);

  useEffect(() => {
    if (userChoice !== null) {
      const newComputerChoice = choices[Math.floor(Math.random() * 3)];
      setComputerChoice(newComputerChoice);
      const gameResult = determineWinner(userChoice, newComputerChoice);
      setResult(gameResult);
    }
  }, [userChoice, choices]);

  const playGame = choice => {
    setUserChoice(choice);
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      return "It's a tie!";
    }
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return 'You win!';
    }
    return 'You lose!';
  };

  return (
    <GameContainer>
      <h1>Welcome to the Game!</h1>
      <p>Choose: Rock, Paper, or Scissors</p>
      <OptionsContainer>
        {choices.map(choice => (
          <OptionButton key={choice} onClick={() => playGame(choice)}>
            {choice}
          </OptionButton>
        ))}
      </OptionsContainer>
      <ResultText>
        {userChoice &&
          `You chose ${userChoice}, the computer chose ${computerChoice}. ${result}`}
      </ResultText>
    </GameContainer>
  );
};
