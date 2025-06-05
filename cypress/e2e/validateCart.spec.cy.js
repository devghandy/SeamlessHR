let data
describe('Validate Cart', () => {
      before(()=>{
    cy.fixture("selectors").then((sel)=>{
      data = sel
    })
    })
  it('Ensure selected items are in cart', () => {
    cy.get(data.addToCartBackpack).click()
    cy.get(data.addToCartBikeLight).click()
    cy.get(data.checkoutButton).click()

    cy.get(data.cartItems).should('have.length', 2)
    cy.get(data.itemName).should('contain', 'Sauce Labs Backpack')
    cy.get(data.itemName).should('contain', 'Sauce Labs Bike Light')
  })
})