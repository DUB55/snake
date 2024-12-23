(function () {
    const hideElements = (selectors) => {
        selectors.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.display = 'none';
                console.log(`Successfully hid element: ${selector}`);
            } else {
                console.log(`Failed to find element: ${selector}`);
            }
        });
    };

    window.onload = function () {
        console.log('All resources loaded. Script execution begins.');

        (function () {
            const titleElement = document.querySelector('#mod-loader-title > h1');
            if (titleElement) {
                titleElement.style.color = '#0004ff';
                titleElement.innerHTML = '<strong>SNAKE HACKS</strong>';
                console.log('Modified title color and content.');
            }
        })();

        (function () {
            const imgSelectors = [
                '#mod-loader-title > span:nth-child(1) > a > img',
                '#mod-loader-title > span:nth-child(3) > a > img'
            ];
            imgSelectors.forEach(selector => {
                const imgElement = document.querySelector(selector);
                if (imgElement) {
                    imgElement.style.display = 'none';
                    console.log(`Successfully hid image: ${selector}`);
                } else {
                    console.log(`Failed to find image: ${selector}`);
                }
            });
        })();

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
                '#mod-descriptions > div:nth-child(3) > span:nth-child(3)',
                '#mod-descriptions > div:nth-child(4) > span:nth-child(3)',
                '#mod-descriptions > div:nth-child(5) > span:nth-child(3)',
                '#mod-descriptions > div:nth-child(6) > span:nth-child(3)',
                '#mod-descriptions > div:nth-child(7) > span:nth-child(3)',
                '#mod-descriptions > div:nth-child(8) > span:nth-child(3)',
                '#mod-descriptions > div:nth-child(9) > span:nth-child(3)',
                '#mod-descriptions > div:nth-child(10) > span:nth-child(3)',
                '#mod-descriptions > div:nth-child(1) > span:nth-child(3)', 
                '#mod-game-verson-div > label',
                '#mod-game-version',
                '#mod-game-verson-div > a',
                '#version-info',
                '#advanced-options-show-settings-text',
                '#advanced-options-toggle'
            ];

            selectorsToHide.push('#mod-descriptions > div:nth-child(2) > span:nth-child(3)'); 

            hideElements(selectorsToHide);
        })();

        (function () {
            function applyGradient(selector, gradient) {
                const element = document.querySelector(selector);
                if (element) {
                    element.style.background = gradient;
                    console.log(`Applied gradient to: ${selector}`);
                } else {
                    console.log(`Element with selector ${selector} not found`);
                }
            }

            applyGradient('#mod-selector-dialogue', 'linear-gradient(to top, #000033, #00008B)');
            applyGradient('#mod-indicator', 'linear-gradient(to top, rgb(0, 0, 51), rgb(0, 0, 139))');
        })();

        function styleElement(selector, color, fontWeight) {
            const element = document.querySelector(selector);
            if (element) {
                element.style.color = color;
                element.style.fontWeight = fontWeight;
                console.log(`Styled element: ${selector}`);
            }
        }

        for (let i = 1; i <= 10; i++) {
            styleElement(`#mod-descriptions > div:nth-child(${i}) > span:nth-child(1)`, 'white', 'bold');
        }

        const textSelectors = [
            { selector: '#mod-options > label:nth-child(11)', text: 'Geen Hacks' },
            { selector: '#close-mod-selector', text: 'Sluiten' },
            { selector: '#apply-mod', text: 'Spelen' },
            { selector: '#change-mod-button', text: 'Alle Hacks' },
            { selector: '#mod-indicator > span:nth-child(1)', text: 'Hack:    ' }
        ];

        textSelectors.forEach(({ selector, text }) => {
            const element = document.querySelector(selector);
            if (element) {
                element.innerHTML = text;
                console.log(`Modified text of element: ${selector}`);
            } else {
                console.log(`Failed to find element for text modification: ${selector}`);
            }
        });

        const titleElement = document.querySelector('#mod-loader-title');
        if (titleElement) {
            titleElement.style.color = 'transparent';
            console.log('Modified title color to transparent.');
        }

        console.log('Script executed successfully.');
    };
})();
// DONE!!!
