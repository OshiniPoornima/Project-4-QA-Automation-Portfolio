# Project 4: QA Automation Portfolio - E2E Test Suite

## 🎯 Project Overview

This project demonstrates **comprehensive End-to-End (E2E) automated testing** using Playwright and JavaScript. I created a complete test suite with **4 different test scenarios** covering positive tests, negative tests, and edge cases for a demo e-commerce application.

This showcases real-world QA skills including test design, assertion implementation, and multi-scenario test coverage.

## 🛠️ Technologies Used

- **Playwright** (latest stable version, 2024-2026)
- **JavaScript (ES6+)**
- **Node.js**
- **CSS Selectors** (IDs and classes) for robust element identification
- **Assertions** for comprehensive data validation
- **Async/Await** for handling asynchronous operations

## 📋 Test Suite Coverage

### **Test 1: Complete Purchase Flow (Positive Test)**
**File**: `e2e_purchase_flow.js`

**Scenario**: User successfully purchases a Sauce Labs Backpack

**Steps**:
1. Login with valid credentials
2. Add Sauce Labs Backpack to cart
3. Navigate to cart and verify correct item
4. Complete checkout form
5. Finalize purchase and verify success message

**Key Learning**: Data assertions to validate UI displays correct product information

---

### **Test 2: Different Product Purchase (Positive Test)**
**File**: `e2e_different_product.js`

**Scenario**: User successfully purchases a Sauce Labs Bike Light

**Steps**:
1. Login with valid credentials
2. Add Sauce Labs Bike Light to cart (different product)
3. Navigate to cart and verify correct different item
4. Complete checkout form with different user data
5. Finalize purchase

**Key Learning**: Demonstrates ability to adapt selectors and assertions for different test data

---

### **Test 3: Invalid Login (Negative Test)**
**File**: `negative_test_invalid_login.js`

**Scenario**: User attempts login with invalid credentials

**Steps**:
1. Navigate to login page
2. Enter invalid username and password
3. Click login button
4. Verify error message appears
5. Verify user remains on login page (not authenticated)

**Key Learning**: Testing failure scenarios and security - verifying the app correctly rejects bad credentials

---

### **Test 4: Remove Item from Cart (Destructive Action Test)**
**File**: `e2e_remove_from_cart.js`

**Scenario**: User adds item to cart, then removes it

**Steps**:
1. Login with valid credentials
2. Add item to cart
3. Navigate to cart and verify item is present
4. Remove item from cart
5. Verify cart badge disappears
6. Verify cart list is empty

**Key Learning**: Testing destructive operations and empty states with multiple assertion checks

---

## 🔑 Key QA Skills Demonstrated

### 1. **Comprehensive Test Coverage**
- ✅ Positive tests (happy path scenarios)
- ✅ Negative tests (error handling)
- ✅ Edge cases (empty states, different data)
- ✅ Destructive operations (delete/remove)

### 2. **Data Validation with Assertions**
Every test includes assertions that verify expected vs. actual results:
```javascript
if (itemName === 'Sauce Labs Backpack') {
  console.log('✅ ASSERTION PASSED: Correct item found in cart.');
} else {
  console.log('❌ ASSERTION FAILED: Wrong item in cart!');
}
```

### 3. **Multiple Verification Points**
Tests use multiple checks to ensure thorough validation:
- Cart badge count
- Item presence in cart list
- URL verification
- Error message content

### 4. **Stable, Maintainable Locators**
Used specific CSS selectors that minimize test brittleness:
- ID selectors: `#add-to-cart-sauce-labs-backpack`
- Class selectors: `.shopping_cart_link`
- Data attributes: `[data-test="error"]`

### 5. **Multi-Page State Management**
Tests handle application state across multiple pages:
Login → Inventory → Cart → Checkout → Confirmation

---

## 📂 Repository Structure
```
Project-4-qa-automation-portfolio/
│
├── e2e_purchase_flow.js           # Test 1: Complete purchase
├── e2e_different_product.js       # Test 2: Different product
├── negative_test_invalid_login.js # Test 3: Failed login
├── e2e_remove_from_cart.js        # Test 4: Remove from cart
└── README.md                       # This documentation
```

---

## 🚀 How to Run These Tests

### **Option 1: Try Playwright (No Installation Required)**
1. Go to https://try.playwright.tech/
2. Copy the contents of any `.js` file
3. Paste into the editor
4. Click "Run"
5. Check console for test results

### **Option 2: Local Playwright Installation**
```bash
# Install Playwright
npm init playwright@latest

# Run individual tests
node e2e_purchase_flow.js
node e2e_different_product.js
node negative_test_invalid_login.js
node e2e_remove_from_cart.js
```

---

## ✅ Expected Test Results

### Positive Tests (Tests 1, 2, 4):
```
✅ ASSERTION PASSED: Correct item found in cart.
Final Result: Thank you for your order!
```

### Negative Test (Test 3):
```
✅ ASSERTION PASSED: Error message displayed correctly.
✅ ASSERTION PASSED: User correctly stayed on login page.
```

---

## 🎓 What I Learned

- How to design a **comprehensive test suite** with multiple scenarios
- The importance of **negative testing** alongside positive tests
- How to test **edge cases** like empty states
- Writing **maintainable assertions** that clearly communicate pass/fail
- The difference between testing actions vs. testing outcomes
- Best practices for **test organization** and documentation

---

## 🔗 Application Under Test

- **URL**: https://www.saucedemo.com/
- **Purpose**: Demo e-commerce site built specifically for QA practice
- **Test Users**: standard_user / secret_sauce

---

## 💼 Why This Project Matters for QA Roles

This project demonstrates the **complete skill set** junior QA automation roles require:

✅ **Test Design**: Creating multiple test scenarios covering different use cases  
✅ **Automation Implementation**: Writing clean, maintainable test code  
✅ **Quality Mindset**: Testing both success and failure paths  
✅ **Technical Documentation**: Clear explanation of test coverage and approach  

**This is portfolio-ready work that proves I can contribute to a QA team immediately.**

---

## 📧 Contact

Feel free to explore the code and reach out with questions!

---

**Project completed as part of comprehensive QA automation skills development.**
