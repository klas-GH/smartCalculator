// DOM Elements
const display = document.getElementById('display');
const expression = document.getElementById('expression');

// Calculator State
let currentInput = '';
let previousInput = '';
let operator = null;
let shouldResetDisplay = false;
let memory = [0, 0, 0]; // Three memory slots
let expressionStr = ''; // Track expression for preview

// Format number: max 6 decimals, trim trailing zeros
function formatNumber(num) {
    if (typeof num !== 'number' || isNaN(num)) return 'Error';
    
    // Handle very large/small numbers
    if (Math.abs(num) > 1e10 || (Math.abs(num) < 1e-10 && num !== 0)) {
        return num.toExponential(6);
    }
    
    // Round to 6 decimal places
    const rounded = Math.round(num * 1000000) / 1000000;
    
    // Convert to string and remove trailing zeros
    let str = rounded.toString();
    if (str.includes('.')) {
        str = str.replace(/\.?0+$/, '');
    }
    
    return str;
}

// Append number to current input
function appendNumber(num) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    
    // Prevent multiple decimal points
    if (num === '.' && currentInput.includes('.')) return;
    
    // Prevent leading zeros (except 0. or just 0)
    if (currentInput === '0' && num !== '.') {
        currentInput = num;
    } else {
        currentInput += num;
    }
    
    updateDisplay();
}

// Set operator
function setOperator(op) {
    if (currentInput === '') return;
    
    // If there's already a pending operation, calculate it first
    if (previousInput !== '' && operator !== null && !shouldResetDisplay) {
        calculate();
    }
    
    operator = op;
    previousInput = currentInput;
    expressionStr = currentInput + ' ' + op;
    currentInput = '';
    shouldResetDisplay = false;
    updateDisplay();
}

// Power operation (x^y)
function setPower() {
    setOperator('**');
}

// Square root (unary operation)
function setSquareRoot() {
    if (currentInput === '') return;
    
    const num = parseFloat(currentInput);
    
    // Error handling for negative square root
    if (num < 0) {
        currentInput = 'Error: Invalid';
        shouldResetDisplay = true;
        updateDisplay();
        return;
    }
    
    const result = Math.sqrt(num);
    currentInput = formatNumber(result);
    shouldResetDisplay = true;
    updateDisplay();
}

// Main calculate function
function calculate() {
    if (previousInput === '' || currentInput === '' || operator === null) return;
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    try {
        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '−':
                result = prev - current;
                break;
            case '×':
                result = prev * current;
                break;
            case '÷':
                if (current === 0) {
                    currentInput = 'Error: Divide by zero';
                    operator = null;
                    previousInput = '';
                    shouldResetDisplay = true;
                    updateDisplay();
                    return;
                }
                result = prev / current;
                break;
            case '**':
                result = Math.pow(prev, current);
                break;
            default:
                return;
        }
        
        // Check for invalid results
        if (!isFinite(result)) {
            currentInput = 'Error: Invalid result';
        } else {
            currentInput = formatNumber(result);
            // Add to history
            const historyEntry = `${formatNumber(prev)} ${operator} ${formatNumber(current)} = ${currentInput}`;
            addToHistory(historyEntry);
        }
        
        expressionStr = '';
        operator = null;
        previousInput = '';
        shouldResetDisplay = true;
    } catch (e) {
        currentInput = 'Error';
        operator = null;
        previousInput = '';
        shouldResetDisplay = true;
    }
    
    updateDisplay();
}

// Clear current entry (C)
function clearCurrent() {
    currentInput = '';
    shouldResetDisplay = false;
    updateDisplay();
}

// Clear all (AC) - full reset
function clearAll() {
    currentInput = '';
    previousInput = '';
    operator = null;
    expressionStr = '';
    shouldResetDisplay = false;
    updateDisplay();
}

// Backspace - remove last digit
function backspace() {
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
    }
}

// Memory: Store value in slot (1-3)
function storeMemory(slot) {
    if (currentInput === '' || currentInput.includes('Error')) return;
    
    const value = parseFloat(currentInput);
    if (!isNaN(value)) {
        memory[slot - 1] = value;
        updateMemoryIndicators();
        shouldResetDisplay = true;
    }
}

// Memory: Recall value from slot (1-3)
function recallMemory(slot) {
    const value = memory[slot - 1];
    if (value !== 0) {
        currentInput = formatNumber(value);
        shouldResetDisplay = true;
        updateDisplay();
    }
}

// Memory: Clear all slots
function clearAllMemory() {
    memory = [0, 0, 0];
    updateMemoryIndicators();
}

// Update memory indicator dots
function updateMemoryIndicators() {
    for (let i = 0; i < 3; i++) {
        const slot = document.getElementById('mem' + (i + 1));
        const dot = slot.querySelector('.dot');
        if (memory[i] !== 0) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    }
}

// Update display and expression preview
function updateDisplay() {
    display.value = currentInput;
    
    // Update expression preview
    if (operator !== null && previousInput !== '') {
        expression.value = previousInput + ' ' + operator;
    } else {
        expression.value = '';
    }
}

// ============= HISTORY MANAGEMENT =============
let history = [];
let historyExpanded = false;

