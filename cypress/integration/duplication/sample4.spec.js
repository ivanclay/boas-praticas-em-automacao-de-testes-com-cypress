/// <reference types="Cypress" />

context('CODE DUPLICATION BAD PRATICE :: SAMPLE 4', () => {
  describe('Sample 4 :: ORIGINAL :: BAD', () => {
    beforeEach(() => {
      cy.visit('https://bit.ly/2XSuwCW')
    })
   
    it('checks all checkboxes from a specific fieldset', () => {
      cy.get('#friend').check()
      cy.get('#publication').check()
      cy.get('#social-media').check()
    })
  })

  describe('Sample 4 :: REFACTED :: GOOD', () => {
    beforeEach(() => {
      cy.visit('https://bit.ly/2XSuwCW')
    })
   
    it('checks all checkboxes from a specific fieldset', () => {
      cy.get('fieldset div input[type="checkbox').check()
    })
  })


})
