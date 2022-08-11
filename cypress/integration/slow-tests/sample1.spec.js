/// <reference types="Cypress" />

context('SLOW TESTS BAD PRATICE :: SAMPLE 1', () => {

  describe('Sample 1 :: ORIGINAL :: BAD', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        '**/search**'
      ).as('getStories')
  
      cy.visit('https://hackernews-seven.vercel.app')
      cy.wait('@getStories')
  
      cy.get('input[type="text"]')
        .should('be.visible')
        .and('have.value', 'redux')
        .as('searchField')
        .clear()
    })
  
    it('searches by typing and hitting enter', () => {
      cy.get('@searchField')
        .type('frontend testing{enter}')
  
      cy.wait('@getStories')
  
      cy.get('.table-row')
        .should('have.length', 100)
    })
  })

  describe('Sample 1 :: REFACTORED :: GOOD', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        '**/search**',
        { fixture: 'stories'}
      ).as('getStories')
  
      cy.visit('https://hackernews-seven.vercel.app')
      cy.wait('@getStories')
  
      cy.get('input[type="text"]')
        .should('be.visible')
        .and('have.value', 'redux')
        .as('searchField')
        .clear()
    })
  
    it('searches by typing and hitting enter', () => {
      const { hits } = require('../../fixtures/stories')
      cy.get('@searchField')
        .type('frontend testing{enter}')
  
      cy.wait('@getStories')
  
      cy.get('.table-row')
        .should('have.length', hits.length)
    })
  })

})


