const chai = require('chai');
const expect = chai.expect;
const { createCard } = require('../src/card')
const { evaluateGuess } = require('../src/turns');

describe('evaluateGuess', function() {
    let guess1, guess2;
    let card;

    beforeEach(() => {
        guess1 = 'sea otter';
        guess2 = 'capybara'
        card = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    })

  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function')
  })
  
  it('should be able to evaluate as correct if the guess is correct', function(){
    evaluation = evaluateGuess(guess1, card)
    expect(evaluation).to.equal('correct!')
  })
  
  it('should be able to evaluate as incorrect if the guess is incorrect', function(){
    evaluation = evaluateGuess(guess2, card)
    expect(evaluation).to.equal('incorrect!')
  })
})