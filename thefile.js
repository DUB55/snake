(function () {
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
                '#advanced-options-toggle',
                '#mod-descriptions > div:nth-child(2) > span:nth-child(3)'
            ];
            selectorsToHide.forEach(selector => {
                const element = document.querySelector(selector);
                if (element) {
                    element.style.display = 'none';
                    console.log(`Successfully hid element: ${selector}`);
                } else {
                    console.log(`Failed to find element: ${selector}`);
                }
            });
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
        })();

        (function () {
            for (let i = 1; i <= 10; i++) {
                const selector = `#mod-descriptions > div:nth-child(${i}) > span:nth-child(1)`;
                const element = document.querySelector(selector);
                if (element) {
                    element.style.color = 'white';
                    element.style.fontWeight = 'bold';
                    console.log(`Styled element: ${selector}`);
                } else {
                    console.log(`Failed to find element: ${selector}`);
                }
            }
        })();

        (function () {
            for (let i = 1; i <= 10; i++) {
                const labelSelector = `#mod-options > label:nth-child(${i})`;
                const labelElement = document.querySelector(labelSelector);
                if (labelElement) {
                    labelElement.innerHTML = `Hack ${i}`;
                    console.log(`Changed text for: ${labelSelector} to Hack ${i}`);
                } else {
                    console.log(`Failed to find label: ${labelSelector}`);
                }
            }
        })();

        (function () {
            const labelSelector = '#mod-options > label:nth-child(11)';
            const labelElement = document.querySelector(labelSelector);
            if (labelElement) {
                labelElement.innerHTML = 'Geen Hacks';
                console.log('Changed text for: #mod-options > label:nth-child(11) to Geen Hacks');
            } else {
                console.log('Failed to find label: #mod-options > label:nth-child(11)');
            }
        })();

        (function () {
            const closeButton = document.querySelector('#close-mod-selector');
            if (closeButton) {
                closeButton.innerHTML = 'Sluiten';
                console.log('Changed text for: #close-mod-selector to Sluiten');
            } else {
                console.log('Failed to find button: #close-mod-selector');
            }
        })();

        (function () {
            const applyButton = document.querySelector('#apply-mod');
            if (applyButton) {
                applyButton.innerHTML = 'Spelen';
                console.log('Changed text for: #apply-mod to Spelen');
            } else {
                console.log('Failed to find button: #apply-mod');
            }
        })();

        (function () {
            const titleElement = document.querySelector('#mod-loader-title');
            if (titleElement) {
                titleElement.style.opacity = '0';
                console.log('Changed color of #mod-loader-title to transparent');
            } else {
                console.log('Failed to find title: #mod-loader-title');
            }
        })();

        (function () {
            const changeButton = document.querySelector('#change-mod-button');
            if (changeButton) {
                changeButton.innerHTML = 'Alle Hacks';
                console.log('Changed text for: #change-mod-button to Alle Hacks');
            } else {
                console.log('Failed to find button: #change-mod-button');
            }
        })();

        (function () {
            const indicatorText = document.querySelector('#mod-indicator > span:nth-child(1)');
            if (indicatorText) {
                indicatorText.innerHTML = 'Hack:    ';
                console.log('Changed text for: #mod-indicator > span:nth-child(1) to Hack:    ');
            } else {
                console.log('Failed to find text: #mod-indicator > span:nth-child(1)');
            }
        })();

        (function () {
            const indicatorElement = document.querySelector('#mod-indicator');
            if (indicatorElement) {
                indicatorElement.style.background = 'linear-gradient(to top, rgb(0, 0, 51), rgb(0, 0, 139))';
                console.log('Changed background gradient for: #mod-indicator');
            } else {
                console.log('Failed to find element: #mod-indicator');
            }
        })();

        console.log('Script executed successfully.');
    };
})();
// THE SCRIPT IS UPDATED IG IG ...
