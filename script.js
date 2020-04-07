const keys = [{
        RUS: 'ё',
        ENG: '`',
        RUS_capital: 'ё',
        ENG_capital: '~',
        keyName: 'Backquote',
    },
    {
        RUS: '1',
        ENG: '1',
        RUS_capital: '!',
        ENG_capital: '!',
        keyName: 'Digit1',
    },
    {
        RUS: '2',
        ENG: '2',
        RUS_capital: '"',
        ENG_capital: '@',
        keyName: 'Digit2',
    },
    {
        RUS: '3',
        ENG: '3',
        RUS_capital: '№',
        ENG_capital: '#',
        keyName: 'Digit3',
    },
    {
        RUS: '4',
        ENG: '4',
        RUS_capital: ';',
        ENG_capital: '$',
        keyName: 'Digit4',
    },
    {
        RUS: '5',
        ENG: '5',
        RUS_capital: '%',
        ENG_capital: '%',
        keyName: 'Digit5',
    },
    {
        RUS: '6',
        ENG: '6',
        RUS_capital: ':',
        ENG_capital: '^',
        keyName: 'Digit6',
    },
    {
        RUS: '7',
        ENG: '7',
        RUS_capital: '?',
        ENG_capital: '*',
        keyName: 'Digit7',
    },
    {
        RUS: '8',
        ENG: '8',
        RUS_capital: '*',
        ENG_capital: '*',
        keyName: 'Digit8',
    },
    {
        RUS: '9',
        ENG: '9',
        RUS_capital: '(',
        ENG_capital: '(',
        keyName: 'Digit9',
    },
    {
        RUS: '0',
        ENG: '0',
        RUS_capital: ')',
        ENG_capital: ')',
        keyName: 'Digit0',
    },
    {
        RUS: '-',
        ENG: '-',
        RUS_capital: '_',
        ENG_capital: '_',
        keyName: 'Minus',
    },
    {
        RUS: '=',
        ENG: '=',
        RUS_capital: '+',
        ENG_capital: '+',
        keyName: 'Equal',
    },
    {
        RUS: 'Backspace',
        ENG: 'Backspace',
        RUS_capital: 'Backspace',
        ENG_capital: 'Backspace',
        keyName: 'Backspace',
    },
    {
        RUS: 'Tab',
        ENG: 'Tab',
        RUS_capital: 'Tab',
        ENG_capital: 'Tab',
        keyName: 'Tab',
    },
    {
        RUS: 'й',
        ENG: 'q',
        RUS_capital: 'й',
        ENG_capital: 'q',
        keyName: 'KeyQ',
    },
    {
        RUS: 'ц',
        ENG: 'w',
        RUS_capital: 'ц',
        ENG_capital: 'w',
        keyName: 'KeyW',
    },
    {
        RUS: 'у',
        ENG: 'e',
        RUS_capital: 'у',
        ENG_capital: 'e',
        keyName: 'KeyE',
    },
    {
        RUS: 'к',
        ENG: 'r',
        RUS_capital: 'к',
        ENG_capital: 'r',
        keyName: 'KeyR',
    },
    {
        RUS: 'е',
        ENG: 't',
        RUS_capital: 'е',
        ENG_capital: 't',
        keyName: 'KeyT',
    },
    {
        RUS: 'н',
        ENG: 'y',
        RUS_capital: 'н',
        ENG_capital: 'y',
        keyName: 'KeyY',
    },
    {
        RUS: 'г',
        ENG: 'u',
        RUS_capital: 'г',
        ENG_capital: 'u',
        keyName: 'KeyU',
    },
    {
        RUS: 'ш',
        ENG: 'i',
        RUS_capital: 'ш',
        ENG_capital: 'i',
        keyName: 'KeyI',
    },
    {
        RUS: 'щ',
        ENG: 'o',
        RUS_capital: 'щ',
        ENG_capital: 'o',
        keyName: 'KeyO',
    },
    {
        RUS: 'з',
        ENG: 'p',
        RUS_capital: 'з',
        ENG_capital: 'p',
        keyName: 'KeyP',
    },
    {
        RUS: 'х',
        ENG: '[',
        RUS_capital: 'х',
        ENG_capital: '{',
        keyName: 'BracketLeft',
    },
    {
        RUS: 'ъ',
        ENG: ']',
        RUS_capital: 'ъ',
        ENG_capital: '}',
        keyName: 'BracketRight',
    },
    {
        RUS: '\\',
        ENG: '\\',
        RUS_capital: '/',
        ENG_capital: '|',
        keyName: 'Backslash',
    },
    {
        RUS: 'Del',
        ENG: 'Del',
        RUS_capital: 'Del',
        ENG_capital: 'Del',
        keyName: 'Delete',
    },
    {
        RUS: 'CapsLock',
        ENG: 'CapsLock',
        RUS_capital: 'CapsLock',
        ENG_capital: 'CapsLock',
        keyName: 'CapsLock',
    },
    {
        RUS: 'ф',
        ENG: 'a',
        RUS_capital: 'ф',
        ENG_capital: 'a',
        keyName: 'KeyA',
    },
    {
        RUS: 'ы',
        ENG: 's',
        RUS_capital: 'ы',
        ENG_capital: 's',
        keyName: 'KeyS',
    },
    {
        RUS: 'в',
        ENG: 'd',
        RUS_capital: 'в',
        ENG_capital: 'd',
        keyName: 'KeyD',
    },
    {
        RUS: 'а',
        ENG: 'f',
        RUS_capital: 'а',
        ENG_capital: 'f',
        keyName: 'KeyF',
    },
    {
        RUS: 'п',
        ENG: 'g',
        RUS_capital: 'п',
        ENG_capital: 'g',
        keyName: 'KeyG',
    },
    {
        RUS: 'р',
        ENG: 'h',
        RUS_capital: 'р',
        ENG_capital: 'h',
        keyName: 'KeyH',
    },
    {
        RUS: 'о',
        ENG: 'j',
        RUS_capital: 'о',
        ENG_capital: 'j',
        keyName: 'KeyJ',
    },
    {
        RUS: 'л',
        ENG: 'k',
        RUS_capital: 'л',
        ENG_capital: 'k',
        keyName: 'KeyK',
    },
    {
        RUS: 'д',
        ENG: 'l',
        RUS_capital: 'д',
        ENG_capital: 'l',
        keyName: 'KeyL',
    },
    {
        RUS: 'ж',
        ENG: ';',
        RUS_capital: 'ж',
        ENG_capital: ':',
        keyName: 'Semicolon',
    },
    {
        RUS: 'э',
        ENG: '\'',
        RUS_capital: 'э',
        ENG_capital: '"',
        keyName: 'Quote',
    },
    {
        RUS: 'Enter',
        ENG: 'Enter',
        RUS_capital: 'Enter',
        ENG_capital: 'Enter',
        keyName: 'Enter',
    },
    {
        RUS: 'Shift',
        ENG: 'Shift',
        RUS_capital: 'Shift',
        ENG_capital: 'Shift',
        keyName: 'ShiftLeft',
    },
    {
        RUS: 'я',
        ENG: 'z',
        RUS_capital: 'я',
        ENG_capital: 'z',
        keyName: 'KeyZ',
    },
    {
        RUS: 'ч',
        ENG: 'x',
        RUS_capital: 'ч',
        ENG_capital: 'x',
        keyName: 'KeyX',
    },
    {
        RUS: 'с',
        ENG: 'c',
        RUS_capital: 'с',
        ENG_capital: 'c',
        keyName: 'KeyC',
    },
    {
        RUS: 'м',
        ENG: 'v',
        RUS_capital: 'м',
        ENG_capital: 'v',
        keyName: 'KeyV',
    },
    {
        RUS: 'и',
        ENG: 'b',
        RUS_capital: 'и',
        ENG_capital: 'b',
        keyName: 'KeyB',
    },
    {
        RUS: 'т',
        ENG: 'n',
        RUS_capital: 'т',
        ENG_capital: 'n',
        keyName: 'KeyN',
    },
    {
        RUS: 'ь',
        ENG: 'm',
        RUS_capital: 'ь',
        ENG_capital: 'm',
        keyName: 'KeyM',
    },
    {
        RUS: 'б',
        ENG: ',',
        RUS_capital: 'б',
        ENG_capital: '<',
        keyName: 'Comma',
    },
    {
        RUS: 'ю',
        ENG: '.',
        RUS_capital: 'ю',
        ENG_capital: '>',
        keyName: 'Period',
    },
    {
        RUS: '.',
        ENG: '/',
        RUS_capital: ',',
        ENG_capital: '?',
        keyName: 'Slash',
    },
    {
        RUS: '▲',
        ENG: '▲',
        RUS_capital: '▲',
        ENG_capital: '▲',
        keyName: 'ArrowUp',
    },
    {
        RUS: 'Shift',
        ENG: 'Shift',
        RUS_capital: 'Shift',
        ENG_capital: 'Shift',
        keyName: 'ShiftRight',
    },
    {
        RUS: 'Ctrl',
        ENG: 'Ctrl',
        RUS_capital: 'Ctrl',
        ENG_capital: 'Ctrl',
        keyName: 'ControlLeft',
    },
    {
        RUS: 'Win',
        ENG: 'Win',
        RUS_capital: 'Win',
        ENG_capital: 'Win',
        keyName: 'MetaLeft',
    },
    {
        RUS: 'Alt',
        ENG: 'Alt',
        RUS_capital: 'Alt',
        ENG_capital: 'Alt',
        keyName: 'AltLeft',
    },
    {
        RUS: '',
        ENG: '',
        RUS_capital: '',
        ENG_capital: '',
        keyName: 'Space',
    },
    {
        RUS: 'Alt',
        ENG: 'Alt',
        RUS_capital: 'Alt',
        ENG_capital: 'Alt',
        keyName: 'AltRight',
    },
    {
        RUS: '◄',
        ENG: '◄',
        RUS_capital: '◄',
        ENG_capital: '◄',
        keyName: 'ArrowLeft',
    },
    {
        RUS: '▼',
        ENG: '▼',
        RUS_capital: '▼',
        ENG_capital: '▼',
        keyName: 'ArrowDown',
    },
    {
        RUS: '►',
        ENG: '►',
        RUS_capital: '►',
        ENG_capital: '►',
        keyName: 'ArrowRight',
    },
    {
        RUS: 'Ctrl',
        ENG: 'Ctrl',
        RUS_capital: 'Ctrl',
        ENG_capital: 'Ctrl',
        keyName: 'ControlRight',
    },
];


