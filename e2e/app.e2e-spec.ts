import { MytriggerPage } from './app.po';

describe('mytrigger App', () => {
  let page: MytriggerPage;

  beforeEach(() => {
    page = new MytriggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
