import { getGreeting } from '../support/app.po';

describe('reports', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to reports!');
  });
});
