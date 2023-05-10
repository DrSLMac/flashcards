const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turns');

describe('evaluateGuess', function() {
    let guess;
    let correctAnswer1;
    let correctAnswer2;

    beforeEach(() => {
        guess = 'object';
        correctAnswer1 = 'object';
        correctAnswer2 = 'array'
    })

  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function')
  })
  
  it('should be able to evaluate as correct if the guess is correct', function(){
    evaluation = evaluateGuess(guess, correctAnswer1)
    expect(evaluation).to.equal('correct!')
  })
  
  it('should be able to evaluate as incorrect if the guess is incorrect', function(){
    evaluation = evaluateGuess(guess, correctAnswer2)
    expect(evaluation).to.equal('incorrect!')
  })
})