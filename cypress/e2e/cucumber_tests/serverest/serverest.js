import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import massas from '../../../fixtures/massas.json'

Given("que estou na página inicial", () => {
  cy.visit(massas.url);
});

When("eu preencho o campo email corretamente", () => {
  cy.get('input[name="email"]').type(massas.emailSucesso);
});

And("eu preencho o campo senha com um dado válido", () => {
  cy.get('input[name="password"]').type(massas.senhaSucesso);
});

And("clico no botão {string}", (botao) => {
  cy.contains('button', botao).click();
});

And("verei a mensagem {string}", (mensagem) => {
  cy.contains(mensagem).should("be.visible");
});


  When("eu preencho o campo nome com {string}", (nome) => {
    cy.get('input[name="nome"]').type(nome);
  });
  
  When("eu preencho o campo email com um endereço não cadastrado", () => {
    cy.gerarEmail().then((randomEmail) => {
    cy.get('input[name="email"]').type(randomEmail); 
    });
  });
  
  
  When("eu marco o checkbox para {string}", (opcao) => {
    if (opcao === "Cadastrar como administrador") {
      cy.get('input[type="checkbox"]').check();
    }
  });
  
  When("clico no botão {string}", (botao) => {
    cy.contains('button', botao).click();
  });

  When("clico no botão Cadastre-se", () => {
    cy.get('[data-testid="cadastrar"]').click();
  });


  Then("verei o alerta Cadastro realizado com sucesso", () => {
    cy.get('.alert').should("be.visible")
  });

  Then("serei redirecionado para {string}", (pagina) => {
    cy.url().should("eq", `${massas.url}/${pagina}`);
  });
  

  Given("que estou logado na home", () => {
    cy.logar(massas.url, massas.emailSucesso, massas.senhaSucesso);
  });

  When('pesquiso {string} na caixa de pesquisa', (product) => { 
    cy.get('[data-testid="pesquisar"]').type(product); 
  });
  
  And('clico no botão {string}', (buttonName) => { 
    cy.get('button[name="searchButton"]').click(); 
  });
  
  Then('retornará o produto {string}', (productName) => { 
    cy.get('.card-title').should('contain', productName); 
  });