import { PSMailboxAppPage } from './app.po';

describe('ps-mailbox-app App', () => {
  let page: PSMailboxAppPage;

  beforeEach(() => {
    page = new PSMailboxAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
