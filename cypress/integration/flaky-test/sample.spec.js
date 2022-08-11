/// <reference types="Cypress" />

context('FLAKY TEST BAD PRATICE :: SAMPLE 1', () => {
 
  describe('Sample 1 :: ORIGINAL :: BAD', () => {
    beforeEach(() => {
      cy.visit('https://wlsf82-hacker-stories.web.app')
  
      cy.contains('p','Loading ...')
        .should('be.visible')
      cy.contains('p','Loading ...')
        .should('not.exist')
    })
  
    Cypress._.times(10, () => {
      it('shows a max of 5 buttons for the last searched terms', () => {
        const faker = require('faker')
  
        Cypress._.times(6, () => {
          cy.search(faker.random.word())
        })
  
        cy.contains('p','Loading ...')
          .should('be.visible')
        cy.contains('p','Loading ...')
          .should('not.exist')
  
        cy.get('.last-searches button')
          .should('have.length', 5)
      })
    })
  })

  describe('Sample 1 :: REFACTORED :: GOOD', () => {
    
    beforeEach(() => {
        cy.intercept(
        'GET',
        '**/search**'
      ).as('getStories')
  
      cy.visit('https://wlsf82-hacker-stories.web.app')
      cy.wait('@getStories')
  
    })
  
    Cypress._.times(10, () => {
      it('shows a max of 5 buttons for the last searched terms', () => {
        const faker = require('faker')
  
        Cypress._.times(6, () => {
          cy.search(faker.random.word())
        })
  
        cy.wait('@getStories')
  
        cy.get('.last-searches button')
          .should('have.length', 5)
      })
    })
  })

  describe('Sample 1 :: REFACTORED NO WAIT:: GOOD', () => {
    
    beforeEach(() => {
        cy.intercept(
        'GET',
        '**/search**'
      ).as('getStories')
  
      cy.visit('https://wlsf82-hacker-stories.web.app')
  
    })
  
    Cypress._.times(10, () => {
      it('shows a max of 5 buttons for the last searched terms', () => {
        const faker = require('faker')
  
        Cypress._.times(6, () => {
          cy.search(faker.random.word())
        })
  
        cy.get('.last-searches button')
          .should('have.length', 5)
      })
    })
  })

  describe('Sample 1 :: REFACTORED :: BETTER', () => {
    
    beforeEach(() => {
        cy.intercept(
        'GET',
        '**/search**',
        { fixture: 'stories'}
      ).as('getStories')
  
      cy.visit('https://wlsf82-hacker-stories.web.app')
      cy.wait('@getStories')
  
    })
  
    Cypress._.times(10, () => {
      it('shows a max of 5 buttons for the last searched terms', () => {
        const faker = require('faker')
  
        Cypress._.times(6, () => {
          cy.search(faker.random.word())
        })
  
        cy.wait('@getStories')
  
        cy.get('.last-searches button')
          .should('have.length', 5)
      })
    })
  })


})





