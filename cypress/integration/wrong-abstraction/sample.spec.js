context('WRONG ABSTRACTION BAD PRATICE :: SAMPLE 1', () => {

  describe('Sample 1 :: ORIGINAL :: BAD', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        '**/search**'
      ).as('getStories')
  
      cy.visit('https://hackernews-seven.vercel.app')
      cy.wait('@getStories')
    })
  
    it('uses custom command for assertion just for the sake of reusability', () => {
      cy.search('cypress')
      cy.wait('@getStories')
  
      cy.assertResults()
    })
  
    it('uses custom command for assertion just for the sake of reusability', () => {
      cy.search('selenium')
      cy.wait('@getStories')
  
      cy.assertResults()
    })
  
    it('uses custom command for assertion just for the sake of reusability', () => {
      cy.search('playwright')
      cy.wait('@getStories')
  
      cy.assertResults()
    })
  })

  describe('Sample 1 :: REFACTORED :: GOOD', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        '**/search**'
      ).as('getStories')
  
      cy.visit('https://hackernews-seven.vercel.app')
      cy.wait('@getStories')
    })
  
    it('uses custom command for assertion just for the sake of reusability', () => {
      cy.search('cypress')
      cy.wait('@getStories')
  
      cy.get('.table-row').then(rows => {
        expect(rows.length).to.be.at.least(1)
      })
    })
  
    it('uses custom command for assertion just for the sake of reusability', () => {
      cy.search('selenium')
      cy.wait('@getStories')
  
      cy.get('.table-row').then(rows => {
        expect(rows.length).to.be.at.least(1)
      })
    })
  
    it('uses custom command for assertion just for the sake of reusability', () => {
      cy.search('playwright')
      cy.wait('@getStories')
  
      cy.get('.table-row').then(rows => {
        expect(rows.length).to.be.at.least(1)
      })
    })
  })

  describe('Sample 1 :: REFACTORED :: BETTER', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        '**/search**'
      ).as('getStories')
  
      cy.visit('https://hackernews-seven.vercel.app')
      cy.wait('@getStories')
    })
  
    it('uses custom command for assertion just for the sake of reusability', () => {
      cy.search('cypress')
      cy.wait('@getStories')
  
      cy.get('.table-row').its('length').should('be.at.least', 1)
      
    })
  
    it('uses custom command for assertion just for the sake of reusability', () => {
      cy.search('selenium')
      cy.wait('@getStories')
  
      cy.get('.table-row').its('length').should('be.at.least', 1)
    })
  
    it('uses custom command for assertion just for the sake of reusability', () => {
      cy.search('playwright')
      cy.wait('@getStories')
  
      cy.get('.table-row').its('length').should('be.at.least', 1)
    })
  })

})

