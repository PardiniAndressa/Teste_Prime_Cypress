describe('Cadastro 01', () => {
  it('Validar se é possível se cadastrar com sucesso', () => {
    cy.visit('https://phptravels.com/demo');

    // Preencher os campos com os dados pessoais do usuário
    cy.get('input[placeholder="Last Name"]').type('Andressa', { force: true });
    cy.get('input[placeholder="First Name"]').type('Pardini', { force: true });
    cy.get('input[placeholder="Business Name"]').type('Andressa de Cassia Pardini', { force: true });
    cy.get('input[placeholder="Email"]').type('dessapardini@gmail.com', { force: true });

    // Calcular a soma dos números na tela
    cy.get('div > h4').then(($element) => {
      const numbers = $element.text().match(/\d+/g).map(Number);
      const sum = numbers.reduce((total, num) => total + num, 0);
      cy.get('input[placeholder="Result ?"]').type(sum.toString(), { force: true });
    });

    // Clicar no botão
    cy.contains('button', 'Submit').click({ force: true });

    // Validar a mensagem de cadastro realizado com sucesso
    cy.get('h2.text-center.cw').should('contain', 'Thank you!', { force: true });
    cy.get('p[class="text-center cw"]').should('have.text', 'We have sent your demo credentials to your email please check your email to test demo website. if message not found inbox please check spam folder', { force: true });
  });
});

describe('Cadastro 02 - Campo Obrigatório não Preenchido', () => {
  it('Tentar fazer um cadastro sem um campo obrigatório e validar a mensagem de erro', () => {
    cy.visit('https://phptravels.com/demo');

    // Preencher os campos com os dados pessoais do usuário, exceto o e-mail
    cy.get('input[placeholder="Last Name"]').type('Andressa', { force: true });
    cy.get('input[placeholder="First Name"]').type('Pardini', { force: true });
    cy.get('input[placeholder="Business Name"]').type('Andressa de Cassia Pardini', { force: true });

    // Calcular a soma dos números na tela e preencher o campo Result ?
    cy.get('div > h4').then(($element) => {
      const numbers = $element.text().match(/\d+/g).map(Number);
      const sum = numbers.reduce((total, num) => total + num, 0);
      cy.get('input[placeholder="Result ?"]').type(sum.toString(), { force: true });
    });

    // Clicar no botão
    cy.contains('button', 'Submit').click({ force: true });

    // // Validar a mensagem de obrigatoriedade do campo não preenchido
    // cy.get('.has-error p.help-block').should('contain', 'The Email field is required.');

    // Verificar se a mensagem de erro esperada está presente em qualquer lugar da página
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Please type your email name')
    }) 

  });
});



