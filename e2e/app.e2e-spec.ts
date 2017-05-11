import { Angular4StartupPage } from './app.po';

describe('angular4-startup App', () => {
  let page: Angular4StartupPage;

  beforeEach(() => {
    page = new Angular4StartupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
