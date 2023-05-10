const chai = require('chai');
const expect = chai.expect;
const { createCard } = require('../src/card')
const { createDeck, countCards } = require('../src/deck')
const { 
        createRound, 
        takeTurn, 
        calculatePercentCorrect, 
        endRound 
    } = require('../src/round')

describe('createDeck', function() {
    let card1, card2, card3;
    let deck;
    let round;

    beforeEach(() => {
        card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald'); 

        deck = createDeck([card1, card2, card3])
        deckCount = countCards(deck);
        round = createRound(deck);
    })

    it('should be a function', function() {
        expect(createRound).to.be.a('function')
    });

    it('should hold the round object', function() {
        expect(round).to.be.an('object')
    });

    it('should return a deck for each round', function() {
        expect(round.deck).to.deep.equal([card1, card2, card3])
        expect(round.deck).to.equal(deck)
    });

    it('should start with the first card of the deck', function() {
        expect(round.currentCard).to.equal(card1)
        expect(round.currentCard.correctAnswer).to.equal('sea otter')
    });

    it('should start with zero turns', function() {
        expect(round.turns).to.equal(0)
    });

    it('should start with no incorrect guesses', function() {
        expect(round.incorrectGuesses).to.be.an('array')
        expect(round.incorrectGuesses.length).to.equal(0)
    });
})

describe('takeTurn', function() {
    let card1, card2, card3;
    let deck;

    beforeEach(() => {
        card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald'); 

        deck = createDeck([card1, card2, card3])
        round = createRound(deck);
    })
    
    it('should be a function', function() {
        expect(takeTurn).to.be.a('function')
    });
    
    it('should keep track of turns', function() {
        const guess1 = takeTurn('sea otter', round, deck)
        const guess2 = takeTurn('capybara', round, deck)
        expect(guess1).to.equal('correct!')
        expect(guess2).to.equal('incorrect!')
    });

    it('should update the turn count', function() {
        takeTurn('sea otter', round, deck)
        expect(round.turns).to.equal(1)

        takeTurn('capybara', round, deck)
        expect(round.turns).to.equal(2)       
    });

    it('should update currentCard to be the next card in the deck', function() {
        takeTurn('sea otter', round, deck)
        expect(round.currentCard.id).to.equal(14)

        let guess3 = takeTurn('spleen', round, deck)
        expect(guess3).to.equal('incorrect!')
        expect(round.currentCard.id).to.equal(12)
    })

    it('should evaluate guess and sort to correct or incorrect array', function() {
        takeTurn('sea otter', round, deck)
        expect(round.correctGuesses).to.deep.equal([1])
        expect(round.incorrectGuesses).to.deep.equal([])

        takeTurn('spleen', round, deck)
        expect(round.correctGuesses).to.deep.equal([1])
        expect(round.incorrectGuesses).to.deep.equal([14])
    })
});

describe('calculatePercentCorrect', function() {
    let card1, card2, card3;
    let deck;

    beforeEach(() => {
        card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald'); 

        deck = createDeck([card1, card2, card3])
        round = createRound(deck);
    })
    
    it('should be a function', function() {
        expect(calculatePercentCorrect).to.be.a('function')
    });

    it('should calculate and return the percentage of correct guesses', function() {
        takeTurn('sea otter', round, deck);
        takeTurn('spleen', round, deck);
        takeTurn('Fitzgerald', round, deck)

        const percentCorrect = calculatePercentCorrect(round);
        expect(percentCorrect).to.equal('66.7')
    })

});

describe('endRound', function() {
    let card1, card2, card3;
    let deck;

    beforeEach(() => {
        card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald'); 

        deck = createDeck([card1, card2, card3])
        round = createRound(deck);
    })
    
    it('should be a function', function() {
        expect(endRound).to.be.a('function')
    });

    it('should print a message to the console when the round is finished', function() {
        takeTurn('sea otter', round, deck);
        takeTurn('spleen', round, deck);
        takeTurn('Fitzgerald', round, deck)

        const numRight = calculatePercentCorrect(round);
        expect(numRight).to.equal('66.7')
        
        const percentCorrect = endRound(round);
        expect(percentCorrect).to.equal("** Round over! ** You answered 66.7% of the questions correctly!")
    })
});