describe('Login API Test', () => {
  it('deve realizar o login com sucesso', () => {
    cy.fixture('massas').then((massas) => {
      cy.request({
        method: 'POST',
        url: `${massas.api}/login`, // Usando a URL do arquivo massas.json
        body: {
          email: massas.emailSucesso, 
          password: massas.senhaSucesso
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('message', 'Login realizado com sucesso');
      });
    });
  });
});
