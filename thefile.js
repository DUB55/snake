// Change the color of the title and modify its content
(function () {
    const titleElement = document.querySelector('#mod-loader-title > h1');
    if (titleElement) {
        titleElement.style.color = '#0004ff';
        titleElement.innerHTML = '<strong>SNAKE HACKS</strong>';
    }
})();

// Hide specific images
(function () {
    const imgSelectors = [
        '#mod-loader-title > span:nth-child(1) > a > img',
        '#mod-loader-title > span:nth-child(3) > a > img'
    ];
    imgSelectors.forEach(selector => {
        const imgElement = document.querySelector(selector);
        if (imgElement) {
            imgElement.style.display = 'none';
        }
    });
})();

// Hide elements based on the provided selectors
(function () {
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
})();

// Apply gradient to a specific element
(function () {
    function applyGradient(selector, gradient) {
        const element = document.querySelector(selector);
        if (element) {
            element.style.background = gradient;
            console.log(`nigga wrm open je console:: ${selector}`);
        } else {
            console.log(`Element with selector ${selector} not found`);
        }
    }

    applyGradient('#mod-selector-dialogue', 'linear-gradient(to top, #000033, #00008B)');
})();

// Function to style elements (change color and font weight)
function styleElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.color = 'white';
        element.style.fontWeight = 'bold';
    }
}

// Apply styles to 11 selectors
for (let i = 1; i <= 11; i++) {
    styleElement(`#mod-options > label:nth-child(${i})`);
}
