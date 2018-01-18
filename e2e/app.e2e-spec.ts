import { browser } from 'protractor';
import { AppPage } from './app.po';

describe('curso App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should search sgcharameli', () => {
    const username = 'sgcharameli';
    page.navigateTo();
    page.setUsername(username);
    page.searchClick();
    expect(page.getLogin()).toEqual(username);
    browser.driver.sleep(5000);
  });
});
