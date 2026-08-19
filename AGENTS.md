# Project Guidelines

## Architecture
- This is a dependency-free vanilla HTML/CSS/JavaScript PWA; do not introduce a framework or build tool for small feature changes.
- `index.html` defines the UI and calls the public functions used by inline button handlers.
- `calculator.js` owns calculator state, arithmetic, memory slots, history, theme persistence, keyboard input, and clipboard behavior.
- `calculator.css` owns responsive layout, themes, button styles, and animations.
- `service-worker.js` caches the app shell. Update `CACHE_NAME` when changing cached assets so installed clients receive the new files.
- `manifest.webmanifest` and `icons/` define install metadata and app icons.

## Conventions
- Preserve the existing global function names used by `index.html` (`appendNumber`, `setOperator`, `calculate`, and related handlers) unless you update every call site.
- Keep arithmetic results formatted through `formatNumber`; preserve the six-decimal display rule and friendly error strings documented in [README.md](README.md).
- Keep history and theme storage keys compatible with existing browser data: `calcHistory` and `calcTheme`.
- Keep touch targets and mobile-first responsive behavior intact when changing the UI. Use CSS variables for light/dark theme values.
- Use browser APIs only when supported by the existing browser-support assumptions: `localStorage`, Clipboard API, Service Worker API, and `<dialog>`.

## Validation
- There is no package manager, build script, lint configuration, or automated test suite in this repository.
- Check JavaScript syntax with `node --check calculator.js` after JavaScript changes.
- Serve the repository over HTTP for PWA behavior; for example, run `python -m http.server 8000` from the project root and open `http://localhost:8000/`.
- Smoke-test representative calculations, divide-by-zero and invalid-result handling, memory/history/theme persistence, keyboard input, clipboard feedback, responsive layout, and service-worker registration in a modern browser.
- Update [README.md](README.md) when user-visible features, supported behavior, or setup instructions change.
