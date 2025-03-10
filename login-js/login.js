const snowflakes = ["❄", "❅", "❆", "✻", "✼"];

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
    document.body.appendChild(snowflake);

    const size = Math.random() * 20 + 10;
    snowflake.style.fontSize = `${size}px`;

    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.animationDuration = `${Math.random() * 7 + 7}s`; 

    setTimeout(() => {
        snowflake.remove();
    }, (Math.random() * 7 + 5) * 1500);
}

setInterval(createSnowflake, 200);

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createLightning() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const lightningCount = Math.floor(Math.random() * 3) + 1;  
    for (let i = 0; i < lightningCount; i++) {
        const startX = Math.random() * canvas.width; 
        drawLightning(startX, 0, 20, '#FFD700', '#FFA500'); 
    }
    setTimeout(() => { 
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
    }, 100);
}

function drawLightning(x, y, lineWidth, color, outerColor) {
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.shadowColor = outerColor;
    ctx.shadowBlur = 20;
    ctx.beginPath();
    ctx.moveTo(x, y);
    while (y < canvas.height) {
        x += Math.random() * 30 - 15;
        y += Math.random() * 20 + 10;
        ctx.lineTo(x, y);
    }
    ctx.stroke();
}

setInterval(createLightning, Math.random() * 4000 + 1000); 

let heartCount = 0;

document.addEventListener('click', function(e) {
    if (!e.target.closest('#heart-count')) {
        createHeart(e.pageX, e.pageY);
    }
});

function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${x - 10}px`; 
    heart.style.top = `${y - 10}px`;

    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    heart.style.filter = `drop-shadow(0 0 5px ${randomColor})`;

    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 10000); 

    heartCount++;
    document.getElementById('heart-count').textContent = `Click nhé <3: ${heartCount}`;

    setTimeout(() => {
        heart.remove();
    }, 1500); 

    if (heartCount >= 10) {
        window.location.href = "login.html"; 
    }
}
