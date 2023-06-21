import * as selectors from "./components";
import * as amazonAbout from "./functions";

describe("TC 01.00 - About Bark", () => {
  beforeEach(() => {
    cy.setCookie(
      "session-token",
      '"2XLgsWGG16WwYQfqbn/m+A/KB1ILJOkxgBLgyusf6U2HOgTBUozBbGkXCjQUBncLcF8dHpDKg2fGNrxNoEkfsO2nSLDai58HQOm8yxEBkGHROWKRKvPpFEN8HgsxKFYPKZa95lK4X2/rFZWZhGp2AV7kDhzdcdS0RExykQi53Qfx0zRVSZGjXIyeluQ6Mb5i/Kdh15LnsMtu1ogqfA8xDpnnrBIYYsCjt90tJhcIeFo="'
    );
  });
  it("Cheking new information in meet us", () => {
    var getText = "";
    amazonAbout.start();
    amazonAbout.cookies();
    amazonAbout.aboutAmazon();
    amazonAbout.cookiesAbout();
    amazonAbout.pageCheck();
    amazonAbout.meetUS();
    amazonAbout.checkHeadline();
  });
});
