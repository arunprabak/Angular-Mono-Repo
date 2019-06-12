import { getGreeting } from '../support/app.po';

describe('master', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to master!');
  });
});
