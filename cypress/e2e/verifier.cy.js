describe("verifier open", () => {
  beforeEach(() => {
    cy.visit(
      "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc"
    );
  });

  it("should verify the presence of elements", () => {
    cy.get("#task-heading span").should("have.text", "Tasks");
    cy.get(".brand-title span").should("have.text", "Sqlverifier");
  });
});
