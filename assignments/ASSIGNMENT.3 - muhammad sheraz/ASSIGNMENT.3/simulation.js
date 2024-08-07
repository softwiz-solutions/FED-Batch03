const canvas = document.getElementById('simulationCanvas');
const ctx = canvas.getContext('2d');

class Ball {
    constructor(x, y, radius, color, dx, dy) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = dx; // velocity in x direction
        this.dy = dy; // velocity in y direction
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        // Check for collision with canvas edges
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx; // Reverse x direction
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy; // Reverse y direction
        }

        // Update position
        this.x += this.dx;
        this.y += this.dy;

        // Draw the ball at the new position
        this.draw();
    }
}

// Create a ball instance
const ball = new Ball(400, 300, 30, 'blue', 2, 2);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ball.update(); // Update the ball's position
    requestAnimationFrame(animate); // Request the next frame
}

// Start the animation
animate();
