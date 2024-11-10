Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Larissa')
    cy.get('#lastName').type('Rachid')
    cy.get('#email').type('lrachid@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button','Enviar').click()
    
})