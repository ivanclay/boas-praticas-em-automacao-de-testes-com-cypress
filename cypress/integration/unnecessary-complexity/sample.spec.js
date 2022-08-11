/// <reference types="Cypress" />

context('UNNECESSARY COMPLEXITY BAD PRATICE :: SAMPLE 1', () => {

  describe('SAMPLE 1 :: ORIGINAL :: BAD', () => {
    beforeEach(() => {
      cy.visit('https://bit.ly/2XSuwCW')
  
      if (Math.random() > 0.5) {
        cy.get('#agree')
          .click()
      }
    })
  
    Cypress._.times(5, () => {
      it('checks the checkbox only if not checked', () => {
        cy.get('body').then($body => {
          if ($body.find('#agree:checked').length) {
            cy.log('check box was checked')
            return
          }
          cy.log('check box was unchecked')
          $body.find('#agree').click()
          return
        })
  
        cy.get('#agree')
          .should('be.checked')
      })
    })
  })

  describe('SAMPLE 1 :: REFACTORED :: GOOD', () => {
    beforeEach(() => {
      cy.visit('https://bit.ly/2XSuwCW')
  
      if (Math.random() > 0.5) {
        cy.get('#agree')
          .click()
      }
    })
  
    Cypress._.times(5, () => {
      it('checks the checkbox only if not checked', () => {
        cy.get('#agree')
          .check()
          .should('be.checked')
      })
    })
  })

})



