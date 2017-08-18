import { MyTestAppPage } from './app.po';

describe('my-test-app App', () => {
  let page: MyTestAppPage;

  beforeEach(() => {
    page = new MyTestAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
