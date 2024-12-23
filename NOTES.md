now can you make these selectors be white (its text): #mod-descriptions > div:nth-child(1) > span:nth-child(1), #mod-descriptions > div:nth-child(2) > span:nth-child(1), all the way till #mod-descriptions > div:nth-child(10) > span:nth-child(1), so please make a for loop that starts with the first one, (1) and goes to 10, as only the child number changes, make sure that you make the text white and bold too.

And instead of making this red (            // Change the color of the title and modify its content
            (function () {
                const titleElement = document.querySelector('#mod-loader-title > h1');
                if (titleElement) {
                    titleElement.style.color = '#ff0000';
                    titleElement.innerHTML = '<strong>SNAKE HACKS</strong>';
                }
            })();), please make it this color: #0004ff

and can you change the text of these selectors: #mod-options > label:nth-child(1), #mod-options > label:nth-child(2), till #mod-options > label:nth-child(10), use a foor loop if possible, the text for the 1st one should become: "Hack 1", the second one should become: "Hack 2", and the 10th one should be "Hack 10", etc.

also change the text of this selector: #mod-options > label:nth-child(11), the text should become: "Geen Hacks"

also change the text of this selector: #close-mod-selector, to become: "Sluiten"

also change the text of this selector: #apply-mod to become: "Spelen"

also change the color of this selector: #mod-loader-title, to become transparent

also change the text of this selector: #change-mod-button, to become: "Alle Hacks"

also change the text of this selector: #mod-indicator > span:nth-child(1), to become: "Hack:    " (please include 4 spaces)

also let the color of this selector: #mod-indicator, become this color gradient: background: linear-gradient(to top, rgb(0, 0, 51), rgb(0, 0, 139));

Please provide a new full complete javascript script without any comments, and include console logs, and dont include any alerts
