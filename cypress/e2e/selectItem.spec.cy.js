let data
describe('Select Items', () => {

    before(()=>{
    cy.fixture("selectors").then((sel)=>{
      data = sel
    })
    })
  it('Add items to cart and validate badge', () => {
    cy.get(data.addToCartBackpack).click()
    cy.get(data.addToCartBikeLight).click()
    cy.get(data.checkoutButton).should('contain', '2')
  })
})
