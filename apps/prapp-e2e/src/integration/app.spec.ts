import { getGreeting } from '../support/app.po';

describe('prapp', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to prapp!');
  });
});
