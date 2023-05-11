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

const takeTurn = (guess, round) => {

    // console.log("round: ", round.currentCard)
    round.turns += 1;
    let currentGuess = evaluateGuess(guess, round.currentCard)
    if (currentGuess === 'correct!') {
        round.correctGuesses.push(round.currentCard.id)
    } else {
        round.incorrectGuesses.push(round.currentCard.id)
    }
    round.currentCard = round.deck[round.turns]
    return currentGuess
}

const calculatePercentCorrect = (round) => {
    let percentCorrect = ((round.correctGuesses.length / round.deck.length) * 100).toFixed(1)
    return percentCorrect
}

const endRound = (round) => {
    const amountCorrect = calculatePercentCorrect(round)
    if (round.turns === round.deck.length) {
        console.log(`** Round over! ** You answered ${amountCorrect}% of the questions correctly!`)
        return `** Round over! ** You answered ${amountCorrect}% of the questions correctly!`
    }
}

module.exports = { createRound, takeTurn, calculatePercentCorrect, endRound }