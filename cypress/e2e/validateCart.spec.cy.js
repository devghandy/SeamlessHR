describe('Validate Cart', () => {
  it('Ensure selected items are in cart', () => {
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
    cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click()
    cy.get('.shopping_cart_link').click()

    cy.get('.cart_item').should('have.length', 2)
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack')
    cy.get('.inventory_item_name').should('contain', 'Sauce Labs Bike Light')
  })
})