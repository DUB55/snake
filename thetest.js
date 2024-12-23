// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM fully loaded. Script execution begins.');

    // Function to hide elements based on the provided selectors
    function hideElements(selectors) {
        selectors.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) {
                element.style.display = 'none';
                console.log(`Successfully hid element: ${selector}`); // Log success
            } else {
                console.log(`Failed to find element: ${selector}`); // Log failure
            }
        });
    }

    // Function to apply gradient to a specific element
    function applyGradient(selector, gradient) {
        const element = document.querySelector(selector);
        if (element) {
            element.style.background = gradient;
            console.log(`Applied gradient to: ${selector}`);
        } else {
            console.log(`Element with selector ${selector} not found for gradient`);
        }
    }

    // Function to style elements (change color and font weight)
    function styleElement(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.style.color = 'white';
            element.style.fontWeight = 'bold';
            console.log(`Styled element: ${selector}`);
        } else {
            console.log(`Failed to style element: ${selector}`);
        }
    }

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
                    console.log('Modified title color and content.');
                } else {
                    console.log('Failed to find the title element.');
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
                '#mod-descriptions > div:nth-child(3) > span:nth-child(3)', // Added element to hide
                '#mod-game-verson-div > label',
                '#mod-game-version',
                '#mod-game-verson-div > a',
                '#version-info',
                '#advanced-options-show-settings-text',
                '#advanced-options-toggle'
            ];

            // Apply hiding logic after a short delay to ensure elements are loaded
            setTimeout(() => {
                hideElements(selectorsToHide);
            }, 1000); // Increased delay to give time for elements to load

            // Apply gradient to specific element
            applyGradient('#mod-selector-dialogue', 'linear-gradient(to top, #000033, #00008B)');

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
});
// end of the script ...
