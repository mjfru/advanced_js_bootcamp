/*
! Canvas API
* The canvas API enables drawing graphics via JavaScript and the HTML <canvas> element!
*/

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 100, 100);