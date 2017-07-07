import { PipesappPage } from './app.po';

describe('pipesapp App', () => {
  let page: PipesappPage;

  beforeEach(() => {
    page = new PipesappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
