describe("First automation test", () => {
  it("Check Filter T-shirts", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.get(
      '.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]'
    ).click();
    cy.get(".block_content > .tree > :nth-child(1) > .grower").click();
    cy.get(
      ".block_content > .tree > :nth-child(1) > ul > :nth-child(1) > a"
    ).click();
    cy.get(".right-block > h5 > .product-name").contains("T-shirts");
  });
});
