describe('Products API Test', () => {
    it('deve retornar um produto contendo a palavra-chave "Samsung"', () => {
      cy.request({
        method: 'GET',
        url: 'https://serverest.dev/produtos?nome=Samsung'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.quantidade).to.eq(1);
        expect(response.body.produtos).to.be.an('array').that.is.not.empty;
        const produto = response.body.produtos[0];
        expect(produto).to.have.property('nome', 'Samsung 60 polegadas');
        expect(produto).to.have.property('preco', 5240);
        expect(produto).to.have.property('descricao', 'TV');
        expect(produto).to.have.property('quantidade', 49971);
        expect(produto).to.have.property('_id', 'K6leHdftCeOJj8BJ');
      });
    });
  });
  