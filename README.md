# Project 4: QA Automation Portfolio - E2E Purchase Flow

## 🎯 Project Overview

This project demonstrates **End-to-End (E2E) automated testing** using Playwright and JavaScript. I automated a complete purchase workflow on a demo e-commerce site, including login, product selection, cart verification, checkout, and order completion.

## 🛠️ Technologies Used

- **Playwright** (latest stable version)
- **JavaScript**
- **Node.js**
- **CSS Selectors** for element identification
- **Assertions** for data validation

## 📋 What This Script Does

The automated test performs the following steps:

1. **Login** - Authenticates user with valid credentials
2. **Add to Cart** - Selects a specific product (Sauce Labs Backpack)
3. **Cart Verification** - Navigates to cart and validates the correct item was added using an assertion
4. **Checkout Form** - Completes all required fields (first name, last name, postal code)
5. **Purchase Completion** - Finalizes the order and verifies success message

## 🔑 Key Skills Demonstrated

### 1. **Data Assertions**
Unlike basic automation that just clicks buttons, this script **validates data** to ensure the UI displays correct information:
```javascript
if (itemName === 'Sauce Labs Backpack') {
  console.log('✅ ASSERTION PASSED: Correct item found in cart.');
} else {
  console.log('❌ ASSERTION FAILED: Wrong item in cart!');
}
```

### 2. **Multi-Page State Management**
The script handles application state across multiple pages: Login → Inventory → Cart → Checkout → Confirmation

### 3. **Stable Locators**
Used specific CSS selectors (IDs and classes) that are less likely to break when the UI changes:
- `#add-to-cart-sauce-labs-backpack` (ID selector)
- `.shopping_cart_link` (class selector)
- `.inventory_item_name` (class selector)

## 📂 Files in This Repository

- **e2e_purchase_flow.js** - Complete E2E automation script
- **README.md** - Project documentation (this file)

## 🚀 How to Run This Script

### Using Try Playwright (No Installation Required):
1. Go to https://try.playwright.tech/
2. Copy the contents of `e2e_purchase_flow.js`
3. Paste into the editor
4. Click "Run"
5. Watch the automation execute and check the console for results

### Using Local Playwright Installation:
```bash
# Install Playwright
npm init playwright@latest

# Run the script
node e2e_purchase_flow.js
```

## ✅ Expected Test Results

When the script runs successfully, you should see:
```
Item added to cart...
✅ ASSERTION PASSED: Correct item found in cart.
Final Result: Thank you for your order!
```

## 🎓 What I Learned

- How to write **robust automated tests** that verify data, not just interactions
- How to handle **multi-step workflows** in test automation
- The difference between **passing and failing assertions**
- How to identify **false negatives** in automated testing
- Best practices for **selector strategies** to minimize test brittleness

## 🔗 Application Under Test

- **URL**: https://www.saucedemo.com/
- **Purpose**: Demo e-commerce site built specifically for QA practice

## 💼 Why This Matters for QA Roles

This project demonstrates skills that junior QA automation roles require:
- Writing maintainable automation code
- Implementing proper test assertions
- Handling real-world user workflows
- Understanding test failures vs. passes

---

**Project completed as part of QA automation skills development.**
