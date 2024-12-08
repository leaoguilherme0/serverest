describe('User API Test', () => {
    it('deve criar um usuário com sucesso', () => {
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: {
          nome: 'Novo Cliente',
          email: `novo.cliente${Date.now()}@example.com`,
          password: 'password123',
          administrador: 'true'
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
        expect(response.body).to.have.property('_id');
      });
    });
  });
  