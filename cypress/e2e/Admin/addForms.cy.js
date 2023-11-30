import login from "./login.cy";
describe('add hospital',()=>{
    before(()=>{
        login();
    })
    it('should perform test after login',()=>{
        cy.get(':nth-child(7) > .flex > span').click()
        cy.get('.btn-primary > span').click()
        cy.get('#title').type('section A')
        cy.get('#has_sub_section').click()
        cy.get('.gap-8 > .rounded-lg').click()


    })
})