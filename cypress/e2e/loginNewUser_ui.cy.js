import { faker } from "@faker-js/faker";
const loginPageElements = require("..//support/fixtures/pages/loginPageSelectors.json");
describe.only("New", () => {
  const baseUrl = Cypress.config("baseUrl");

  let oldPassword = "1111";
  let newPassword = faker.internet.password(8);

  beforeEach(() => {
    cy.visit(`${baseUrl}/login`);
  });

  it("New user is able to save a new password", () => {
    cy.get(loginPageElements.usernameField).type("test_cypress6");
    cy.get(loginPageElements.passwordField).type(oldPassword);
    cy.get(loginPageElements.submitButton).click();
    cy.changePassword(oldPassword, newPassword);
    cy.contains("span", "Account").click({ force: true });
    cy.contains("span", "Sign out").click();
  });

  it("New user is unable to login with an old password", () => {
    cy.get(loginPageElements.usernameField).type("test_cypress6");
    cy.get(loginPageElements.passwordField).type(oldPassword);
    cy.get(loginPageElements.submitButton).click();
    cy.contains(
      "Failed to sign in! Please check your credentials and try again."
    ).should("exist");
    cy.get("#password").clear().type(newPassword);
    cy.get('[data-cy="submit"]').click();
    cy.returnPassword(oldPassword, newPassword);
  });
});
