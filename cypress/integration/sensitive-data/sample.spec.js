/// <reference types="Cypress" />

context('SENSITIVE DATA BAD PRATICE :: SAMPLE 1', () => {

  describe('Sample 1 :: ORIGINAL :: BAD', () => {
    beforeEach(() => {
      cy.visit('https://notes-serverless-app.com/login')
    })
  
    it('fills the form with sensitive data', () => {
      cy.get('#email').type('joe@example.com')
      cy.get('#password').type('s3Cr€7-p@s5w0rd')
    })
  })

  describe('Sample 1 :: REFACTORED :: GOOD', () => {
    beforeEach(() => {
      cy.visit('https://notes-serverless-app.com/login')
    })
  
    it('fills the form with sensitive data', () => {
      cy.get('#email').type(Cypress.env('user_email'))
      cy.get('#password').type(Cypress.env('user_password'), {log: false})
    })
  })

})




