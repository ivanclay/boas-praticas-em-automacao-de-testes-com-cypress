/// <reference types="Cypress" />

context('CODE DUPLICATION BAD PRATICE :: SAMPLE 1', () => {
  
  describe('Sample 1 :: ORIGINAL :: BAD', () => {
    it('searches by typing and hitting enter', () => {
      cy.intercept(
        'GET',
        '**/search**'
      ).as('getStories')
  
      cy.visit('https://hackernews-seven.vercel.app')
      cy.wait('@getStories')
  
      cy.get('input[type="text"]')
        .should('be.visible')
        .and('have.value', 'redux')
        .clear()
        .type('frontend testing{enter}')
  
      cy.wait('@getStories')
  
      cy.get('.table-row')
        .should('have.length', 100)
    })
  
    it('searches by typing and pressing the search button', () => {
      cy.intercept(
        'GET',
        '**/search**'
      ).as('getStories')
  
      cy.visit('https://hackernews-seven.vercel.app')
      cy.wait('@getStories')
  
      cy.get('input[type="text"]')
        .should('be.visible')
        .and('have.value', 'redux')
        .clear()
        .type('frontend testing')
  
      cy.contains('button', 'Search')
        .should('be.visible')
        .click()
  
      cy.wait('@getStories')
  
      cy.get('.table-row')
        .should('have.length', 100)
    })
  })

  describe('Sample 1 :: REFATORED :: GOOD', () => {

    beforeEach(() => {
      cy.intercept(
        'GET',
        '**/search**'
      ).as('getStories')
  
      cy.visit('https://hackernews-seven.vercel.app')
      cy.wait('@getStories')
  
      cy.get('input[type="text"]')
        .as('searchField')
        .should('be.visible')
        .and('have.value', 'redux')
        .clear()
    })

    it('searches by typing and hitting enter', () => {
        cy.get('@searchField')
        .type('frontend testing{enter}')
  
      cy.wait('@getStories')
  
      cy.get('.table-row')
        .should('have.length', 100)
    })
  
    it('searches by typing and pressing the search button', () => {
      cy.get('@searchField')
        .type('frontend testing')
  
      cy.contains('button', 'Search')
        .should('be.visible')
        .click()
  
      cy.wait('@getStories')
  
      cy.get('.table-row')
        .should('have.length', 100)
    })
  })
  
}) 






