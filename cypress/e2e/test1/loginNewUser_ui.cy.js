import { faker } from "@faker-js/faker";
import { LoginPage } from "../../pages/loginPage";
describe.only("New", () => {
  const baseUrl = Cypress.config("baseUrl");

  let oldPassword = "1111";
  let newPassword = faker.internet.password(8);

  let loginPage;
  beforeEach(() => {
    cy.visit(`${baseUrl}/login`);
    loginPage = new LoginPage();
  });

  it("New user is able to save a new password", () => {
    loginPage.login("cover20", oldPassword);
    cy.changePassword(oldPassword, newPassword);
    cy.contains("span", "Account").click({ force: true });
    cy.contains("span", "Sign out").click();
  });

  it("New user is unable to login with an old password", () => {
    let loginPage = new LoginPage();
    loginPage.login("cover20", oldPassword);
    cy.contains(
      "Failed to sign in! Please check your credentials and try again."
    ).should("exist");
    cy.get("#password").clear().type(newPassword);
    cy.get('[data-cy="submit"]').click();
    cy.returnPassword(oldPassword, newPassword);
    cy.logout();
  });
});
