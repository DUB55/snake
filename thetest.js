(function () {
    // Function to hide elements and log success or failure
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

    // Wait for the DOM to be fully loaded before running the script
    window.onload = function () {
        console.log('All resources loaded. Script execution begins.');

        // Change the color of the title and modify its content
        (function () {
            const titleElement = document.querySelector('#mod-loader-title > h1');
            if (titleElement) {
                titleElement.style.color = '#ff0000';
                titleElement.innerHTML = '<strong>SNAKE HACKS</strong>';
                console.log('Modified title color and content.');
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
                    console.log(`Successfully hid image: ${selector}`);
                } else {
                    console.log(`Failed to find image: ${selector}`);
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

            hideElements(selectorsToHide);
        })();

        // Apply gradient to a specific element
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

        // Function to style elements (change color and font weight)
        function styleElement(selector) {
            const element = document.querySelector(selector);
            if (element) {
                element.style.color = 'white';
                element.style.fontWeight = 'bold';
                console.log(`Styled element: ${selector}`);
            }
        }

        // Apply styles to 11 selectors
        for (let i = 1; i <= 11; i++) {
            styleElement(`#mod-options > label:nth-child(${i})`);
        }

        console.log('Script executed successfully.');
    };

})();
