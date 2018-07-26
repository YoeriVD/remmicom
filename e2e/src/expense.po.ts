import { element, by, browser } from "protractor";

export class ExpensePage {

    navigate() {
        return browser.get('/');
    }
    get submitButton() {
        return element(by.css('button[type="submit"]'));
    }
    get amount() {
        return element(by.id('amount'));
    }
    get description() {
        return element(by.id('description'));
    }
    get date() {
        return element(by.id('date'));
    }
    get rows() {
        return element.all(by.css('tbody tr'));
    }
}