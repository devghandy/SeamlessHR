describe('Logout Functionality', () => {
  it('Logs user out successfully', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').should('be.visible').click()

    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test=login-button]').should('be.visible')
  })
})