import { getGreeting } from '../support/app.po';

describe('journal-entry', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to journal-entry!');
  });
});
