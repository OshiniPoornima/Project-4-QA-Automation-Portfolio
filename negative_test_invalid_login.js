const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('🧪 NEGATIVE TEST: Invalid Login Credentials');
  console.log('============================================');

  // STEP 1: GO TO LOGIN PAGE
  await page.goto('https://www.saucedemo.com/');
  console.log('✓ Navigated to login page');

  // STEP 2: ENTER INVALID CREDENTIALS
  await page.fill('#user-name', 'invalid_user');
  await page.fill('#password', 'wrong_password');
  console.log('✓ Entered invalid credentials');

  // STEP 3: CLICK LOGIN BUTTON
  await page.click('#login-button');
  console.log('✓ Clicked login button');

  // STEP 4: WAIT A MOMENT FOR ERROR TO APPEAR
  await page.waitForTimeout(1000); // Wait 1 second

  // STEP 5: VERIFY ERROR MESSAGE APPEARS
  const errorMessage = await page.textContent('[data-test="error"]');
  
  if (errorMessage && errorMessage.includes('Username and password do not match')) {
    console.log('✅ ASSERTION PASSED: Error message displayed correctly.');
    console.log('   Error message: "' + errorMessage + '"');
  } else {
    console.log('❌ ASSERTION FAILED: Expected error message not found.');
  }

  // STEP 6: VERIFY USER IS STILL ON LOGIN PAGE
  const currentUrl = page.url();
  
  if (currentUrl === 'https://www.saucedemo.com/') {
    console.log('✅ ASSERTION PASSED: User correctly stayed on login page (not allowed in).');
  } else {
    console.log('❌ ASSERTION FAILED: User should not have been able to login!');
    console.log('   Current URL: ' + currentUrl);
  }

  console.log('============================================');
  console.log('🏁 NEGATIVE TEST COMPLETED');
  console.log('   This test verifies the app correctly REJECTS invalid logins.');

  await browser.close();
})();
