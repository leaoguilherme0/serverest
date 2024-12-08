# Cypress + Node.js + Cucumber Setup 

Este guia fornece um passo a passo para configurar o projeto. 

## Instalar Node.js e npm

Caso ainda não tenha instalado o Node.js e npm, pode baixar em [nodejs.org](https://nodejs.org). 

1. Baixar e Instalar o Node.js

Acesse nodejs.org e baixe a versão recomendada do Node.js para o seu sistema operacional.
Siga as instruções de instalação. O npm (Node Package Manager) é instalado automaticamente junto com o Node.js.

2. Verificar instalação

Após a instalação, verifique se o Node.jse o npm foram instalados corretamente:
   
   ```bash
   node -v
   ```

   ```bash
   npm -v
   ```

3. Inicializar um projeto

O comando npm init -y cria um arquivo package.json com as configurações padrão, inicializando o projeto.
Navegue até o diretório do projeto e execute:

   ```bash
   npm init -y
   ```   

## Instalar Cypress

Instale o Cypress como dependência de desenvolvimento:

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

   (Abrirá a interface gráfica do Cypress, onde você poderá selecionar os testes que deseja executar)

2. Você pode visualizar tanto os testes `.feature`(front) do Cucumber quanto os arquivos `.cy.js`(backend) na interface.

3. Para rodar os testes no modo headless (sem a interface gráfica), execute:

   ```bash
   npx cypress run
   ```
