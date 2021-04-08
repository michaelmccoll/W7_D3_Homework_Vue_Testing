// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Should have working number buttons?', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('Should display result of arithmetic operation?', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '5')
    cy.get('#clear').click();
    
    cy.get('#number9').click();
    cy.get('#operator_subtract').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '4')
    cy.get('#clear').click();

    cy.get('#number5').click();
    cy.get('#operator_multiply').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '15')
    cy.get('#clear').click();

    cy.get('#number8').click();
    cy.get('#operator_divide').click();
    cy.get('#number4').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '2')
    cy.get('#clear').click();
  })

  it('Can multiply operations be chained together?', () => {
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator_multiply').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '35')
  })

  it('Output is correct for a range of numbers', () => {
    cy.get('#number3').click();
    cy.get('#operator_divide').click();
    cy.get('#number6').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '0.5')
    cy.get('#clear').click();
    
    cy.get('#number1').click();
    cy.get('#operator_subtract').click();
    cy.get('#number5').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '-4')
    cy.get('#clear').click();

    cy.get('#number5').click();
    cy.get('#operator_multiply').click();
    cy.get('#number3').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '15')
    cy.get('#clear').click();

    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_multiply').click();
    cy.get('#number9').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '4782969')
    cy.get('#clear').click();
  })

  it('Does dividing by zero give an error?', () => {
    cy.get('#number5').click();
    cy.get('#operator_divide').click();
    cy.get('#number0').click();
    cy.get('#operator_equals').click();
    cy.get('.display').should('contain', '0')
  })

})
