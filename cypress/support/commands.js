
// ***********************************************
// Visit https://on.cypress.io/custom-commands to
// learn more about custom commands.
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', ()=>{
      cy.visit('/')
       cy.get('[data-test=username]').fill('standard_user')
        cy.get('[data-test=password]').fill('secret_sauce')
        cy.get('[data-test=login-button]').click()
    })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



 beforeEach(() =>{
        cy.on('uncaught:exception', ()=>{
          return false
        })
        cy.visit('/')
        cy.login()
      })