import { ExpensePage } from './expense.po';
describe("Expense form", () => {
  let page: ExpensePage;
  beforeEach(() => {
    page = new ExpensePage();
    page.navigate();
  })

  it('it should disable the submitbutton by default', () => {
    expect(page.submitButton.isEnabled()).toBe(false);
  });

  it('it should be able to add an expense', () => {
    page.description.sendKeys('some test expense');
    page.amount.sendKeys(15.50);
    page.date.sendKeys('12122018');

    expect(page.submitButton.isEnabled()).toBe(true);
    page.submitButton.click();
    expect(page.rows.count()).toBe(4);
  });
});