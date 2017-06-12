import { OnBoardingPage } from './app.po';

describe('on-boarding App', () => {
  let page: OnBoardingPage;

  beforeEach(() => {
    page = new OnBoardingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
