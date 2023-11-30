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
    cy.get('#deadline').type('2023-12-31');
    cy.get('#deadline').should('have.value', '2023-12-31');
    cy.get('.css-1p0h0sj-control > .css-yxo4uo > .css-19bb58m').type('skills{enter}')
    cy.get('.css-yxo4uo > .css-19bb58m').type('part-time{enter}')
    cy.get('.text-whiteText').click()
    


  
  })
})