const canvas = document.querySelector('#canvas');

const ctx = canvas.getContext('2d');

ctx.fillRect(50, 50, 200, 200);

// Will erase whatever it finds on the canvas.
// ctx.clearRect();

// Passing in arguments allows you to specify exactly where you want to erase.
ctx.clearRect(50, 50, 100, 100);

// Draws an outline, takes the same arguments:
ctx.strokeStyle = "green";
ctx.lineWidth = 4;
ctx.strokeRect(50, 50, 100, 100)

// We can also draw 'paths'.
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(100, 100);
ctx.lineTo(200, 80);
// ctx.stroke();
ctx.fillStyle ="rgba(0, 255, 0, 0.5"
ctx.fill();