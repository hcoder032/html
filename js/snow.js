const snowflakes = ["❄", "❅", "❆", "✻", "✼"];

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
    document.body.appendChild(snowflake);

    const size = Math.random() * 20 + 10; // Kích thước lớn hơn
    snowflake.style.fontSize = `${size}px`;

    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.animationDuration = `${Math.random() * 7 + 7}s`; // Tốc độ rơi lững thững

    setTimeout(() => {
        snowflake.remove();
    }, (Math.random() * 7 + 5) * 1500);
}

setInterval(createSnowflake, 200);

// Thêm hiệu ứng sét
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function createLightning() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
     const lightningCount = Math.floor(Math.random() * 3) + 1; // Random từ 1 đến 3 tia sét 
     for (let i = 0; i < lightningCount; i++) { const startX = Math.random() * canvas.width; drawLightning(startX, 0, 20, '#FFD700', '#FFA500'); // Màu vàng và viền màu cam
         } setTimeout(() => { ctx.clearRect(0, 0, canvas.width, canvas.height); }, 100); // Sét xuất hiện trong thời gian ngắn 
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

setInterval(createLightning, Math.random() * 4000 + 1000); // Tạo sét ngẫu nhiên
