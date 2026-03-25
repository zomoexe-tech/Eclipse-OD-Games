/* Eclipse Games - Shared Logic */
const settings = {
    animationEnabled: localStorage.getItem('animationEnabled') !== 'false',
    theme: localStorage.getItem('theme') || localStorage.getItem('selectedTheme') || 'theme-bw',
    particleType: localStorage.getItem('particleType') || 'snow',
    urlSpoof: localStorage.getItem('urlSpoof') || '',
    lowQuality: localStorage.getItem('lowQuality') === 'true'
};

const games = [
    "5b/", "ages-of-conflict/", "angry-birds/", "animal-arena/", "animals-volleyball/",
    "armed-forces-io/", "bacon-may-die/", "bad-piggies/", "bank-robbery/", "bank-robbery-2/",
    "bank-robbery-3/", "basket-random/", "basketball-stars/", "basketbros-io/", "battle-wheels/",
    "bitlife/", "block-blast/", "blumgi-ball/", "blumgi-bloom/", "blumgi-castle/",
    "blumgi-dragon/", "blumgi-paintball/", "blumgi-racers/", "blumgi-rocket/", "blumgi-slime/",
    "blumgi-soccer/", "bobble/", "breaking-the-bank/", "buenos-aires/", "BuildNowGG/",
    "bullet-bros/", "bulletzio/", "burnout-extreme-drift-2/", "candy-crush/", "catpad/",
    "chicago/", "chicken-merge/", "chicken-merge-2/", "choppy-orc/", "cluster-rush/",
    "cookie-clicker/", "core-ball/", "cow-bay/", "crazy-bikes/", "crazy-cars/",
    "crossy-road/", "csgo-clicker/", "cut-the-rope/", "dadish/", "dadish-2/",
    "dadish-3/", "dadish-3d/", "day-of-meat-castle/", "day-of-meat-radiation/", "doodle-jump/",
    "double-panda/", "dreadhead-parkour/", "drift-boss/", "drift-hunters/", "drive-mad/",
    "ducklings-io/", "dune/", "eaglercraft/", "eclicker/", "economical/",
    "economical-2/", "emulatorjs/", "escaping-the-prison/", "fantasy-fest/", "flappy-bird/",
    "fleeing-the-complex/", "flip-bros/", "four-colors/", "funny-shooter-2/", "GBA-Emulator/",
    "geometry-dash/", "gladihoppers/", "gobattle/", "gobble/", "gold-digger-fr-vr/",
    "goober-world/", "googlebaseball/", "greece-love-odyssey/", "happy-wheels/", "hawaii/",
    "idle-breakout/", "idle-farming-business/", "idle-gang/", "idle-light-city/", "idle-mining-empire/",
    "idle-startup-tycoon/", "infiltrating-the-airship/", "iron-snout/", "jacksmith/", "jump-only/",
    "justfalllol/", "karlson/", "ks-2-teams/", "level-devil/", "london/",
    "mario-64/", "master-checkers/", "master-chess/", "merge-the-numbers/", "merge-tycoon/",
    "mine-line/", "minecraft-1.12/", "monkey-mart/", "monkeytype-lite/", "monster-tracks/",
    "moto-x3m/", "motox3m-pool/", "motox3m-spooky/", "motox3m-winter/", "motox3m2/",
    "new-york/", "one-chance/", "ovo/", "ovo-dimensions/", "paper-io/",
    "physibox/", "poly-track/", "poor-bunny/", "poor-eddie/", "push-your-luck/",
    "race-survival-arena-king/", "recoil/", "retro-bowl/", "retro-bowl-college/", "retro-highway/",
    "rio/", "rocket-soccer-derby/", "rooftop-snipers/", "rooftop-snipers-2/", "run-3/",
    "sausage-flip/", "seoul/", "shadow-trick/", "skiddy-taxi/", "slope/",
    "slow-roads/", "snowball-io/", "snow-rider-3d/", "soccer-random/", "soccer-skills-champions-league/",
    "soccer-skills-euro-cup/", "soccer-skills-world-cup/", "space-major-miner/", "space-thing/", "space-wars-battleground/",
    "speed-king/", "stack/", "stealing-the-diamond/", "stickman-bike/", "stickman-hook/",
    "stickman-hook-halloween/", "subway-surfers/", "super-fowlst/", "super-fowlst-2/", "super-liquid-soccer/",
    "super-tunnel-rush/", "superautopets/", "superhot/", "swingo/", "table-tennis-world-tour/",
    "tag/", "tag-2/", "tanuki-sunset/", "the-impossible-quiz-2/", "tightrope-theatre/",
    "time-shooter-2/", "time-shooter-3/", "tiny-fishing/", "tokyo/", "tomb-of-the-mask/",
    "tower-defense-mingling/", "tunnel-rush/", "tunnel-rush-2/", "turbo-moto-racer/", "undertale.html/",
    "under-the-red-sky/", "underwater/", "unicycle-hero/", "unicycle-legend/", "vegas-queens/",
    "venge-io/", "vex-3/", "vex-4/", "vex-5/", "vex-6/", "vex-7/", "vex-8/",
    "vex-x3m/", "volley-random/", "water-polo-ragdoll/", "watermelon-game/", "yohoho-io/",
    "yokai-dungeon/", "zombie-rush/", "zooplop/"
];

function injectSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    let currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === '' || currentPage === '/') currentPage = 'index.html';
    
    sidebar.innerHTML = `
        <nav class="sidebar-nav">
            <a href="games.html" class="${currentPage === 'games.html' ? 'active' : ''}">GAMES</a>
            <a href="apps.html" class="${currentPage === 'apps.html' ? 'active' : ''}">APPS</a>
            <a href="movies.html" class="${currentPage === 'movies.html' ? 'active' : ''}">MOVIES</a>
            <a href="shows.html" class="${currentPage === 'shows.html' ? 'active' : ''}">SHOWS</a>
            <a href="settings.html" class="${currentPage === 'settings.html' ? 'active' : ''}">SETTINGS</a>
        </nav>
        <div class="sidebar-footer" style="margin-top: auto;">
            <a href="https://discord.gg/7MjQzEHfd8" target="_blank" class="sidebar-btn discord" style="font-size: 16px;">JOIN DISCORD</a>
        </div>
    `;
}

function initialize() {
    console.log('Eclipse Initializing...');
    document.body.classList.add(settings.theme);
    const color = localStorage.getItem('selectedColor');
    if (color) {
        document.body.classList.add('color-' + color);
        applyColorStyle(color);
    }
    if (!settings.animationEnabled) {
        document.body.classList.add('animations-disabled', 'no-particles');
    }
    injectSidebar();
    
    const canvas = document.getElementById('bgCanvas');
    if (canvas) ParticleEngine.init(canvas);
}

async function resolveImagePath(name, type = 'game') {
    const clean = name.replace(/\/+$/, '').replace('.html', '').toLowerCase().replace(/[-_]/g, '');
    const extensions = ['.png', '.jpg', '.jpeg', '.webp'];
    const baseDir = type === 'game' ? 'assets/gameimages/' : 'assets/movieimages/';
    
    // In a real environment, we'd check existence. Since we can't do that perfectly via JS client-side 
    // without a server endpoint, we'll try to find the most likely match from the list I saw earlier.
    const knownExtensions = {
        'agesofconflict': '.jpg',
        'basketbrosio': '.jpg',
        'buildnowgg': '.webp',
        'burnoutextremedrift': '.jpeg',
        'cuttherope': '.jpg',
        'deathbyai': '.jpeg',
        'flappybird': '.webp',
        'karlson': '.webp',
        'mario64': '.jpg',
        'paperio': '.jpg',
        'shellshockers': '.jpg',
        'subwaysurfers': '.jpg',
        'superautopets': '.jpg',
        'superhot': '.jpg'
    };

    const ext = knownExtensions[clean] || '.png';
    return `${baseDir}${clean}${ext}`;
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

document.addEventListener('DOMContentLoaded', initialize);
