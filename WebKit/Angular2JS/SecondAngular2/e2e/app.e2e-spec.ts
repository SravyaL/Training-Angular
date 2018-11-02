import { SecondAngular2Page } from './app.po';

describe('second-angular2 App', function() {
  let page: SecondAngular2Page;

  beforeEach(() => {
    page = new SecondAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
