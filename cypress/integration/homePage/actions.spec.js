context('HomePage Actions', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  // https://on.cypress.io/interacting-with-elements

  it('load table', () => {
    cy.get('.click-btn').click();

    cy.get('table>tbody>tr').should('have.length', 10);
  });
});
