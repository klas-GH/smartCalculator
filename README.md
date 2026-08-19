# Advanced Calculator

A fully-featured, production-ready calculator built with vanilla HTML, CSS, and JavaScript. Designed with a mobile-first approach and packed with modern features for everyday use.

## Live Demo

Use the calculator online: https://klas-gh.github.io/smartCalculator/

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
- Shows the latest calculation by default
- Click `Show all` to access the complete history
- Click any history item to reuse its result
- Clear history button with a custom confirmation dialog
- Stores up to 50 calculations per browser

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
- The latest calculation appears by default
- Click `Show all` to view the complete history
- Click any history item to load its result
- Click 🗑️ and confirm to clear history

### Storage
- Calculation history and theme preference are saved in browser `localStorage`
- Data is stored separately for each browser and device
- History is not shared between devices or browsers

## Install on a Phone

The calculator is a Progressive Web App (PWA) and can be installed from a supported browser:

1. Open the live demo in Chrome or another supported mobile browser
2. Open the browser menu
3. Choose **Add to Home screen** or **Install app**

The app shell is cached for offline use after the first visit. Calculation history and theme settings remain stored separately in each browser.

### Android Deployment Checklist

- Host the app over HTTPS (or use `localhost` during development); Android browsers do not install service workers from ordinary HTTP hosts.
- Deploy `index.html`, `calculator.css`, `calculator.js`, `manifest.webmanifest`, `service-worker.js`, and the complete `icons/` directory together.
- Open the deployed URL in Chrome for Android and use **Install app** or **Add to Home screen**.
- After changing cached files, increment `CACHE_NAME` in `service-worker.js` so installed clients receive the new app shell.
- This project is packaged as an installable Android PWA. Creating a Play Store APK/AAB would require a separate Android wrapper such as Trusted Web Activity or Capacitor.


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
