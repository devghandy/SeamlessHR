let data
describe('Login Scenarios', () => {
before(()=>{
    cy.fixture("selectors").then((sel)=>{
      data = sel
    })
    })
  it('Positive Login Scenario', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get(data.usernameField).type('standard_user')
    cy.get(data.passwordField).type('secret_sauce')
    cy.get(data.loginButton).click()
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
  })

  it('Negative Login Scenario - Invalid Password', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get(data.usernameField).type('standard_user')
    cy.get(data.passwordField).type('wrong_password')
    cy.get(data.loginButton).click()
    cy.get(data.errorMessage).should('be.visible')
      .and('contain', 'Username and password do not match any user in this service')
  })

  it('Negative Login Scenario - Empty Credentials', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get(data.loginButton).click()
    cy.get(data.errorMessage).should('be.visible')
      .and('contain', 'Username is required')
  })

  it('Negative Login Scenario - Locked Out User', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get(data.usernameField).type('locked_out_user')
    cy.get(data.passwordField).type('secret_sauce')
    cy.get(data.loginButton).click()
    cy.get(data.errorMessage).should('be.visible')
      .and('contain', 'Sorry, this user has been locked out.')
  })
})