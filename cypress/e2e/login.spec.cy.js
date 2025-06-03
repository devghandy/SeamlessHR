
let data

describe('Login Scenarios', () => {
before(()=>{
    cy.fixture("selectors").then((sel)=>{
      data = sel
    })
    })

  it('Positive Login Scenario', () => {
    cy.visit('/')
    cy.get(data.usernameField).should('be.visible').fill('standard_user')
    cy.get(data.passwordField).fill('secret_sauce')
    cy.get(data.loginbuttonField).fill()
    cy.url().should('include', '/inventory.html')
  })

  it('Negative Login Scenario - Invalid Password', () => {
    cy.visit('/')
    cy.get('[placeholder="Username"]').type('standard_user')
    cy.get('[data-test=password]').type('wrong_password')
    cy.get('[data-test=login-button]').click()
    cy.get('[data-test=error]').should('contain', 'Username and password do not match')
  })
})