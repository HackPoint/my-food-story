import { MyFoodStoryPage } from './app.po';

describe('my-food-story App', () => {
  let page: MyFoodStoryPage;

  beforeEach(() => {
    page = new MyFoodStoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(''' works!');
  });
});
