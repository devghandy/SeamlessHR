let data
describe('Checkout Process', () => {
     before(()=>{
    cy.fixture("selectors").then((sel)=>{
      data = sel
    })
    })
  it('Proceed through checkout and confirm order', () => {
    cy.get(data.addToCartBackpack).click()
    cy.get(data.cartLink).click()
    cy.get('[data-test=checkout]').click()

    cy.get(data.firstName).type('Ganiyat')
    cy.get(data.lastName).type('Adigboluja')
    cy.get(data.postalCode).type('100111')
    cy.get(data.continueButton).click()
    cy.url().should('include', '/checkout-step-two.html')
    cy.get(data.finishButton).click()

    cy.url().should('include', '/checkout-complete.html')
    cy.get('.checkout_complete_container').should('be.visible')
    cy.get('.complete-header').should('contain', 'Thank you for your order')
  })

  it('Negative Checkout - Missing Postal Code', () => {
    cy.get(data.addToCartBackpack).click()
    cy.get(data.cartLink).click()
    cy.get('[data-test=checkout]').click()

    cy.get(data.firstName).type('Ganiyat')
    cy.get(data.lastName).type('Adigboluja')
    cy.get(data.continueButton).click()

    cy.get(data.errorMessage).should('be.visible')
      .and('contain', 'Error: Postal Code is required')
  })
})
