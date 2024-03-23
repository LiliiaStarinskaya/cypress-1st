describe("check", () => {
  const baseUrl = Cypress.config("baseUrl");

  before(() => {
    cy.visit(baseUrl);
    cy.login();
  });

  it("verify the presence of Home element and URL", () => {
    cy.contains("span", "Home").should("exist");
    cy.verifyUrlContains(baseUrl);
  });

  it("verify the presence of Entities element and URL", () => {
    cy.navigateTo("Entities");
    cy.navigateTo("Task");
    cy.verifyUrlContains(`${baseUrl}/task`);
  });

  it("verify the presence of User Tasks element and URL", () => {
    cy.navigateTo("Entities");
    cy.navigateTo("User Task");
    cy.verifyUrlContains(`${baseUrl}/user-task`);
  });

  it("verify the presence of Language element", () => {
    cy.contains("span", "English").should("exist");
  });

  it("verify the presence of English button", () => {
    cy.clickButton("English");
    cy.contains("button", "English").should("exist");
  });

  it("verify the presence of Français button", () => {
    cy.clickButton("English");
    cy.contains("button", "Français").should("exist");
  });

  it("verify the presence of Русский button", () => {
    cy.clickButton("English");
    cy.contains("button", "Русский").should("exist");
  });

  it("verify the presence of Українська button", () => {
    cy.clickButton("English");
    cy.contains("button", "Українська").should("exist");
  });

  it("verify the presence of Swagger element and URL", () => {
    cy.navigateTo("Swagger");
    cy.navigateTo("API");
    cy.verifyUrlContains(`${baseUrl}/docs/docs`);
  });

  it("verify the presence of Account button", () => {
    cy.contains("span", "Account").should("exist");
  });

  it("verify the presence of Settings button and URL", () => {
    cy.contains("span", "Account").should("exist").click();
    cy.contains("span", "Settings").should("exist").click();
    cy.verifyUrlContains(`${baseUrl}/account/settings`);
  });

  it("verify the presence of Password button and URL", () => {
    cy.contains("span", "Account").should("exist").click();
    cy.contains("span", "Password").should("exist").click();
    cy.verifyUrlContains(`${baseUrl}/account/password`);
  });

  it("verify the presence of Sign out button and URL", () => {
    cy.contains("span", "Account").should("exist").click();
    cy.contains("span", "Sign out").should("exist").click();
    cy.verifyUrlContains(`${baseUrl}/logout`);
  });
});
