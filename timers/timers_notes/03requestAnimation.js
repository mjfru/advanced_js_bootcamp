/*
! requestAnimationFrame
* While this is timing related, it's specifically designed for animations.

*/

const boxInterval = document.getElementById('boxInterval');
const boxAnimationFrame = document.getElementById('boxAnimationFrame');

let intervalAngle = 0;
let animationFrameAngle = 0;

function animateWithInterval() {
  boxInterval.style.transform = "rotate(" + intervalAngle + "deg)";
  intervalAngle += 2;
  requestAnimationFrame(animateWithAnimationFrame);
}

function animateWithAnimationFrame() {
  boxAnimationFrame.style.transform = "rotate(" + animationFrameAngle + "deg)";
  animationFrameAngle += 2;
}

// Start
// Useful when you have some operation you need to run after some milliseconds and need to continue to run.
setInterval(animateWithInterval, 16); // 60 FPS approx.

// Rewrite
// It doesn't use a set interval but rather a callback before the next browser refresh; smoother and more performant.
requestAnimationFrame(animateWithAnimationFrame);