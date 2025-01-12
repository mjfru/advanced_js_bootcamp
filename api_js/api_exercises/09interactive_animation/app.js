const canvas = document.querySelector('#ballCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

const balls = [];

// Make a Class (Ball) to keep track of each ball that is loaded on to our page after a user clicks.
class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    //? Part 2. Adding Velocity to make these move
    this.xVel = (Math.random() - 0.5) * 10;
    this.yVel = (Math.random() - 0.5) * 10;

    // Make a random size, guaranteeing the minimum size is at least 10.
    this.size = Math.random() * 30 + 10;
    this.color = Ball.getRandomColor();
  }
  // Since we'll never use this on an instance of a ball and it's only used in the Ball class, let's make a static helper method to generate a random color for each ball produced:
  static getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  draw() {
    // Draw a circle at the click event:
    ctx.beginPath();
    // Setting a random color:
    ctx.fillStyle = this.color;

    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  update() {
    // Checking if it's about to hit the edge:
    if((this.x + this.size) >= canvas.width || (this.x - this.size) <= 0) {
      this.xVel = -this.xVel;
    }
    if((this.y + this.size) >= canvas.height || (this.y - this.size) <= 0) {
      this.yVel = -this.yVel;
    }
    // Causing the movement, takes its initial coordinates and subtracts the velocity value
    this.x += this.xVel;
    this.y += this.yVel;

    // Bonus: Gravity
    if((this.y + this.size) < canvas.height) {
      this.yVel += 0.2;
    }
  }
}

function loop() {
  // Every frame, we'll wipe the slate clean to give the appearing of moving, rather than drawing
  ctx.fillStyle = '#f2f2f2';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let ball of balls) {
    ball.update();
    ball.draw();
  }
  requestAnimationFrame(loop);
}
loop();

// Listen for a 'click' on the canvas
canvas.addEventListener('click', (e) => {
  // console.log(`You clicked at ${e.clientX}, ${e.clientY}`)
  //? Making a new ball by using the instructor method, it's passed the 'click' coordinates as it's arguments for x and y.
  const ball = new Ball(e.clientX, e.clientY);
  // ball.draw();
  balls.push(ball);
});