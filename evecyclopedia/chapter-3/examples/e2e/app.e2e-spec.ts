import { Chapter3examplesPage } from './app.po';

describe('chapter3examples App', function() {
  let page: Chapter3examplesPage;

  beforeEach(() => {
    page = new Chapter3examplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
