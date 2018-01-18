import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/testing');
  }

  setUsername(username: string) {
    element(by.id('username')).sendKeys(username);
  }

  searchClick() {
    element(by.id('search')).click();
  }

  getLogin() {
    return element(by.id('login')).getText();
  }
}
