const testData = require("../../support/fixtures/login.json");

describe.only("Sign in Form Tests", () => {
  const baseUrl = Cypress.config("baseUrl");

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("Login with valid data", () => {
    cy.login("admin_automation", "admin_automation");
    cy.contains("span", "Swagger").should("exist");
  });

  it("Unable To Sign With Incorrect Credentials", () => {
    testData.forEach((item) => {
      cy.login(item.username, item.password);
      cy.contains("span", "Swagger").should("not.exist");
    });
  });
});
