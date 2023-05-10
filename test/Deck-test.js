const chai = require('chai');
const expect = chai.expect;
const { createCard } = require('../src/card')
const { createDeck, countCards } = require('../src/deck')

describe('createDeck', function() {
    let card1, card2, card3;
    let deck;

    beforeEach(() => {
        card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald'); 
        deck = createDeck([card1, card2, card3])
    })

    it('should be a function', function() {
        expect(createDeck).to.be.a('function')
    });

    it('should create an array of card objects', function() {
        expect(deck).to.deep.equal([card1, card2, card3])
    });
})

describe('countCards', function() {
    let card1, card2, card3;
    let deck;
    let deckCount;

    beforeEach(() => {
        card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald'); 
        deck = createDeck([card1, card2, card3])
        deckCount = countCards(deck)
    })

    it('should be a function', function() {
        expect(countCards).to.be.a('function')
    });

    it('should count the number of cards in a deck', function() {
        expect(deckCount).to.be.equal(3)
    });
})