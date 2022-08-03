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
} from "./components";
var href;

describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://www.google.com/maps");
    cy.get(ACCEPT_ALL_COOKIES).click();
    cy.waitFor(LOAD_FIRST_PAGE, { timeout: 200, tries: 300 });
    cy.get("#searchboxinput").should("be.visible").type("India{enter}");
    cy.waitFor(DIRECTIONS_BUTTON, { timeout: 200, tries: 300 });
    cy.get(DIRECTIONS_BUTTON).click();
    cy.get(ORIGIN_FIELD).type("London{enter}");
    cy.waitFor(WAIT_SEARCH, { timeout: 200, tries: 300 });
    cy.contains("See results on Google Flights")
      .invoke("removeAttr", "target")
      .click(); //invoke('removeAttr', 'target') makes the link open up inside the same tab instead of a new one
    cy.waitFor(".H2eaHc", { timeout: 200, tries: 300 });
    cy.get(CHANGE_FLIGHT_DESTINATION).type("India{enter}");
    cy.waitFor(SELECT_AIRPORT);
    cy.get(SELECT_AIRPORT).click();
    cy.get(SELECT_FLIGHT).eq(1).invoke("removeAttr", "target").click();
    cy.waitFor(".H2eaHc", { timeout: 200, tries: 300 });
    cy.get(ORIGIN_FLIGHT).click();
    cy.get(SELECT_ORIGIN_FLIGHT).click();
    cy.waitFor('[jsname="IWWDBc"] > .zBTtmb', { timeout: 200, tries: 300 });
    cy.get(DESTINATION_FLIGHT).click();
    //cy.get(DESTINATION_FLIGHT).click();
    cy.waitFor(".VfPpkd-DVBDLb-LhBDec-sM5MNb");
    cy.getAttached(".VfPpkd-DVBDLb-LhBDec-sM5MNb").should("be.visible").click();
    cy.get(".WpHeLc").click();
    cy.waitFor("#identifierId");
    cy.get("#identifierId").type("testcypressmb@gmail.com");
    cy.get(".whsOnd zHQkBf").type("Pri1m3!r0Cypre$5");
  });
});
