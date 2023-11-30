import login from './login.cy';
describe('Hospital Tests', () => {
  before(() => {
    // This code will run once before all the tests in this describe block
    login();
  });
  it('should perform actions after login', () => {
  cy.get('.font-medium > :nth-child(2) > .flex').click()
  cy.contains('Hospitals').should('be.visible')
  cy.get('.gap-8 > .py-2 > span').click()
  cy.contains('Create Hospital').should('be.visible');
  cy.contains('Hospital Information').should('be.visible');
 

  //Forms
  cy.fixture('hospital.json').then((data)=>{
    cy.contains('Name').should('be.visible');
    cy.get('#title').type(data.hospitalName)
    cy.get('#address').type(data.address)
    
  
    // cy.get('#domain').type(data.subDomain)
    // cy.get('#emergency_contact').type(data.emergencyContact)

    // //Admin details
    // cy.get('#first_name').type(data.firstName)
    // // cy.get('#middle_name').type(data.middleName)
    // cy.get('#last_name').type(data.lastName)
    // cy.get('#email').type(data.email)
    // cy.get('#phone_number').type(data.phoneNumber)

    // //Address information
    // cy.get('.css-q9mf9z-control > .css-yxo4uo').type(`${data.Province} {enter}`);
    // cy.get(':nth-child(2) > .peer > .css-q9mf9z-control > .css-yxo4uo > .css-19bb58m').type(`${data.District} {enter}`);
    // cy.get('.mr-6 > .relative > .peer > .css-q9mf9z-control > .css-yxo4uo > .css-19bb58m').type(`${data.roles} {enter}`);

    // cy.get('.text-whiteText') .click()
    
})
   });
  });
