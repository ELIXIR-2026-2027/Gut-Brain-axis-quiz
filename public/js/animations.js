// Microbe animation setup
function createMicrobes() {
    const canvas = document.createElement('canvas');
    canvas.className = 'microbe-canvas';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const ctx = canvas.getContext('2d');
    const microbes = [];
    
    // Create 6 microbes
    for (let i = 0; i < 6; i++) {
        microbes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 20 + 10,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            color: `hsl(${Math.random() * 60 + 280}, 70%, 60%)`
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        microbes.forEach(m => {
            m.x += m.vx;
            m.y += m.vy;
            
            if (m.x - m.radius < 0 || m.x + m.radius > canvas.width) m.vx *= -1;
            if (m.y - m.radius < 0 || m.y + m.radius > canvas.height) m.vy *= -1;
            
            ctx.fillStyle = m.color;
            ctx.beginPath();
            ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Initialize animations on page load
window.addEventListener('DOMContentLoaded', () => {
    // createMicrobes();
    console.log('✨ Quiz animations loaded');
});