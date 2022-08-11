/// <reference types="Cypress" />

context('SLOW TESTS BAD PRATICE :: SAMPLE 2', () => {
  
  describe('Sample 2 :: ORIGINAL :: BAD', () => {
    it('does not enable signup on different passwords', () => {
      cy.visit('https://notes-serverless-app.com')
  
      cy.contains('.btn', 'Signup')
        .click()
  
      cy.get('#email').type('joe@example.com')
      cy.get('#password').type('foobarbaz')
      cy.get('#confirmPassword').type('foobahbaz')
  
      cy.contains('button', 'Signup')
        .should('be.disabled')
    })
  })

  describe('Sample 2 :: REFACTORED :: GOOD', () => {
    it('does not enable signup on different passwords', () => {
      cy.visit('https://notes-serverless-app.com/signup')
  
      cy.get('#email').type('joe@example.com')
      cy.get('#password').type('foobarbaz')
      cy.get('#confirmPassword').type('foobahbaz')
  
      cy.contains('button', 'Signup')
        .should('be.disabled')
    })
  })

})

