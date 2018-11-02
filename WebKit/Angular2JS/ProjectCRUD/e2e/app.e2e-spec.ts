import { ProjectCRUDPage } from './app.po';

describe('project-crud App', function() {
  let page: ProjectCRUDPage;

  beforeEach(() => {
    page = new ProjectCRUDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
