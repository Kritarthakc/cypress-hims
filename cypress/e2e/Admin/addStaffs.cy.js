import login from './login.cy';
describe('Hospital Tests', () => {
  before(() => {
    // This code will run once before all the tests in this describe block
    login();
  });
  it('should perform actions after login', () => {
    cy.get(':nth-child(3) > .flex > span').click();
    cy.get('span.undefined.relative.whitespace-nowrap', { multiple: true }).click({ multiple: true });
    cy.get('.gap-8 > :nth-child(2) > span').click()
    cy.fixture('staffs.json').then((data)=>{
    cy.get('#first_name').type(data.firstName);
    cy.get('#middle_name').type(data.middleName)
    cy.get('#last_name').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#phone_number').type(data.phoneNumber)
    cy.get('#react-select-2-input').type(`${data.roles} {enter}`);
    cy.get('.pr-8 > .relative > .peer > .css-q9mf9z-control > .css-yxo4uo > .css-19bb58m').type(`${data.province} {enter}`);
    cy.get('.text-whiteText').click()

    it('should delete staff',()=>{
        cy.get('span.undefined.relative.whitespace-nowrap', { multiple: true }).click({ multiple: true });
        cy.get(':nth-child(1) > :nth-child(7) > :nth-child(1) > .gap-4 > .flex > button > span > .p-\[2px\]').click()
    })
    })
})
});