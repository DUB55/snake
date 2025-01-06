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

                // Make #mod-loader-title transparent and remove the border
                const loaderTitle = document.querySelector('#mod-loader-title');
                if (loaderTitle) {
                    loaderTitle.style.background = 'transparent';
                    loaderTitle.style.color = 'transparent';
                    loaderTitle.style.border = 'none';  // Remove the border
                }

                // Style the strong text in #mod-loader-title
                const titleStrong = document.querySelector('#mod-loader-title > h1 > strong');
                if (titleStrong) {
                    titleStrong.style.color = '#ffffff';
                    titleStrong.style.fontFamily = 'Arial Black, sans-serif';
                    titleStrong.style.fontWeight = 'bold';
                }
            })();

            // Apply modifications to #mod-indicator and its child
            (function () {
                const modIndicator = document.querySelector('#mod-indicator');
                if (modIndicator) {
                    modIndicator.style.color = 'darkblue';
                }

                const modIndicatorText = document.querySelector('#mod-indicator > span:nth-child(1)');
                if (modIndicatorText) {
                    modIndicatorText.style.color = 'white';
                    modIndicatorText.style.fontWeight = 'bold';
                    modIndicatorText.textContent = 'Hacks: ';
                }
            })();

            // Style text for #mod-descriptions child elements (1-10)
            (function () {
                for (let i = 1; i <= 10; i++) {
                    const textElement = document.querySelector(`#mod-descriptions > div:nth-child(${i}) > span:nth-child(1)`);
                    if (textElement) {
                        textElement.style.color = 'white';
                        textElement.style.fontWeight = 'bold';
                    }

                    // Hide elements #mod-descriptions > div:nth-child(x) > span:nth-child(5) for x=1 to 10
                    const elementToHide = document.querySelector(`#mod-descriptions > div:nth-child(${i}) > span:nth-child(5)`);
                    if (elementToHide) {
                        elementToHide.style.display = 'none';
                    }

                    // Hide elements #mod-descriptions > div:nth-child(x) > span:nth-child(3) for x=1 to 10
                    const elementToHideChild3 = document.querySelector(`#mod-descriptions > div:nth-child(${i}) > span:nth-child(3)`);
                    if (elementToHideChild3) {
                        elementToHideChild3.style.display = 'none';
                    }
                }
            })();

            // Change the text of specific selectors
            (function () {
                const closeModSelector = document.querySelector('#close-mod-selector');
                if (closeModSelector) {
                    closeModSelector.textContent = 'Terug';
                }

                const applyModButton = document.querySelector('#apply-mod');
                if (applyModButton) {
                    applyModButton.textContent = 'Spelen';
                    // Keep the text 'Spelen' on the button (avoid it returning to its old text)
                    applyModButton.disabled = true;  // Prevent further changes to the button text
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
