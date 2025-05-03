// Generate a single random color in hex format
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  // Convert rgb to hex for display
  function rgbToHex(rgb) {
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    return "#" + [r, g, b]
      .map(x => x.toString(16).padStart(2, '0'))
      .join('')
      .toUpperCase();
  }
  
  // Generate the full palette
  function generatePalette() {
    const steps = parseInt(document.getElementById("steps").value, 10);
    const paletteDisplay = document.getElementById("paletteDisplay");
    paletteDisplay.innerHTML = ""; // Clear previous colors
  
    for (let i = 0; i < steps; i++) {
      const rgbColor = getRandomColor();
      const hexColor = rgbToHex(rgbColor);
  
      const colorBox = document.createElement("div");
      colorBox.classList.add("color-box");
      colorBox.style.backgroundColor = rgbColor;
      colorBox.textContent = hexColor;
  
      paletteDisplay.appendChild(colorBox);
    }
  }
  
  // Attach event to button
  document.getElementById("generateButton").addEventListener("click", generatePalette);
  
  // Optionally generate on page load
  generatePalette();
  