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
    const evaluation = () => {
        if(!round.incorrectGuesses.length) {
            return "Amazing job! You got all of the questions correct!"
        } else {
            // "Better luck next time! Please go back and review the following questions: "
            return `Better luck next time! Please go back and review the following questions: ${round.incorrectGuesses.map(number => ` #${number}`)}`
        }
    }
    if (round.turns === round.deck.length) {
        console.log(`** Round over! ** You answered ${amountCorrect}% of the questions correctly! ${evaluation()}`)
        return `** Round over! ** You answered ${amountCorrect}% of the questions correctly! ${evaluation()}`
    };
}

module.exports = { createRound, takeTurn, calculatePercentCorrect, endRound }