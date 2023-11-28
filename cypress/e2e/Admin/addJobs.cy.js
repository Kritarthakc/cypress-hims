import login from './login.cy';
describe('Hospital Tests', () => {
  before(() => {
    // This code will run once before all the tests in this describe block
    login();
  });
  it('should perform the action after login',()=>{
    cy.get(':nth-child(6) > .flex').click()
    cy.get('.justify-between > .rounded-lg > span').click()
    cy.get('#title').type('asd')
    cy.get('#location').type('adds')
    cy.get('.ck-content')
    .clear()
    .type('Hello CKEditor');

  cy.get('.ck-content')
    .invoke('text')
    .should('eq','Hello CKEditor')
  })
})