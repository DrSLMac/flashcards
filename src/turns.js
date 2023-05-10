const evaluateGuess = (guess, card) => {
    let message;
    guess === card.correctAnswer ? message = "correct!" : message = "incorrect!";
    return message;
  }
  
  module.exports = { evaluateGuess }

  