function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
  }
  
  function rgbToHex(r, g, b) {
    return "#" + [r, g, b]
      .map(x => x.toString(16).padStart(2, "0"))
      .join("");
  }
  
  function generateGradient() {
    const color1 = document.getElementById("color1").value;
    const color2 = document.getElementById("color2").value;
    const steps = parseInt(document.getElementById("steps").value);
  
    const start = hexToRgb(color1);
    const end = hexToRgb(color2);
  
    const gradientDisplay = document.getElementById("gradientDisplay");
    gradientDisplay.innerHTML = "";
  
    for (let i = 0; i < steps; i++) {
      const ratio = i / (steps - 1);
      
      const r = Math.round(start[0] + ratio * (end[0] - start[0]));
      const g = Math.round(start[1] + ratio * (end[1] - start[1]));
      const b = Math.round(start[2] + ratio * (end[2] - start[2]));
  
      const hexColor = rgbToHex(r, g, b);
  
      const colorBox = document.createElement("div");
      colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      colorBox.style.height = "50px";
      colorBox.style.width = "100%";
      colorBox.style.display = "flex";
      colorBox.style.alignItems = "center";
      colorBox.style.justifyContent = "center";
      colorBox.style.color = "#fff";
      colorBox.style.fontWeight = "bold";
  
      const hexText = document.createElement("span");
      hexText.textContent = hexColor;
      colorBox.appendChild(hexText);
  
      gradientDisplay.appendChild(colorBox);
    }
  }
  
  document.getElementById("color1").addEventListener("input", generateGradient);
  document.getElementById("color2").addEventListener("input", generateGradient);
  document.getElementById("steps").addEventListener("input", generateGradient);
  
  generateGradient();
  