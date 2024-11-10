
/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
            cy.visit('./src/index.html')
            
    })
    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche os campos obrigatórios e envia o formulário', function(){
        const longText = 'teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste'
        cy.get('#firstName').type('Larissa')
        cy.get('#lastName').type('Rachid')
        cy.get('#email').type('lrachid@gmail.com')
        cy.get('#open-text-area').type(longText,{delay:0})
        cy.contains('button','Enviar').click()
        cy.get('.success').should('be.visible')
        cy.get('.success').should('contain.text','Mensagem enviada com sucesso')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida. exercicio extra 2', function(){
        cy.get('#firstName').type('Larissa')
        cy.get('#lastName').type('Rachid')
        cy.get('#email').type('lrachidgmail.com')
        cy.get('#open-text-area').type('aaa')
        cy.contains('button','Enviar').click()
        cy.get('.error').should('be.visible')
    })

    it('valida se o campo telefone está recebendo apenas números. exercicio extra 3', function(){
        cy.get('#phone').type('aaaaa').should('be.empty')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário. exercicio extra 4', function(){
        cy.get('#firstName').type('Larissa')
        cy.get('#lastName').type('Rachid')
        cy.get('#email').type('lrachid@gmail.com')
        cy.get('#open-text-area').type('aaa')
        cy.get('#phone-checkbox').check()
        cy.contains('button','Enviar').click()
        cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone. exercicio extra 5', function(){
        cy.get('#firstName').type('Larissa').should('have.value','Larissa').clear().should('have.value', '')
        cy.get('#lastName').type('Rachid').should('have.value','Rachid').clear().should('have.value', '')
        cy.get('#email').type('lrachid@gmail.com').should('have.value','lrachid@gmail.com').clear().should('have.value', '')
        cy.get('#phone').type('11993339875').should('have.value','11993339875').clear().should('have.value', '')
        
    })
    
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios. exercicio extra 6', function(){
        cy.contains('button','Enviar').click()
        cy.get('.error').should('be.visible')
    })

    it('envia o formuário com sucesso usando um comando customizado. exercicio extra 7', function(){
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
    })


    it('exercicio extra 8', function(){
        cy.contains('button','Enviar').should('be.visible')
    })


    it('seleciona um produto (YouTube) por seu texto. exercicio aula 19', function(){
        cy.get('#product').select('YouTube').should('have.value','youtube')
    })

    it('seleciona um produto (Mentoria) por seu valor (value). exercicio aula 20', function(){
        cy.get('#product').select('mentoria').should('have.value','mentoria')
    })

    it('seleciona um produto (Blog) por seu índice. exercicio aula 21', function(){
        cy.get('#product').select(1).should('have.value','blog')
    })

    it('marca o tipo de atendimento "Feedback". exercicio aula 23', function(){
        cy.get('input[type="radio"]').check('feedback').should('have.value','feedback') //fiz diferente do professor
    })


    it('marca cada tipo de atendimento. exercicio aula 24', function(){
        cy.get('input[type="radio"]')
        .should('have.length',3)
        .each(function($radio){
            cy.wrap($radio).check()
        })
    })

  it('marca ambos checkboxes, depois desmarca o último. exercicio aula 25', function(){
    cy.get('input[type="checkbox"]')
    .check()
    .should('be.checked')
    .last()
    .uncheck()
    .should('not.be.checked')
  })


  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário. exercicio extra 27', function(){
    cy.get('#firstName').type('Larissa')
    cy.get('#lastName').type('Rachid')
    cy.get('#email').type('lrachid@gmail.com')
    cy.get('#open-text-area').type('aaa')
    cy.get('#phone-checkbox').check()
    cy.contains('button','Enviar').click()
    cy.get('.error').should('be.visible')
})

it('seleciona um arquivo da pasta fixtures, aula 29', function(){
    cy.get('input[type="file"]')
    .should('not.have.value')
    .selectFile('cypress/fixtures/example.json')
    .should(function($input){
        expect($input[0].files[0].name).to.equal('example.json')
    })
})

it('seleciona um arquivo simulando um drag-and-drop, aula 30', function(){
    cy.get('input[type="file"]')
    .should('not.have.value')
    .selectFile('cypress/fixtures/example.json', {action:'drag-drop'})
    .should(function($input){
        expect($input[0].files[0].name).to.equal('example.json')
    })
})

it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias, aula 31', function(){
    cy.fixture('example.json').as('sampleFile')
    cy.get('input[type="file"]')
    .should('not.have.value')
    .selectFile('@sampleFile')
    .should(function($input){
        expect($input[0].files[0].name).to.equal('example.json')
    })
})

it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique, aula 33', () => {
    cy.get('#privacy a')
    .should('have.attr', 'target', '_blank')
})


it('acessa a página da política de privacidade removendo o target e então clicando no link, aula 34', () => {
    cy.get('#privacy a')
    .invoke('removeAttr', 'target')
    .click()

    cy.contains('Talking About Testing').should('be.visible')
})

it ('testa a página da política de privacidade de forma independente, aula 35', () => {
    cy.visit('./src/privacy.html')
    cy.contains('Talking About Testing').should('be.visible')
})

it('', () => {
    
})

      })
  
