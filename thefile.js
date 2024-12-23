// Wait for the DOM to be fully loaded before running the script
window.onload = function () {
    console.log('All resources loaded. Script execution begins.');

    // Function to attach the event listener to the button
    const attachClickListener = (button) => {
        console.log('Attaching event listener to the button.');
        button.addEventListener('click', () => {
            console.log('Button clicked! Running the script...');

            // Change the color of the title and modify its content
            (function () {
                const titleElement = document.querySelector('#mod-loader-title > h1');
                if (titleElement) {
                    titleElement.style.color = '#ff0000';
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
                }
            }

            // Apply styles to 11 selectors
            for (let i = 1; i <= 11; i++) {
                styleElement(`#mod-options > label:nth-child(${i})`);
            }

            console.log('Script executed successfully.');
        });
    };

    // Check for the button's existence when the window loads
    const button = document.querySelector('#change-mod-button');
    if (button) {
        attachClickListener(button);
    } else {
        console.log('Button not found initially. Observing for dynamic changes.');

        // Use MutationObserver to detect if the button is dynamically added to the DOM
        const observer = new MutationObserver(() => {
            const dynamicButton = document.querySelector('#change-mod-button');
            if (dynamicButton) {
                console.log('Dynamically added button found.');
                attachClickListener(dynamicButton);
                observer.disconnect(); // Stop observing once the button is found
            }
        });

        // Observe the body for changes (child elements added to the DOM)
        observer.observe(document.body, { childList: true, subtree: true });
    }
};
