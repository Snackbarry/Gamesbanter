const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = "white";
ctx.fillRect(50, 50, 10, 50); // Paddle example
ctx.fillRect(540, 50, 10, 50); // Paddle example
ctx.beginPath();
ctx.arc(300, 200, 8, 0, Math.PI*2);
ctx.fill(); // Ball example
