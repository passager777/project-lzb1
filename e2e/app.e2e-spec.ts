import { ProjectLzb1Page } from './app.po';

describe('project-lzb1 App', () => {
  let page: ProjectLzb1Page;

  beforeEach(() => {
    page = new ProjectLzb1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
