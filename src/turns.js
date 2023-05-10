// const evaluateGuess = (guess, card) => {
//     let message;
//     guess === card.correctAnswer ? message = "correct!" : message = "incorrect!";
//     return message;
//   }

  const evaluateGuess = (guess, card) => {
    if (guess === card.correctAnswer) {
        return 'correct!'
    } else {
        return 'incorrect!'
    }
}
  
  module.exports = { evaluateGuess }

  