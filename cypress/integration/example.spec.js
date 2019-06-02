describe('Example cypress test', () => {
  it('Shows data', () => {
    cy.visit('localhost:3000');
    cy.get('button')
      .should('have.text', 'Click here!')
      .click();
    cy.get('.data').should('have.length', 100);
  });
});
