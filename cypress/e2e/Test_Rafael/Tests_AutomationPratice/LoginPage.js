import * as selectors from "./components";

export const access = () => {
  return cy.visit("https://www.saucedemo.com/");
};

export const fillUserS = () => {
  const userS = cy.get(selectors.USER_FIELD);
  userS.clear().type(selectors.stan_username);
};

export const fillUserL = () => {
  const userL = cy.get(selectors.USER_FIELD);
  userL.clear().type(selectors.lock_username);
};

export const fillUserP = () => {
  const userP = cy.get(selectors.USER_FIELD);
  userP.clear().type(selectors.problem_username);
};

export const fillUserG = () => {
  const userG = cy.get(selectors.USER_FIELD);
  userG.clear().type(selectors.glitch_username);
};

export const fillPass = () => {
  const pass = cy.get(selectors.PASS_FIELD);
  pass.clear().type(selectors.password_user);
};

export const login = () => {
  const login = cy.get(selectors.LOGIN_BTN);
  login.click();
};

export const erroUserLock = () => {
  cy.get(selectors.ERROR_INFO)
    .invoke("text")
    .should("eq", "Epic sadface: Sorry, this user has been locked out.");
};
