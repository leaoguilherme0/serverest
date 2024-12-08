Cypress.Commands.add('gerarEmail', () => {
  const timestamp = Date.now();
  return `user${timestamp}@teste.com`;
});

Cypress.Commands.add('logar', (url, email, senha) => {
    cy.visit(url);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(senha);
    cy.contains('button', "Entrar").click();  
});