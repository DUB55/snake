// Change the color of the title
const titleElement = document.querySelector('#mod-loader-title > h1');
if (titleElement) {
    titleElement.style.color = '#ff0000';
    titleElement.innerHTML = '<strong>SNAKE HACKS</strong>';
}

// Hide specific images
document.querySelector('#mod-loader-title > span:nth-child(1) > a > img').style.display = 'none';
document.querySelector('#mod-loader-title > span:nth-child(3) > a > img').style.display = 'none';

// Hide elements based on the provided selectors
const selectorsToHide = [
    '#mod-descriptions > div:nth-child(10) > span:nth-child(5)',
    '#mod-descriptions > div:nth-child(9) > span:nth-child(5)',
    '#mod-descriptions > div:nth-child(8) > span:nth-child(5)',
    '#mod-descriptions > div:nth-child(7) > span:nth-child(5)',
    '#mod-descriptions > div:nth-child(6) > span:nth-child(5)',
    '#mod-descriptions > div:nth-child(5) > span:nth-child(5)',
    '#mod-descriptions > div:nth-child(4) > span:nth-child(5)',
    '#mod-descriptions > div:nth-child(3) > span:nth-child(5)',
    '#mod-descriptions > div:nth-child(2) > span:nth-child(5)',
    '#mod-descriptions > div:nth-child(1) > span:nth-child(5)',
    '#mod-descriptions > div:nth-child(2) > span:nth-child(3)',
    '#mod-descriptions > div:nth-child(3) > span:nth-child(3)',
    '#mod-descriptions > div:nth-child(4) > span:nth-child(3)',
    '#mod-descriptions > div:nth-child(5) > span:nth-child(3)',
    '#mod-descriptions > div:nth-child(6) > span:nth-child(3)',
    '#mod-descriptions > div:nth-child(7) > span:nth-child(3)',
    '#mod-descriptions > div:nth-child(8) > span:nth-child(3)',
    '#mod-descriptions > div:nth-child(9) > span:nth-child(3)',
    '#mod-descriptions > div:nth-child(10) > span:nth-child(3)',
    '#mod-descriptions > div:nth-child(1) > span:nth-child(3)', // Newly added
    '#mod-game-verson-div > label',
    '#mod-game-version',
    '#mod-game-verson-div > a',
    '#version-info',
    '#advanced-options-show-settings-text',
    '#advanced-options-toggle'
];

selectorsToHide.forEach(selector => {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = 'none';
    }
});

// Apply gradient to a specific element
function applyGradient(selector, gradient) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.background = gradient;
        console.log(`Gradient applied to ${selector}`);
    } else {
        console.log(`Element with selector ${selector} not found`);
    }
}

applyGradient('#mod-selector-dialogue', 'linear-gradient(to top, #000033, #00008B)');