let LANGUAGE = localStorage.getItem('LANGUAGE') || 'ENG';

const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
document.body.append(textarea);

const keyboard = document.createElement('div');
keyboard.classList.add('container');
document.body.append(keyboard);

let arrayMain = ['Tab', 'Del', 'CapsLock', 'Enter', 'Shift', 'Backspace', 'Ctrl', 'Win', 'Alt', '◄', '▼', '▲', '►'];
let arrayWide = ['CapsLock', 'Enter', 'Shift', 'Backspace'];


keys.forEach((item) => {
    const key = document.createElement('div');

    key.innerHTML = LANGUAGE === 'RUS' ? item.RUS : item.ENG;
    key.classList.add('keyboard--key');
    if (item.RUS === '') key.classList.add('key--wider');
    if (item.RUS === 'Tab') key.classList.add('key--tab');
    if (item.RUS === 'Backspace') key.classList.add('backspace');
    if (arrayMain.includes(item.RUS)) key.classList.add('key--main');
    if (arrayWide.includes(item.RUS)) key.classList.add('key--wide');
    if (item.keyName === 'ControlRight') key.classList.add('key--controlright');
    keyboard.append(key);
});

const keysArray = Array.from(keyboard.children);
let CapsLock = false;
let cursorPosition = 0;
let кeyPosition = true;

