describe("First automation test", () => {
  it("Create Account", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.get(".submenu-container > :nth-child(1) > ul > :nth-child(1) > a").click(
      { force: true }
    );
    cy.waitFor("#layered_id_attribute_group_13");
    cy.get("#layered_id_attribute_group_13").click();
    cy.get("#layered_id_attribute_group_13").invoke("val", "#F39C11");
    cy.get("#color_1").invoke("val", "#F39C10");
  });
});
