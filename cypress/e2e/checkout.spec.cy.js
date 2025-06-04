describe('Checkout Process', () => {
  it('Proceed through checkout and confirm order', () => {
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test=checkout]').click()

    cy.get('[data-test=firstName]').type('Ganiyat')
    cy.get('[data-test=lastName]').type('Adigboluja')
    cy.get('[data-test=postalCode]').type('100111')
    cy.get('[data-test=continue]').click()
    cy.url().should('include', '/checkout-step-two.html')
    cy.get('[data-test=finish]').click()

    cy.url().should('include', '/checkout-complete.html')
    cy.get('.checkout_complete_container').should('be.visible')
    cy.get('.complete-header').should('contain', 'Thank you for your order')
  })

  it('Negative Checkout - Missing Postal Code', () => {
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test=checkout]').click()

    cy.get('[data-test=firstName]').type('Ganiyat')
    cy.get('[data-test=lastName]').type('Adigboluja')
    cy.get('[data-test=continue]').click()

    cy.get('[data-test=error]').should('be.visible')
      .and('contain', 'Error: Postal Code is required')
  })
})
