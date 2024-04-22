export class LoginPage {
  elements = {
    usernameField: () => cy.get("#username"),
    passwordField: () => cy.get("#password"),
    submitButton: () => cy.get('[data-cy="submit"]'),
  };

  login(login, password) {
    this.elements.usernameField().type(login);
    this.elements.passwordField().type(password);
    this.elements.submitButton().click();
  }
}
