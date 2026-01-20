const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('🧪 TEST: Remove Item from Cart');
  console.log('================================');

  // STEP 1: LOGIN
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  console.log('✓ Login successful');

  // STEP 2: ADD ITEM TO CART
  await page.click('#add-to-cart-sauce-labs-backpack');
  console.log('✓ Item added to cart');

  // STEP 3: GO TO CART
  await page.click('.shopping_cart_link');
  console.log('✓ Navigated to cart');

  // STEP 4: VERIFY ITEM IS IN CART (Before Removal)
  const itemBeforeRemoval = await page.textContent('.inventory_item_name');
  if (itemBeforeRemoval === 'Sauce Labs Backpack') {
    console.log('✅ ASSERTION PASSED: Item confirmed in cart before removal.');
  } else {
    console.log('❌ ASSERTION FAILED: Item not found in cart.');
  }

  // STEP 5: REMOVE ITEM FROM CART
  await page.click('#remove-sauce-labs-backpack');
  console.log('✓ Remove button clicked');

  // STEP 6: VERIFY CART IS EMPTY
  // We check if the cart badge (item count) is gone or if there are no items
  const cartBadge = await page.locator('.shopping_cart_badge').count();
  
  if (cartBadge === 0) {
    console.log('✅ ASSERTION PASSED: Cart is empty (no badge showing).');
  } else {
    console.log('❌ ASSERTION FAILED: Cart badge still visible - cart not empty!');
  }

  // STEP 7: ADDITIONAL CHECK - Verify no items in cart list
  const itemsInCart = await page.locator('.cart_item').count();
  
  if (itemsInCart === 0) {
    console.log('✅ ASSERTION PASSED: No items found in cart list.');
  } else {
    console.log('❌ ASSERTION FAILED: Found ' + itemsInCart + ' item(s) still in cart.');
  }

  console.log('================================');
  console.log('🏁 TEST COMPLETED');
  console.log('   This test verifies items can be successfully removed from cart.');

  await browser.close();
})();
