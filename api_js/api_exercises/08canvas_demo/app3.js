const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = "rgb(255, 0, 0)";

// Arcs take lots of params, X Y coordinates, a radius, beginning and end angle

ctx.beginPath();
ctx.arc(145, 145, 50, 0, 2 * Math.PI);
ctx.stroke();
