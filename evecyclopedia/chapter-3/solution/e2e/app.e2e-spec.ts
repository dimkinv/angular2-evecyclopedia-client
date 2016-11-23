import { EvecyclopediaPage } from './app.po';

describe('evecyclopedia App', function() {
  let page: EvecyclopediaPage;

  beforeEach(() => {
    page = new EvecyclopediaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
