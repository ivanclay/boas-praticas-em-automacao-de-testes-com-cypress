/// <reference types="Cypress" />


describe('Browser testing bad practice', () => {
  beforeEach(() => {
    cy.visit('https://hackernews-seven.vercel.app')
  })

  it('tests a browser feature instead of an app feature', () => {
    cy.get('.table-row a')
      .first()
      .click()

    // Assert that a new tab was opened in the correct URL
  })
})

describe('Browser testing GOOD practice', () => {
  beforeEach(() => {
    cy.visit('https://hackernews-seven.vercel.app')
  })

  it('tests a app feature', () => {
    cy.get('.table-row a')
      .first()
      .should('have.attr', 'target', '_blank')

    // Assert that a new tab was opened in the correct URL
  })
})

describe('Browser testing BETTER practice', () => {
  beforeEach(() => {

    cy.intercept(
      'GET',
      '**/search**',
      { fixture: 'stories' }
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  it('tests a app feature', () => {
    cy.get('.table-row a')
      .first()
      .should('have.attr', 'href', 'https://example.com/lc-jg')
      .and('have.attr', 'target', '_blank')

    // Assert that a new tab was opened in the correct URL
  })
})
