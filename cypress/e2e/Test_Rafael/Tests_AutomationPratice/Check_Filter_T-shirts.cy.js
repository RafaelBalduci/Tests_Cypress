import {
  WOMEN_CLOTHES,
  TOPS_FILTER,
  TSHIRT_FILTER,
  TSHIRT_CHECK,
} from "./components";

describe("First automation test", () => {
  it("Check Filter T-shirts", () => {
    cy.visit("http://automationpractice.com/index.php");
    cy.get(WOMEN_CLOTHES).click();
    cy.get(TOPS_FILTER).click();
    cy.get(TSHIRT_FILTER).click();
    cy.get(TSHIRT_CHECK).contains("T-shirts");
  });
});
