import {
  ACCEPT_ALL_COOKIES,
  LOAD_FIRST_PAGE,
  DIRECTIONS_BUTTON,
  ORIGIN_FIELD,
  WAIT_SEARCH,
  CHANGE_FLIGHT_DESTINATION,
  SELECT_AIRPORT,
  SELECT_FLIGHT,
  ORIGIN_FLIGHT,
  SELECT_ORIGIN_FLIGHT,
  DESTINATION_FLIGHT,
} from "./components_celfocus.js";

describe("TC 01.00 - EXP - Trunk Call Barring - Billing Number - Single Trunk", () => {
  it("Test1", () => {
    cy.visit("https://onenet.uc.celfocus.com/login");
    cy.get("#username").type("user1");
    cy.get("#password").type("welcome1{enter}");
    cy.get("#companiesTableBodyCell-name-2 > a > .MuiTypography-root").click();
    cy.get(
      "#company-call-management-left-menu-item > .MuiSvgIcon-root.jss34"
    ).click();
    cy.get(
      "#company-call-barring-left-menu-item > .MuiListItemText-root"
    ).click();
    cy.get(".MuiButton-label").click();
    cy.get("#TextFieldWait-name").type("Test1");
    cy.get("#internationalIncoming").check();
    cy.get("#monday > .MuiButton-label").click();
    cy.get("#callBarringRuleStatus-switch").click();
    cy.get(
      "#callBarringRuleConfigAllDay > .MuiButtonBase-root > .MuiIconButton-label > .jss158"
    ).click();
    cy.get("#cbRuleConfigsaveButton > .MuiButton-label").click();
    cy.get("#callBarringRuleTarget > .MuiTab-wrapper").click();
    cy.get(
      "#targetSpecificOption > .MuiButtonBase-root > .MuiIconButton-label > .jss163"
    ).click();
    cy.get("#targetAddTrunksButton > .MuiButton-label").click();
    cy.get("#targetTrunksDialogTableTableBodyCell-selectable-col-9").check();
    cy.get("#targetTrunksDialogActionSubmit > .MuiButton-label").click();
  });
});
