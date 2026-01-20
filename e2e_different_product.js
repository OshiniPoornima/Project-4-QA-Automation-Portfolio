const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('🧪 TEST: Add Different Product to Cart');
  console.log('=======================================');

  // STEP 1: LOGIN
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  console.log('✓ Login successful');

  // STEP 2: ADD DIFFERENT PRODUCT TO CART
  // This time we're adding the Bike Light instead of the Backpack
  await page.click('#add-to-cart-sauce-labs-bike-light');
  console.log('✓ Bike Light added to cart');

  // STEP 3: GO TO CART & VERIFY CORRECT PRODUCT
  await page.click('.shopping_cart_link');
  const itemName = await page.textContent('.inventory_item_name');

  // Assertion: Check if the correct product (Bike Light) is in cart
  if (itemName === 'Sauce Labs Bike Light') {
    console.log('✅ ASSERTION PASSED: Correct item (Bike Light) found in cart.');
  } else {
    console.log('❌ ASSERTION FAILED: Expected "Sauce Labs Bike Light" but found "' + itemName + '"');
  }

  // STEP 4: CHECKOUT FORM
  await page.click('#checkout');
  await page.fill('#first-name', 'Jane');
  await page.fill('#last-name', 'Smith');
  await page.fill('#postal-code', '54321');
  await page.click('#continue');
  console.log('✓ Checkout form completed');

  // STEP 5: FINAL FINISH
  await page.click('#finish');
  const successMessage = await page.textContent('.complete-header');
  console.log('✓ Final Result:', successMessage);

  console.log('=======================================');
  console.log('🏁 TEST COMPLETED');

  await browser.close();
})();
