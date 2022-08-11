/// <reference types="Cypress" />

context('HARDCODED ASSERTION TEST BAD PRATICE :: SAMPLE 1', () => {
  
  describe('Sample 1 :: ORIGINAL :: BAD', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        '**/search**',
        { fixture: 'stories' }
      ).as('getStories')
  
      cy.visit('https://hackernews-seven.vercel.app')
      cy.wait('@getStories')
    })
  
    it('searches', () => {
      cy.search('cypress.io')
      cy.wait('@getStories')
  
      cy.get('.table-row')
        .as('tableRows')
        .should('have.length', 2)
      cy.get('@tableRows')
        .eq(0)
        .should('contain', 'Agile Testing')
      cy.get('@tableRows')
        .eq(1)
        .should('contain', 'Clean Code')
    })
  })


  describe('Sample 1 :: REFACTORED :: GOOD', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        '**/search**',
        { fixture: 'stories' }
      ).as('getStories')
  
      cy.visit('https://hackernews-seven.vercel.app')
      cy.wait('@getStories')
    })
  
    it('searches', () => {
      cy.search('cypress.io')
      cy.wait('@getStories')


      cy.fixture('stories').then(stories => {
        cy.get('.table-row')
          .as('tableRows')
          .should('have.length', stories.hits.length)
        stories.hits.forEach((hit, index) => {
          cy.get('@tableRows')
            .eq(index)
            .should('contain', hit.title)
        });  
      })
    })
  })


  describe('Sample 1 :: REFACTORED JAVASCRIPT DESTRUCTURING :: BETTER', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        '**/search**',
        { fixture: 'stories' }
      ).as('getStories')
  
      cy.visit('https://hackernews-seven.vercel.app')
      cy.wait('@getStories')
    })
  
    it('searches', () => {

      const { hits } = require('../../fixtures/stories')

      cy.search('cypress.io')
      cy.wait('@getStories')

      cy.get('.table-row')
        .as('tableRows')
        .should('have.length', hits.length)
      hits.forEach((hit, index) => {
        cy.get('@tableRows')
          .eq(index)
          .should('contain', hit.title)
      });  

    })
  })


})



