// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (username, password) => {
  cy.visit("/login");
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get('[data-cy="submit"]').click();
});

Cypress.Commands.add("navigateTo", (text) => {
  cy.contains("span", text).should("exist").click();
});

Cypress.Commands.add("clickButton", (text) => {
  cy.contains("span", text).should("exist").click();
});

Cypress.Commands.add("verifyUrlContains", (urlPart) => {
  cy.url().should("include", urlPart);
});

Cypress.Commands.add(
  "registerUser",
  (username, email, password, confirmPassword) => {
    cy.visit("/account/register");

    cy.get('[data-cy= "username"]').type(username);
    cy.get('[data-cy="email"]').type(email);
    cy.get('[data-cy="firstPassword"]').type(password);
    cy.get('[data-cy="secondPassword"]').type(confirmPassword);
    cy.get('[data-cy="submit"]').click();
  }
);

const selectorsForClear = {
  usernameField: '[data-cy="username"]',
  emailField: '[data-cy="email"]',
  passwordField: '[data-cy="firstPassword"]',
  confirmPasswordField: '[data-cy="secondPassword"]',
  errorAlert: ".invalid-feedback",
};
Cypress.Commands.add("changePassword", (oldPassword, newPassword) => {
  cy.contains("span", "Account").click();
  cy.contains("span", "Password").click();
  cy.get('[data-cy="currentPassword"]').type(oldPassword);
  cy.get('[data-cy="newPassword"]').type(newPassword);
  cy.get('[data-cy="confirmPassword"]').type(newPassword);
  cy.get('[data-cy="submit"]').click();
});

Cypress.Commands.add("returnPassword", (oldPassword, newPassword) => {
  cy.contains("span", "Account").click();
  cy.contains("span", "Password").click();
  cy.get('[data-cy="currentPassword"]').type(newPassword);
  cy.get('[data-cy="newPassword"]').type(oldPassword);
  cy.get('[data-cy="confirmPassword"]').type(oldPassword);
  cy.get('[data-cy="submit"]').click();
});

Cypress.Commands.add("clearRegistrationForm", () => {
  Object.values(selectorsForClear).forEach((selector) => {
    if (selector !== selectorsForClear.errorAlert) {
      cy.get(selector).clear();
    }
  });
});
