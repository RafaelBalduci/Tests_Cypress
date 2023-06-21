import * as selectors from "./components";
import * as login from "./LoginPage";
import * as product from "./ProductsPage";

describe("First automation test", () => {
  it("Login standard user", () => {
    login.access();
    login.fillUserS();
    login.fillPass();
    login.login();
    product.checkIMGCorrect();
  });
  it("Login locked user", () => {
    login.access();
    login.fillUserL();
    login.fillPass();
    login.login();
    login.erroUserLock();
  });
  it("Login problem user", () => {
    login.access();
    login.fillUserP();
    login.fillPass();
    login.login();
    product.checkIMGWrong();
  });
  it("Login glicth user", () => {
    login.access();
    login.fillUserG();
    login.fillPass();
    login.login();
  });
});
