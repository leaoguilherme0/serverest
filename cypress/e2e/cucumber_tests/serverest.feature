  Feature: Site Serverest
  
  Scenario: Login com sucesso
    Given que estou na página inicial
    When eu preencho o campo email corretamente
    And eu preencho o campo senha com um dado válido
    And clico no botão "Entrar"
    Then serei redirecionado para "home"
    And verei a mensagem "Serverest Store"

  Scenario: Cadastro com sucesso
    Given que estou na página inicial
    When clico no botão Cadastre-se
    And eu preencho o campo nome com "Fulano da Silva"
    And eu preencho o campo email com um endereço não cadastrado
    And eu preencho o campo senha com um dado válido
    And eu marco o checkbox para "Cadastrar como administrador"
    And clico no botão "Cadastrar"
    Then verei o alerta Cadastro realizado com sucesso
    And serei redirecionado para "admin/home"
    And verei a mensagem "Bem Vindo Fulano da Silva"

  Scenario: Pesquisa de produto na home
    Given que estou logado na home
    When pesquiso "Samsung" na caixa de pesquisa
    And clico no botão "Pesquisar"
    Then retornará o produto "Samsung 60 polegadas"


