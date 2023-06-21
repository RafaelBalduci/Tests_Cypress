import * as selectors from "./components";

export const checkIMGCorrect = () => {
  cy.get(selectors.CORRECT_IMG)
    .should("have.attr", "src")
    .should("include", "sauce-backpack-1200x1500.0a0b85a3.jpg");
};

export const checkIMGWrong = () => {
  cy.get(selectors.CORRECT_IMG)
    .should("have.attr", "src")
    .should("not.include", "sauce-backpack-1200x1500.0a0b85a3.jpg");
};
