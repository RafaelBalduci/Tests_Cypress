import {
  PROFESSIONAL_BTN,
  PROFESSIONAL_LOADING,
  PROFESSIONAL_LONG,
} from "./components";

describe("TC 01.00 - About Bark", () => {
  it("Test1", () => {
    cy.visit("https://www.bark.com/en/gb/");
    cy.get(PROFESSIONAL_BTN).click();
    cy.url().should("include", "/sellers/create/");
    cy.go("back");
    cy.get(PROFESSIONAL_LOADING).click();
    cy.url().should("include", "/sellers/create/");
    cy.go("back");
    cy.get(PROFESSIONAL_LONG).click();
    cy.url().should("include", "/sellers/create/");
  });
});
