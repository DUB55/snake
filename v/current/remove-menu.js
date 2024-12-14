function hideElementsBelowPoint(yPoint) {
  // Get all elements in the body
  const elements = document.body.getElementsByTagName('*');
  
  // Iterate through all elements
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const rect = element.getBoundingClientRect();
    
    // If the element is entirely below the yPoint, hide it
    if (rect.top >= yPoint) {
      element.style.visibility = 'hidden';
    }
    // If the element is partially below the yPoint, clip it
    else if (rect.bottom > yPoint) {
      element.style.clipPath = `inset(0 0 ${rect.bottom - yPoint}px 0)`;
    }
  }
  
  // Add an invisible horizontal line at the yPoint
  const line = document.createElement('div');
  line.style.position = 'fixed';
  line.style.left = '0';
  line.style.right = '0';
  line.style.top = yPoint + 'px';
  line.style.height = '1px';
  line.style.backgroundColor = 'transparent';
  line.style.zIndex = '9999';
  document.body.appendChild(line);
}

// Example usage: Hide elements below 800 pixels from the top
hideElementsBelowPoint(800);
