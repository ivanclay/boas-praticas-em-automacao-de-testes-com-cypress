/// <reference types="Cypress" />

context('CODE DUPLICATION BAD PRATICE :: SAMPLE 3', () => {

  describe('Sample 3 :: ORIGNAL :: BAD', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        '**/search**'
      ).as('getStories')
  
      cy.visit('https://hackernews-seven.vercel.app')
      cy.wait('@getStories')
    })
  
    it('searches for the same term 3 times', () => {
      cy.search('cypress.io')
  
      cy.get('.table-row').then(rows => {
        expect(rows.length).to.be.at.least(1)
      })
  
      cy.search('cypress.io')
  
      cy.get('.table-row').then(rows => {
        expect(rows.length).to.be.at.least(1)
      })
  
      cy.search('cypress.io')
  
      cy.get('.table-row').then(rows => {
        expect(rows.length).to.be.at.least(1)
      })
    })
  })

  describe('Sample 3 :: REFACTORED :: GOOD', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        '**/search**'
      ).as('getStories')
  
      cy.visit('https://hackernews-seven.vercel.app')
      cy.wait('@getStories')
    })
  
    it('searches for the same term 3 times', () => {
      
      Cypress._.times(3, () => {
        cy.search('cypress.io')
    
        cy.get('.table-row').then(rows => {
          expect(rows.length).to.be.at.least(1)
        })

      })
  
    })
    
  })

})