function getCursorPosition() {
    if (document.selection) {
        textarea.focus();
        const Sel = document.selection.createRange();
        Sel.moveStart('character', -textarea.value.length);
        cursorPosition = Sel.textarea.length;
    } else if (textarea.selectionStart || textarea.selectionStart === '0') {
        cursorPosition = textarea.selectionStart;
    }
}

keyboard.addEventListener('mousedown', (element) => {
    if (element.target.classList.contains('keyboard--key')) element.target.classList.add('key--active');
    if (element.target.innerHTML === 'Shift') {
        for (let i = 0; i < keysArray.length; i += 1) {
            if (LANGUAGE === 'RUS') keysArray[i].innerHTML = keys[i].RUS_capital;
            else keysArray[i].innerHTML = keys[i].ENG_capital;
            if (!keysArray[i].classList.contains('key--main')) keysArray[i].innerHTML = keysArray[i].innerHTML.toUpperCase();
        }
    }
});

keyboard.addEventListener('mouseup', (element) => {
    if (element.target.innerHTML === 'Shift') {
        for (let i = 0; i < keysArray.length; i += 1) {
            if (LANGUAGE === 'RUS') keysArray[i].innerHTML = keys[i].RUS;
            else keysArray[i].innerHTML = keys[i].ENG;
            if (!keysArray[i].classList.contains('key--main')) keysArray[i].innerHTML = keysArray[i].innerHTML.toLowerCase();
        }
    }
    if (element.target.classList.contains('keyboard--key')) element.target.classList.remove('key--active');
});

