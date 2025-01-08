// Select the canvas
const canvas = document.querySelector('#canvas');

// Gives us access to many methods within canvas, we'll be working with 2d only.
const ctx = canvas.getContext('2d');

// Provide a color
ctx.fillStyle = "rgb(255, 0, 0)";

// X axis, Y axis, width, height
ctx.fillRect(0, 0, 200, 80);

// Make another one...
ctx.fillStyle = "rgba(0, 255, 0, 0.5)"
ctx.fillRect(100, 50, 200, 180);