const testData = require("../support/fixtures/registration.json");

describe.only("Registration Form Tests", () => {
  const baseUrl = Cypress.config("baseUrl");

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("Register with valid data", () => {
    cy.registerUser("test", "test@mail.com", "1111", "1111");
    cy.contains(".invalid-feedback").should("not.exist");
  });

  it("Unable to Register with Incorrect Credentials", () => {
    testData.forEach((item) => {
      cy.registerUser(
        item.username,
        item.email,
        item.firstPassword,
        item.secondPassword
      );
      cy.contains(".invalid-feedback").should("exist");
    });
  });
});