document.addEventListener('keydown', (element) => {
    if (кeyPosition) {
        getCursorPosition();
        кeyPosition = false;
    }
    if (element.key.length <= 1) cursorPosition += 1;
    if (!textarea.focus()) {
        textarea.focus();
        textarea.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
    }
    if ((element.keyName === 'ShiftLeft' || element.keyName === 'ShiftRight') && (element.ctrlKey || element.metaKey)) {
        if (LANGUAGE === 'ENG') {
            LANGUAGE = 'RUS';
            for (let i = 0; i < keysArray.length; i += 1) keysArray[i].innerHTML = keys[i].RUS;
        } else {
            LANGUAGE = 'ENG';
            for (let i = 0; i < keysArray.length; i += 1) keysArray[i].innerHTML = keys[i].ENG;
        }
        localStorage.setItem('LANGUAGE', LANGUAGE);
    }
    if (element.keyName === 'ShiftLeft' || element.keyName === 'ShiftRight') {
        textarea.setSelectionRange(cursorPosition, cursorPosition);
        for (let i = 0; i < keysArray.length; i += 1) {
            if (LANGUAGE === 'RUS') keysArray[i].innerHTML = keys[i].RUS_capital;
            else keysArray[i].innerHTML = keys[i].ENG_capital;
            if (!keysArray[i].classList.contains('key--main')) keysArray[i].innerHTML = keysArray[i].innerHTML.toUpperCase();
        }
    }
    keysArray.forEach((item) => {
        if (item.id === element.keyName) item.classList.add('key--active');
    });
    if (element.keyName === 'CapsLock') {
        textarea.setSelectionRange(cursorPosition, cursorPosition);
        if (CapsLock === false) {
            CapsLock = true;
            for (let i = 0; i < keysArray.length; i += 1)
                if (!keysArray[i].classList.contains('key--main')) keysArray[i].innerHTML = keysArray[i].innerHTML.toUpperCase();
        } else {
            CapsLock = false;
            for (let i = 0; i < keysArray.length; i += 1)
                if (!keysArray[i].classList.contains('key--main')) keysArray[i].innerHTML = keysArray[i].innerHTML.toLowerCase();
        }
    }
    const arr = textarea.value.split('');
    if (element.keyName === 'Tab') {
        arr.splice(cursorPosition, 0, '    ');
        textarea.value = arr.join('');
        cursorPosition += 4;
    }
    if (element.keyName === 'ArrowUp') {
        arr.splice(cursorPosition, 0, '▲');
        textarea.value = arr.join('');
        cursorPosition += 1;
    }
    if (element.keyName === 'ArrowLeft') {
        arr.splice(cursorPosition, 0, '◄');
        textarea.value = arr.join('');
        cursorPosition += 1;
    }
    if (element.keyName === 'ArrowDown') {
        arr.splice(cursorPosition, 0, '▼');
        textarea.value = arr.join('');
        cursorPosition += 1;
    }
    if (element.keyName === 'ArrowRight') {
        arr.splice(cursorPosition, 0, '►');
        textarea.value = arr.join('');
        cursorPosition += 1;
    }
});