function addToHistory(calc) {
    history.unshift(calc); // Add to beginning
    if (history.length > 50) history.pop(); // Keep max 50 items
    saveHistoryToStorage();
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    const historyList = document.getElementById('historyList');
    
    if (history.length === 0) {
        historyList.innerHTML = '<p class="empty-history">No calculations yet</p>';
        return;
    }
    
    const visibleHistory = historyExpanded ? history : history.slice(0, 1);
    historyList.innerHTML = visibleHistory.map((calc) =>
        `<div class="history-item" onclick="useHistoryItem('${calc.replace(/'/g, "\\'")}')">
            <span>${calc}</span>
            <span class="history-arrow">→</span>
        </div>`
    ).join('');
}

function toggleHistory() {
    historyExpanded = !historyExpanded;
    const historyPanel = document.querySelector('.history-panel');
    if (historyPanel) {
        historyPanel.classList.toggle('expanded', historyExpanded);
    }

    const toggle = document.getElementById('historyToggle');
    if (toggle) {
        toggle.textContent = historyExpanded ? 'Hide' : 'Show all';
        toggle.setAttribute('aria-expanded', String(historyExpanded));
    }
    updateHistoryDisplay();
    const calc = document.querySelector('.calculator');
    if (calc) {
        calc.scrollTop = 0;
    }
}

function useHistoryItem(calc) {
    // Parse result from history string (e.g., "25 × 4 = 100")
    const parts = calc.split(' = ');
    if (parts.length === 2) {
        currentInput = parts[1];
        shouldResetDisplay = true;
        updateDisplay();
    }
}

function clearHistory() {
    document.getElementById('historyConfirmDialog').showModal();
}

function closeHistoryDialog() {
    document.getElementById('historyConfirmDialog').close();
}

function confirmClearHistory() {
    history = [];
    historyExpanded = false;
    localStorage.removeItem('calcHistory');
    document.querySelector('.history-panel').classList.remove('expanded');
    const toggle = document.getElementById('historyToggle');
    toggle.textContent = 'Show all';
    toggle.setAttribute('aria-expanded', 'false');
    updateHistoryDisplay();
    closeHistoryDialog();
}

function saveHistoryToStorage() {
    localStorage.setItem('calcHistory', JSON.stringify(history));
}

function loadHistoryFromStorage() {
    const saved = localStorage.getItem('calcHistory');
    if (saved) {
        try {
            history = JSON.parse(saved);
            updateHistoryDisplay();
        } catch (e) {
            console.error('Failed to load history:', e);
        }
    }
}

// ============= THEME MANAGEMENT =============
let isDarkMode = false;

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('calcTheme', isDarkMode ? 'dark' : 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = document.getElementById('themeIcon');
    icon.textContent = isDarkMode ? '☀️' : '🌙';
}

function loadThemeFromStorage() {
    const saved = localStorage.getItem('calcTheme');
    if (saved === 'dark') {
        isDarkMode = true;
        document.body.classList.add('dark-mode');
        updateThemeIcon();
    }
}

// ============= KEYBOARD SUPPORT =============
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // Numbers 0-9
    if (/^\d$/.test(key)) {
        appendNumber(key);
        return;
    }
    
    // Decimal point
    if (key === '.') {
        appendNumber('.');
        return;
    }
    
    // Operations
    switch (key) {
        case '+':
            setOperator('+');
            break;
        case '-':
            setOperator('−');
            break;
        case '*':
            event.preventDefault();
            setOperator('×');
            break;
        case '/':
            event.preventDefault();
            setOperator('÷');
            break;
        case 'Enter':
        case '=':
            event.preventDefault();
            calculate();
            break;
        case 'Escape':
            clearAll();
            break;
        case 'Backspace':
            event.preventDefault();
            backspace();
            break;
        case 'c':
        case 'C':
            if (!event.ctrlKey && !event.metaKey) {
                clearCurrent();
            }
            break;
    }
});

// ============= COPY TO CLIPBOARD =============
function copyResult() {
    const value = display.value;
    if (value && !value.includes('Error')) {
        navigator.clipboard.writeText(value).then(() => {
            // Show feedback
            const btn = document.getElementById('copyBtn');
            const original = btn.textContent;
            btn.textContent = '✓';
            btn.classList.add('copied');
            setTimeout(() => {
                btn.textContent = original;
                btn.classList.remove('copied');
            }, 1500);
        });
    }
}

// ============= PWA INSTALLATION =============
let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    const installBtn = document.getElementById('installBtn');
    if (installBtn && !window.matchMedia('(display-mode: standalone)').matches) {
        installBtn.style.display = 'inline-flex';
    }
});

function installApp() {
    if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        deferredInstallPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                const installBtn = document.getElementById('installBtn');
                if (installBtn) installBtn.style.display = 'none';
            }
            deferredInstallPrompt = null;
        });
    }
}

window.addEventListener('appinstalled', () => {
    const installBtn = document.getElementById('installBtn');
    if (installBtn) installBtn.style.display = 'none';
    deferredInstallPrompt = null;
});

// ============= INITIALIZATION =============
loadThemeFromStorage();
loadHistoryFromStorage();
