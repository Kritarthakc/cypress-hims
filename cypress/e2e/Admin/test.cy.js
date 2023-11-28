// Import Cypress library
const cy = require('cypress');

function writeOnCkeEditor() {
  
  // Navigate to the page with the CKEditor
  cy.visit('https://nepalehr.com/jobs/add');
  
  // Get the CKEditor element and type some text into it
  cy.get('.cke_wysiwyg_frame')
    .then($iframe => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body)
        .type('This text was typed using Cypress!');
    });
}

// Call the function to write on the CKEditor
writeOnCkeEditor();