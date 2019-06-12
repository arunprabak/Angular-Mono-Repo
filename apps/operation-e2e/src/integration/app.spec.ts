import { getGreeting } from '../support/app.po';

describe('operation', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to operation!');
  });
});
