const { evaluateGuess } = require("./turns");

const createRound = (deck) => {
    var round = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: [],
        correctGuesses: []
    }
    return round;
}

const takeTurn = (guess, round, deck) => {
    const currentGuess = evaluateGuess(guess, round.currentCard)
    if (currentGuess === 'correct!') {
        round.correctGuesses.push(round.currentCard.id)
    } else {
        round.incorrectGuesses.push(round.currentCard.id)
    }
    round.turns += 1;
    round.currentCard = deck[round.turns]
    return currentGuess
}

const calculatePercentCorrect = (round) => {
    let percentCorrect = ((round.correctGuesses.length / round.deck.length) * 100).toFixed(1)
    return `You got ${percentCorrect}% correct!`
}

const endRound = (round) => {

}

module.exports = { createRound, takeTurn, calculatePercentCorrect, endRound }