/* Eclipse Games - Shared Logic */
const settings = {
    animationEnabled: localStorage.getItem('animationEnabled') !== 'false',
    theme: localStorage.getItem('theme') || localStorage.getItem('selectedTheme') || 'theme-bw',
    particleType: localStorage.getItem('particleType') || 'snow',
    urlSpoof: localStorage.getItem('urlSpoof') || '',
    lowQuality: localStorage.getItem('lowQuality') === 'true'
};

function initializeSettings() {
    document.body.classList.add(settings.theme);
    const color = localStorage.getItem('selectedColor');
    if (color) {
        document.body.classList.add('color-' + color);
        applyColorStyle(color);
    }
    if (!settings.animationEnabled) {
        document.body.classList.add('animations-disabled', 'no-particles');
    }
}

function applyColorStyle(color) {
    if (!color) return;
    const colorMap = {
        red: { primary: '#ff4444', light: '#ff6666' },
        blue: { primary: '#4488ff', light: '#6699ff' },
        green: { primary: '#44ff88', light: '#66ff99' },
        purple: { primary: '#bb44ff', light: '#dd66ff' },
        orange: { primary: '#ff8844', light: '#ff9955' },
        pink: { primary: '#ff44dd', light: '#ff66ee' },
        cyan: { primary: '#44ffff', light: '#66ffff' },
        yellow: { primary: '#ffdd44', light: '#ffee66' }
    };
    const c = colorMap[color];
    if (!c) return;
    let styleEl = document.getElementById('color-style');
    if (styleEl) styleEl.remove();
    styleEl = document.createElement('style');
    styleEl.id = 'color-style';
    styleEl.textContent = `:root{--accent-color:${c.primary};--accent-light:${c.light};} .s-btn.accent{background:linear-gradient(135deg,${c.primary},${c.light});}`;
    document.head.appendChild(styleEl);
}

const ParticleEngine = (function() {
    let animId, canvas, ctx, W, H;
    
    function init(targetCanvas) {
        canvas = targetCanvas;
        if (!canvas) return;
        ctx = canvas.getContext('2d');
        resize();
        window.addEventListener('resize', resize);
        if (settings.animationEnabled) start();
        else canvas.style.display = 'none';
    }

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    function start() {
        const type = settings.particleType;
        if (type === 'snow') initSnow();
        else if (type === 'stars') initStars();
        else if (type === 'rain') initRain();
        else if (type === 'bubbles') initBubbles();
        else if (type === 'embers') initEmbers();
        else if (type === 'matrix') initMatrix();
        else if (type === 'grid') initGrid();
        else if (type === 'banner') document.body.classList.add('banner-bg');
    }

    function initSnow() {
        const flakes = Array.from({ length: 100 }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 3 + 1, d: Math.random() }));
        let a = 0;
        function draw() {
            ctx.clearRect(0, 0, W, H);
            ctx.fillStyle = 'rgba(255,255,255,0.8)';
            ctx.beginPath();
            for (const f of flakes) { ctx.moveTo(f.x, f.y); ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2); }
            ctx.fill();
            a += 0.01;
            for (const f of flakes) { f.y += Math.pow(f.d, 2) + 0.8; f.x += Math.sin(a) * 0.4; if (f.y > H) f.y = 0; }
            animId = requestAnimationFrame(draw);
        }
        draw();
    }

    function initStars() {
        const stars = Array.from({ length: 150 }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.5 + 0.2, tw: Math.random() * Math.PI * 2, sp: Math.random() * 0.02 }));
        function draw() {
            ctx.clearRect(0, 0, W, H);
            for (const s of stars) {
                s.tw += s.sp;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${0.3 + 0.7 * Math.abs(Math.sin(s.tw))})`;
                ctx.fill();
            }
            animId = requestAnimationFrame(draw);
        }
        draw();
    }

    function initRain() {
        const drops = Array.from({ length: 80 }, () => ({ x: Math.random() * W, y: Math.random() * H, len: Math.random() * 15 + 5, sp: Math.random() * 7 + 5 }));
        function draw() {
            ctx.clearRect(0, 0, W, H);
            ctx.strokeStyle = 'rgba(150,200,255,0.5)';
            ctx.lineWidth = 1;
            for (const d of drops) {
                ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(d.x - 1, d.y + d.len); ctx.stroke();
                d.y += d.sp; if (d.y > H) d.y = -d.len;
            }
            animId = requestAnimationFrame(draw);
        }
        draw();
    }

    function initBubbles() {
        const b = Array.from({ length: 40 }, () => ({ x: Math.random() * W, y: H + Math.random() * H, r: Math.random() * 15 + 5, sp: Math.random() * 1 + 0.3, w: Math.random() * 6 }));
        function draw() {
            ctx.clearRect(0, 0, W, H);
            for (const bub of b) {
                bub.w += 0.02; bub.y -= bub.sp; bub.x += Math.sin(bub.w) * 0.5;
                if (bub.y < -bub.r) bub.y = H + bub.r;
                ctx.beginPath(); ctx.arc(bub.x, bub.y, bub.r, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(180,130,255,0.4)'; ctx.stroke();
            }
            animId = requestAnimationFrame(draw);
        }
        draw();
    }

    function initEmbers() {
        const e = Array.from({ length: 70 }, () => ({ x: Math.random() * W, y: H + Math.random() * H, r: Math.random() * 2 + 0.5, sp: Math.random() * 1.5 + 0.5, l: Math.random() }));
        function draw() {
            ctx.clearRect(0, 0, W, H);
            for (const em of e) {
                em.y -= em.sp; em.l -= 0.003;
                if (em.y < 0 || em.l <= 0) { em.y = H; em.l = 1; }
                ctx.beginPath(); ctx.arc(em.x, em.y, em.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,${100 + 80 * em.l},20,${em.l})`; ctx.fill();
            }
            animId = requestAnimationFrame(draw);
        }
        draw();
    }

    function initMatrix() {
        const fs = 14, cols = Math.floor(W / fs), drops = Array(cols).fill(1), chars = '01'.split('');
        function draw() {
            ctx.fillStyle = 'rgba(0,0,0,0.08)'; ctx.fillRect(0, 0, W, H);
            ctx.fillStyle = '#0f0'; ctx.font = fs + 'px monospace';
            for (let i = 0; i < drops.length; i++) {
                ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fs, drops[i] * fs);
                if (drops[i] * fs > H && Math.random() > 0.98) drops[i] = 0;
                drops[i]++;
            }
            animId = requestAnimationFrame(draw);
        }
        draw();
    }

    function initGrid() {
        let mx = -999, my = -999;
        window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
        const CELL = 40;
        function draw() {
            ctx.clearRect(0, 0, W, H);
            for (let r = 0; r < H / CELL; r++) {
                for (let c = 0; c < W / CELL; c++) {
                    const cx = c * CELL, cy = r * CELL, d = Math.hypot(cx - mx, cy - my), g = Math.max(0, 1 - d / 150);
                    ctx.strokeStyle = `rgba(255,255,255,${0.1 + g * 0.4})`;
                    ctx.strokeRect(cx, cy, CELL, CELL);
                }
            }
            animId = requestAnimationFrame(draw);
        }
        draw();
    }

    return { init };
})();

document.addEventListener('DOMContentLoaded', () => {
    initializeSettings();
    const canvas = document.getElementById('bgCanvas');
    if (canvas) ParticleEngine.init(canvas);
});
