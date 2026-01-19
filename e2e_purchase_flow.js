const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // STEP 1: LOGIN
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // STEP 2: ADD TO CART
  await page.click('#add-to-cart-sauce-labs-backpack');
  console.log('Item added to cart...');

  // STEP 3: GO TO CART & VERIFY
  await page.click('.shopping_cart_link');
  const itemName = await page.textContent('.inventory_item_name');

  if (itemName === 'Sauce Labs Backpack') {
    console.log('✅ ASSERTION PASSED: Correct item found in cart.');
  } else {
    console.log('❌ ASSERTION FAILED: Wrong item in cart!');
  }

  // STEP 4: CHECKOUT FORM
  await page.click('#checkout');
  await page.fill('#first-name', 'John');
  await page.fill('#last-name', 'Doe');
  await page.fill('#postal-code', '12345');
  await page.click('#continue');

  // STEP 5: FINAL FINISH
  await page.click('#finish');
  const successMessage = await page.textContent('.complete-header');
  console.log('Final Result:', successMessage);

  await browser.close();
})();
