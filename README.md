# Advanced Calculator

A fully-featured, production-ready calculator built with vanilla HTML, CSS, and JavaScript. Designed with a mobile-first approach and packed with modern features for everyday use.

## Features

### Core Functionality
- **6 Mathematical Operations**: Addition (+), Subtraction (−), Multiplication (×), Division (÷), Power (x^y), Square Root (√)
- **Smart Controls**: 
  - `=` Calculate result
  - `C` Clear current entry (keeps operation)
  - `AC` All Clear (full reset)
  - `.` Decimal point
  - `⌫` Backspace to remove last digit
- **3 Independent Memory Slots**:
  - `M1`, `M2`, `M3` - Store values
  - `RM1`, `RM2`, `RM3` - Recall values
  - `MC` - Clear all memory
  - Memory indicators show which slots contain values

### Number Formatting
- Maximum **6 decimal places** for precision
- Automatically trims unnecessary trailing zeros
- Handles very large and small numbers gracefully
- Prevents leading zeros (except for decimals)

### Polish Features
✨ **Calculation History**
- Shows all previous calculations with auto-formatted results
- Click any history item to reuse its result
- Persists up to 50 calculations in localStorage
- Clear history button with confirmation

✨ **Keyboard Support** (Desktop)
- `0-9` - Number input
- `+ - * /` - Operations
- `Enter` or `=` - Calculate
- `Escape` - Clear all
- `Backspace` - Delete last digit

✨ **Dark/Light Theme**
- Toggle between light and dark modes
- Theme preference persists across sessions
- Smooth transitions on all elements
- Complete color scheme adaptation

✨ **User Experience**
- Expression preview shows current calculation (`25 × 12`)
- Subtle animations (pulse, slide-in, scale effects)
- Copy result to clipboard with feedback
- Touch-friendly buttons (48px+ minimum)
- Responsive design for mobile, tablet, and desktop

✨ **Error Handling**
- Friendly error messages (not raw errors):
  - "Error: Divide by zero"
  - "Error: Invalid" (negative square root)
  - "Error: Invalid result" (overflow cases)

## Design

### Mobile-First Responsive Layout
- Optimized for phones with touch targets ≥ 44-48px
- Adapts smoothly to tablets and desktops
- Centered calculator on larger screens
- Proper padding and spacing for all devices

### Visual Design
- Clean, modern interface
- Color-coded button types:
  - Gray: Number buttons
  - Purple: Operators
  - Orange: Control buttons (C, AC, ⌫)
  - Green: Equals button
  - Pink: Memory store (M1-M3)
  - Blue: Memory recall (RM1-RM3)
  - Indigo: Memory clear
- Subtle shadows and hover effects
- Memory indicators with animated pulses

## Technical Stack
- **HTML5** - Semantic structure
- **CSS3** - Flexbox/Grid layout, CSS variables for theming, animations
- **Vanilla JavaScript** - No dependencies, pure implementation
- **LocalStorage API** - Persistent history and theme preference

## How to Use

### Basic Calculations
1. Click numbers to enter them
2. Click an operator (+, −, ×, ÷, x^y, √)
3. Enter the second number
4. Click `=` to see the result

### Memory Functions
1. Enter a number and click `M1`, `M2`, or `M3` to store it
2. Click `RM1`, `RM2`, or `RM3` to recall a stored value
3. Click `MC` to clear all memory slots
4. Watch the dots next to memory labels - they show when slots are filled

### Clearing
- `C` - Clears just the current number (keeps your operation going)
- `AC` - Fully resets the calculator

### Desktop Keyboard
- Type numbers and operators directly
- Press `Enter` to calculate
- Press `Escape` to clear all
- Press `Backspace` to delete

### History
- Your last calculations appear at the bottom
- Click any history item to load its result
- Click 🗑️ to clear history

### Theme
- Click 🌙 (or ☀️ in dark mode) to toggle between light and dark themes
- Your preference is saved automatically

### Copy
- Click 📋 to copy the current result to your clipboard
- Visual feedback confirms the copy

## Browser Support
- Modern browsers with ES6 support
- LocalStorage API (for history and theme persistence)
- Clipboard API (for copy function)
- CSS Grid and Flexbox

## Example Calculations
- `5 + 3 = 8`
- `2 x^y 3 = 8`
- `√16 = 4`
- `10 ÷ 3 = 3.333333` (6 decimal formatting)
- `9 − 5 = 4`

## Error Cases Handled
- Division by zero → "Error: Divide by zero"
- Negative square root → "Error: Invalid"
- Overflow results → "Error: Invalid result"
- Invalid expressions → Graceful handling

## Performance
- Instant calculations (no delays)
- Smooth animations (60fps)
- Lightweight code (single HTML, CSS, JS file)
- No external dependencies

## License
Open source - feel free to use and modify for your projects.

## Credits
Built as a modern, feature-rich calculator demonstration showcasing:
- Vanilla JavaScript (no frameworks)
- Responsive design principles
- Dark mode implementation
- LocalStorage usage
- Keyboard accessibility
- Error handling best practices

---

**Last Updated**: 2026-08-19  
**Version**: 1.0.0
