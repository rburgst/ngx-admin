import { element, by, browser } from 'protractor';

describe('protractor-problem App', () => {
  beforeEach(() => {});

  it('should display welcome message', async function() {
    console.info('navigating to homepage');
    await browser.get('/');
    console.info('navigated to homepage');
    expect(element(by.css('.user-name')).getText()).toEqual('Nick Jones');

    await browser.waitForAngularEnabled(false);

    await browser.get('https://www.google.com');

    console.info('after clicked google link');

    // now on the google page enter something and hit search
    await element(by.id('lst-ib')).sendKeys('google');
    console.info('after fill out search term');
    await element(by.css('input[value=\'Google Search\']')).click();
    console.info('after click search');

    // wait a bit until the result page is displayed
    await element(by.id('resultStats')).isDisplayed();
    console.info('found result page');

    await browser.waitForAngularEnabled(true);

    // finally go back to our page
    await browser.get('/');
    console.info('after back to homepage');
    expect(element(by.css('.user-name')).getText()).toEqual('Nick Jones');
  });

  it('should also work a 2nd time', async function() {
    await browser.get('/');
    console.info('have homepage 2x');
    expect(element(by.css('.user-name')).getText()).toEqual('Nick Jones');
  });
});
