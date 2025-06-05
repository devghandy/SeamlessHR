let data
describe('Logout Functionality', () => {
     before(()=>{
    cy.fixture("selectors").then((sel)=>{
      data = sel
    })
    })
  it('Logs user out successfully', () => {
    cy.get(data.burgerMenu).click()
    cy.get(data.logoutLink).should('be.visible').click()

    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.get(data.loginButton).should('be.visible')
  })
})