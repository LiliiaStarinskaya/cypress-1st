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
Cypress.Commands.add("login", () => {
  cy.contains("span", "Account").click();
  cy.contains("span", "Sign in").click();
  cy.get('[data-cy="username"]').click().type("user_student");
  cy.get('[data-cy="password"]').click().type("user");
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
