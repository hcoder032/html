let heartCount = 0;

document.addEventListener('click', function(e) {
        createHeart(e.pageX, e.pageY);
    
});

function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${x - 10}px`; 
    heart.style.top = `${y - 10}px`;

    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    heart.style.filter = `drop-shadow(0 0 5px ${randomColor})`;

    document.body.appendChild(heart);

    heartCount++;
    document.getElementById('heart-count').textContent = `Click nhé <3:${heartCount}`;

    setTimeout(() => {
        heart.remove();
    }, 10000); 
    if (heartCount >= 10) { window.location.href = "login"; 
        }
}
