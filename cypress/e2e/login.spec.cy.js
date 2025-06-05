
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
    cy.get(data.loginbuttonField).click()
  })

  it('Negative Login Scenario - Invalid Password', () => {
    cy.visit('/')
    cy.get(data.usernameField).type('standard_user')
    cy.get(data.passwordField).type('wrong_password')
    cy.get(data.loginbuttonField).click()
    cy.get(data.errorMessage).should('contain', 'Epic sadface: Password is required')
  })
})