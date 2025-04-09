let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');
let score = 0;
let x = Math.random() * 250;
let y = Math.random() * 250;

function drawTarget() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x + 25, y + 25, 25, 0, Math.PI * 2);
    ctx.fillStyle = "#ff4444";
    ctx.fill();
    ctx.closePath();
}

canvas.addEventListener('click', function(e) {
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;
    if (clickX > x && clickX < x + 50 && clickY > y && clickY < y + 50) {
        score++;
        document.getElementById('score').innerText = score;
        x = Math.random() * 250;
        y = Math.random() * 250;
        drawTarget();
    }
});

drawTarget();