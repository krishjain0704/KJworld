document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    document.getElementById('explodeButton').addEventListener('click', () => {
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle());
        }
    });

    function Particle() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.size = Math.random() * 5 + 1;
        this.speedX = (Math.random() - 0.5) * 10;
        this.speedY = (Math.random() - 0.5) * 10;
        this.color = '#0f0';
    }

    Particle.prototype.update = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    };

    Particle.prototype.draw = function() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    };

    function handleParticles() {
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            if (particles[i].size <= 0.2) {
                particles.splice(i, 1);
                i--;
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleParticles();
        requestAnimationFrame(animate);
    }

    animate();
});
