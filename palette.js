function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  function rgbToHex(rgb) {
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    return "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase();
  }
  
  function generatePalette() {
    const steps = parseInt(document.getElementById("steps").value, 10);
    const paletteDisplay = document.getElementById("paletteDisplay");
    paletteDisplay.innerHTML = "";
  
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
  
  document.getElementById("generateButton").addEventListener("click", generatePalette);
  
  generatePalette();
  