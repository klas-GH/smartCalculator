---
name: calculator-feature-implementation
description: 'Implement new calculator features using AI-generated code. Use when adding new buttons, operations, functions (like square root, memory, percentage), or UI improvements. Includes review, testing, and quality checks.'
argument-hint: 'Describe the feature to implement (e.g., "add square root button", "add memory functions")'
---

# Implement Calculator Features

## When to Use
- Adding new number/operation buttons
- Adding mathematical functions (square root, percentage, memory)
- Implementing UI improvements
- Extending calculator capabilities

## Workflow

### 1. Generate Code with AI
**Goal**: Get AI-generated code for the feature across all three files

- Describe the feature clearly (what button/function, expected behavior)
- Ask AI to generate changes for:
  - **HTML**: New button(s) in `.buttons` div
  - **CSS**: Styling for new buttons (class names, colors)
  - **JS**: Logic in `calculator.js` (new functions, handlers, state management)
- Request specific file sections to modify, not full rewrites

### 2. Review Generated Changes
**Goal**: Validate code quality and consistency before applying

**HTML Check**:
- ✓ New button(s) added in correct grid location
- ✓ Proper `onclick` handlers or event binding
- ✓ Class names match CSS and JS

**CSS Check**:
- ✓ Styling for new button classes defined
- ✓ Color scheme matches existing design (purple/violet gradient theme)
- ✓ No conflicts with existing selectors

**JS Check**:
- ✓ New functions follow existing naming conventions (`appendNumber`, `setOperator`, `calculate`)
- ✓ Logic handles edge cases (division by zero, decimal points, multiple operations)
- ✓ State updates correctly (`currentInput`, `previousInput`, `operator`)
- ✓ Display updates via `updateDisplay()`

### 3. Apply Changes
- Copy generated code into the correct files
- Files to modify: `calculator.html`, `calculator.css`, `calculator.js`

### 4. Test in Browser Console
**Goal**: Verify feature works as expected

Steps:
1. Open `calculator.html` in browser
2. Open Developer Tools (F12 or Right-click → Inspect)
3. Go to **Console** tab
4. Test the feature:
   - Click buttons and verify display updates
   - Test edge cases (e.g., divide by zero, multiple operations)
   - Try keyboard/mouse interactions if added
5. Check for JavaScript errors in console

### 5. Quality Check
**Goal**: Ensure feature integrates cleanly with existing code

- ✓ No console errors or warnings
- ✓ Display updates correctly after each action
- ✓ Buttons are styled consistently
- ✓ Feature works in isolation and with other operations
- ✓ Edge cases handled gracefully (no crashes)

## Key Files
- [calculator.html](../../calculator.html) — Button definitions
- [calculator.css](../../calculator.css) — Styling
- [calculator.js](../../calculator.js) — Logic and state

## Example: Adding a Square Root Button

```
Feature: "Add a square root button that calculates √x"

HTML: <button class="btn operator" onclick="calculateSquareRoot()">√</button>
CSS: .operator { /* exists */ }
JS: function calculateSquareRoot() { currentInput = Math.sqrt(parseFloat(currentInput)).toString(); updateDisplay(); }

Test: Click √, enter 16, see 4
```
