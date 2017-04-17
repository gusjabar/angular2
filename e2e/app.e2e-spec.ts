import { AngularMod4Page } from './app.po';

describe('angular-mod4 App', () => {
  let page: AngularMod4Page;

  beforeEach(() => {
    page = new AngularMod4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
