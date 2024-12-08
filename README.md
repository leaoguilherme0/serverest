# Cypress + Cucumber Setup 

Este guia fornece um passo a passo para configurar Cypress o projeto. 

## Pré-requisitos

- Node.js e npm instalados na sua máquina. Você pode baixar o Node.js em [nodejs.org](https://nodejs.org). 
- Projeto inicializado com npm (`npm init -y`).

## Instalar Cypress

Primeiro, instale o Cypress como dependência de desenvolvimento:

   ```bash
   npm install cypress --save-dev
   ```

## Instalação do projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/leaoguilherme0/serverest.git
   ```

2. Navegue até a pasta do projeto:

   ```bash
   cd Serverest
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

- **`cypress/e2e/cucumber_tests/serverest`**: Contém o arquivo que define as etapas (steps) para os testes de front.
- **`cypress/e2e/cucumber_tests/`**: Contém o arquivo `.feature`, onde os cenários de teste de front estão escritos em Gherkin.
- **`cypress/e2e/backend-tests/`**: Contém o arquivo com os testes de backend
- **`cypress.config.js`**: Arquivo de configuração do Cypress.
- **`package.json`**: Contém as dependências e scripts do projeto.

## Como Executar os Testes

1. Para rodar os testes, basta executar o comando abaixo:

   ```bash
   npx cypress open
   ```

   Abrirá a interface gráfica do Cypress, onde você poderá selecionar os testes que deseja executar

2. Você pode visualizar tanto os testes `.feature`(front) do Cucumber quanto os arquivos `.cy.js`(backend) na interface.

3. Para rodar os testes no modo headless (sem a interface gráfica), execute:

   ```bash
   npx cypress run
   ```
