# Javascript to edit the color of the menu:

// Function to apply gradient

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

// the id = #mod-selector-dialogue
