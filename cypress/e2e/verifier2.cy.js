describe("check", () => {
  beforeEach(() => {
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com");
    cy.contains("span", "Account").click();
    cy.contains("span", "Sign in").click();
    cy.get('[data-cy="username"]').click().type("user_student");
    cy.get('[data-cy="password"]').click().type("user");
    cy.get('[data-cy="submit"]').click();
  });

  it("verify the presence of Home element", () => {
    cy.contains("span", "Home").should("exist"),
      cy
        .url()
        .should(
          "include",
          "https://sqlverifier-live-6e21ca0ed768.herokuapp.com"
        );
  });
  it("verify the presence of Entities element", () => {
    cy.contains("span", "Entities").should("exist").click(),
      cy.contains('a[href="/task"] span', "Task").should("exist").click(),
      cy
        .url()
        .should(
          "include",
          "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/task"
        );
  });
  it("verify the presence of Entities element", () => {
    cy.contains("span", "Entities").should("exist").click(),
      cy
        .contains('a[href="/user-task"] span', "User Task")
        .should("exist")
        .click(),
      cy
        .url()
        .should(
          "include",
          "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/user-task"
        );
  });
  it("verify the presence of Language element", () => {
    cy.contains("span", "English").should("exist");
  });
  it("verify the presence of English button", () => {
    cy.contains("span", "English").should("exist").click(),
      cy.contains("button", "English").should("exist");
  });
  it("verify the presence of Français button", () => {
    cy.contains("span", "English").should("exist").click(),
      cy.contains("button", "Français").should("exist");
  });
  it("verify the presence of Русский button", () => {
    cy.contains("span", "English").should("exist").click(),
      cy.contains("button", "Русский").should("exist");
  });

  it("verify the presence of Українська button", () => {
    cy.contains("span", "English").should("exist").click(),
      cy.contains("button", "Українська").should("exist");
  });

  it("verify the presence of Account button", () => {
    cy.contains("span", "Account").should("exist");
  });
  it("verify the presence of Settings button", () => {
    cy.contains("span", "Account").should("exist").click(),
      cy.contains("span", "Settings").should("exist").click,
      cy
        .url()
        .should(
          "include",
          "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/account/settings"
        );
  });

  it("verify the presence of Password button", () => {
    cy.contains("span", "Account").should("exist").click();
    cy.contains("span", "Password").should("exist").click(),
      cy
        .url()
        .should(
          "include",
          "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/account/password"
        );
  });
  it("verify the presence of Sign out button", () => {
    cy.contains("span", "Account").should("exist").click();
    cy.contains("span", "Sign out").should("exist").click(),
      cy
        .url()
        .should(
          "include",
          "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/logout"
        );
  });
});
