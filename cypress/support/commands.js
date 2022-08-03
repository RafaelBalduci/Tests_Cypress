// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.jsnpm i cypress-waitfor
import "cypress-waitfor";
const { MailSlurp } = require("mailslurp-client");

const apiKey =
  "822c4fc0a5d474a2ceb13f028408f4fb3f05983cc6c115c29495cb8e3ced6874";
const mailslurp = new MailSlurp({ apiKey });
Cypress.Commands.add("createInbox", () => {
  return mailslurp.createInbox();
});

Cypress.Commands.add("waitForLatestEmail", (inboxId) => {
  return mailslurp.waitForLatestEmail(inboxId);
});

Cypress.Commands.add("createInbox", () => {
  // instantiate MailSlurp
  const mailslurp = new MailSlurp({ apiKey: Cypress.env("API_KEY") });
  // return { id, emailAddress } or a new randomly generated inbox
  return mailslurp.createInbox();
});
/**
 * getAttached(selector)
 * getAttached(selectorFn)
 *
 * Waits until the selector finds an attached element, then yields it (wrapped).
 * selectorFn, if provided, is passed $(document). Don't use cy methods inside selectorFn.
 */
Cypress.Commands.add("getAttached", (selector) => {
  const getElement =
    typeof selector === "function" ? selector : ($d) => $d.find(selector);
  let $el = null;
  return cy
    .document()
    .should(($d) => {
      $el = getElement(Cypress.$($d));
      expect(Cypress.dom.isDetached($el)).to.be.false;
    })
    .then(() => cy.wrap($el));
});
