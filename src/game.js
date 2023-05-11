const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const { createCard } = require('../src/card')
const { createDeck, countCards } = require('../src/deck')
const { createRound } = require('../src/round')

const printMessage = (deck) => {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(deck)} cards.
  -----------------------------------------------------------------------`);
}

const printQuestion = (round) => {
  util.main(round);
}

const start = () => {
  const deckData = prototypeQuestions.map((eachCard) => {
    const { id, question, answers, correctAnswer } = eachCard
    return createCard(id, question, answers, correctAnswer);
  })
  deck = createDeck(deckData)
  printMessage(deck)

  round = createRound(deck)
  printQuestion(round)
}

module.exports = { printMessage, printQuestion, start };