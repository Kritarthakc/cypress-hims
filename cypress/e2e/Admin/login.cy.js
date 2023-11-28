const login = (email = 'admin@mail.com', password = 'MnbvcxZ@#1') => {
  cy.visit('https://nepalehr.com');
  cy.get('#email').type(email);
  cy.get('#password').type(password);
  cy.get('.rounded-lg').click();
  // Add assertions here if needed
  cy.setCookie('authToken', 'yourAuthTokenValue');
};

export default login;