import * as selectors from "./components";

export const start = () => {
  cy.once("uncaught:exception", () => false);
  cy.viewport("macbook-15").as("view");
  cy.visit("https://www.amazon.co.uk/");
};

export const cookies = () => {
  cy.get(selectors.AMAZON_COOKIES).click();
};

export const aboutAmazon = () => {
  cy.get(selectors.ABOUT_AMAZON).click();
};

export const cookiesAbout = () => {
  cy.get(selectors.ABOUT_COOKIES).click();
};

export const pageCheck = () => {
  cy.url().should("include", "/?utm_source=gateway&utm_medium=footer");
};

export const meetUS = () => {
  cy.get(selectors.MEET_US).click();
};

export const checkHeadline = () => {
  cy.get(selectors.SECOND_OPTION).then(($value) => {
    getText = $value.text();
    cy.wait(500);
    cy.get(selectors.SECOND_OPTION).click();
    cy.wait(500);
    cy.get(selectors.HEADLINE).invoke("text").should("eq", getText);
  }); //invoke("attr", "innerText").as("getText");
};
