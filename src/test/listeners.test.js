const puppeteer = require('puppeteer');

it('should work', () => {
  const thisIsTrue = true;
  expect(thisIsTrue).toBe(true);
});

test('should create a new task', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();