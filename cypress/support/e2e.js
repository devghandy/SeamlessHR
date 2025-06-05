
// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-fill-command'
let data         
 beforeEach(() =>{
        cy.on('uncaught:exception', ()=>{
          return false
        })
        cy.fixture("selectors").then((sel)=>{
      data = sel
    })
        cy.visit('/')
        cy.login()
      })