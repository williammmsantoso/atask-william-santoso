describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/');
 
    // type text box
    cy.get('input[data-testid="user"]').type('williammmsantoso')

    // find submit button and click it
    cy.get('button[data-testid="button-submit-search"]').click();

    // expand
    cy.get('svg[data-testid="ExpandMoreIcon"]').click();
  });
});