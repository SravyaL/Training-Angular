import { ProjectHttpPage } from './app.po';

describe('project-http App', function() {
  let page: ProjectHttpPage;

  beforeEach(() => {
    page = new ProjectHttpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
