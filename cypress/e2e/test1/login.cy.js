describe.only("Sign in Form Tests", () => {
  const baseUrl = Cypress.config("baseUrl");

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it("Login with valid data", () => {
    cy.login("admin_automation", "admin_automation");
    cy.contains("span", "Swagger").should("exist");
    cy.logout();
  });

  it("Unable To Sign With Incorrect Credentials", () => {
    cy.login("aftyerTT", "item.password");
    cy.contains("span", "Swagger").should("not.exist");
    cy.get(".btn-close").click();
  });
});
