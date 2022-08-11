/// <reference types="Cypress" />

context('CODE DUPLICATION BAD PRATICE :: SAMPLE 2', () => {
  describe('Sample 2 :: ORIGINAL :: BAD', () => {
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
  
    it('searches for "reactjs"', () => {
      cy.get('@searchField')
        .type('reactjs{enter}')
  
      cy.wait('@getStories')
  
      cy.get('.table-row')
        .should('have.length', 100)
    })
  
    it('searches for "vuejs"', () => {
      cy.get('@searchField')
        .type('vuejs{enter}')
  
      cy.wait('@getStories')
  
      cy.get('.table-row')
        .should('have.length', 100)
    })
  })

  describe('Sample 2 :: REFATORED :: GOOD', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        '**/search**'
      ).as('getStories')
  
      cy.visit('https://hackernews-seven.vercel.app')
      cy.wait('@getStories')
  
    })
  
    it('searches for "reactjs"', () => {
      cy.search('reactjs')
  
      cy.wait('@getStories')
  
      cy.get('.table-row')
        .should('have.length', 100)
    })
  
    it('searches for "vuejs"', () => {
      cy.search('vuejs')
  
      cy.wait('@getStories')
  
      cy.get('.table-row')
        .should('have.length', 100)
    })
  })

  describe('Sample 2 :: REFATORED :: BETTER', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        '**/search**'
      ).as('getStories')
  
      cy.visit('https://hackernews-seven.vercel.app')
      cy.wait('@getStories')
  
    })
  
    const terms = ['reacjs', 'vuejs']

    terms.forEach(term => {
      
      it(`searches for "${term}"`, () => {
        cy.search(term)
    
        cy.wait('@getStories')
    
        cy.get('.table-row')
          .should('have.length', 100)
      })

    })

  })


})


