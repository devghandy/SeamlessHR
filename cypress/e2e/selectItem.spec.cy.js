describe('Select Items', () => {
  it('Add items to cart and validate badge', () => {
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
    cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click()
    cy.get('.shopping_cart_badge').should('contain', '2')
  })
})
