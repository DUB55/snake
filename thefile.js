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

                // Make #mod-loader-title transparent
                const loaderTitle = document.querySelector('#mod-loader-title');
                if (loaderTitle) {
                    loaderTitle.style.background = 'transparent';
                    loaderTitle.style.color = 'transparent';
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
                }
            })();

            // Hide elements #mod-descriptions > div:nth-child(x) > span:nth-child(3) for x=1 to 10
            (function () {
                for (let i = 1; i <= 10; i++) {
                    const elementToHide = document.querySelector(`#mod-descriptions > div:nth-child(${i}) > span:nth-child(3)`);
                    if (elementToHide) {
                        elementToHide.style.display = 'none';
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
                }
            })();

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