document.addEventListener('keyup', (element) => {
    if (element.keyName === 'ShiftLeft' || element.keyName === 'ShiftRight') {
        for (let i = 0; i < keysArray.length; i += 1) {
            if (LANGUAGE === 'RUS') keysArray[i].innerHTML = keys[i].RUS;
            else keysArray[i].innerHTML = keys[i].ENG;
            if (!keysArray[i].classList.contains('key--main')) keysArray[i].innerHTML = keysArray[i].innerHTML.toLowerCase();
        }
    }
    keysArray.forEach((item) => {
        if (item.id === element.keyName) item.classList.remove('key--active');
    });
});

keyboard.addEventListener('click', (element) => {
    if (element.target.innerHTML === 'CapsLock') {
        if (CapsLock === false) {
            CapsLock = true;
            for (let i = 0; i < keysArray.length; i += 1)
                if (!keysArray[i].classList.contains('key--main')) keysArray[i].innerHTML = keysArray[i].innerHTML.toUpperCase();
        } else {
            CapsLock = false;
            for (let i = 0; i < keysArray.length; i += 1)
                if (!keysArray[i].classList.contains('key--main')) keysArray[i].innerHTML = keysArray[i].innerHTML.toLowerCase();
        }
    }
    const arr = textarea.value.split('');
    if (!element.target.classList.contains('key--main') && element.target.classList.contains('keyboard--key')) {
        arr.splice(cursorPosition, 0, element.target.innerHTML);
        textarea.value = arr.join('');
        cursorPosition += 1;
    }
    switch (element.target.innerHTML) {
        case 'Tab':
            arr.splice(cursorPosition, 0, '    ');
            textarea.value = arr.join('');
            cursorPosition += 4;
            break;
        case 'Enter':
            arr.splice(cursorPosition, 0, '\n');
            textarea.value = arr.join('');
            cursorPosition += 1;
            break;
        case 'Backspace':
            arr.splice(cursorPosition - 1, 1);
            textarea.value = arr.join('');
            cursorPosition -= 1;
            break;
        case 'Del':
            arr.splice(cursorPosition, 1);
            textarea.value = arr.join('');
            break;
        case '':
            arr.splice(cursorPosition - 1, 0, ' ');
            textarea.value = arr.join('');
            break;
        case '▲':
            arr.splice(cursorPosition, 0, '▲');
            textarea.value = arr.join('');
            cursorPosition += 1;
            break;
        case '◄':
            arr.splice(cursorPosition, 0, '◄');
            textarea.value = arr.join('');
            cursorPosition += 1;
            break;
        case '▼':
            arr.splice(cursorPosition, 0, '▼');
            textarea.value = arr.join('');
            cursorPosition += 1;
            break;
        case '►':
            arr.splice(cursorPosition, 0, '►');
            textarea.value = arr.join('');
            cursorPosition += 1;
            break;
        default:
            break;
    }
});



textarea.addEventListener('click', getCursorPosition);

const description = document.createElement('div');
description.innerHTML = 'Клавиатура была создана на ОС Windows <br> Переключение языка: Ctrl + Shift';
description.classList.add('description');
document.body.append(description);