/**
 * =========================================================================
 * 💖 SAKSHI'S ROMANTIC WEBSITE ENGINE 💖
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // 2. Initialize Vast Deep Space Cosmic Heart Galaxy
    initDeepSpaceCosmicGalaxy();

    // 3. Initialize Arijit Singh Love Song Player
    initArijitSongPlayer();

    // 4. Initialize Live Countdown & Age Ticker
    initCountdown();

    // 5. Initialize Photo Realm (Cylinder Carousel & Cards)
    initPhotoRealm();

    // 6. Initialize Couple Photo Click
    initCouplePhotoShowcase();

    // 7. Initialize The Runaway Proposal Arena
    initProposalArena();

    // 8. Initialize Birthday Cake & Wishes
    initBirthdayCake();

    // 9. Initialize Love Letter
    initLoveLetter();
});

/* ==========================================================================
   🌌 VAST DEEP SPACE COSMIC GALAXY (INFINITE STARS & DRIFTING 3D HEARTS)
   ========================================================================== */
function initDeepSpaceCosmicGalaxy() {
    const canvas = document.getElementById('three-canvas');
    if (!canvas || !window.THREE) return;

    try {
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x06020a, 0.008);

        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1500);
        camera.position.z = 45;

        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // 🌈 Dynamic Deep Space Lights
        const ambientLight = new THREE.AmbientLight(0xd1c4e9, 0.9);
        scene.add(ambientLight);

        const deepRubyLight = new THREE.PointLight(0xff1e56, 3.5, 200);
        deepRubyLight.position.set(20, 25, 40);
        scene.add(deepRubyLight);

        const cosmicGoldLight = new THREE.PointLight(0xffd700, 2.8, 200);
        cosmicGoldLight.position.set(-30, -20, 30);
        scene.add(cosmicGoldLight);

        const nebulaPurpleLight = new THREE.PointLight(0xa855f7, 2.5, 200);
        nebulaPurpleLight.position.set(0, -35, 50);
        scene.add(nebulaPurpleLight);

        const starlightCyanLight = new THREE.PointLight(0x00f2fe, 2.2, 180);
        starlightCyanLight.position.set(35, -15, 20);
        scene.add(starlightCyanLight);

        // ✨ 1. VAST INFINITE STARFIELD GALAXY (3,500+ Deep Space Stars)
        const starCount = 3500;
        const starGeo = new THREE.BufferGeometry();
        const starPositions = new Float32Array(starCount * 3);
        const starColors = new Float32Array(starCount * 3);

        const spacePalette = [
            [1.0, 0.95, 1.0],
            [1.0, 0.4, 0.6],
            [1.0, 0.85, 0.25],
            [0.65, 0.4, 1.0],
            [0.3, 0.85, 1.0],
            [1.0, 0.2, 0.45]
        ];

        for (let i = 0; i < starCount; i++) {
            starPositions[i * 3] = (Math.random() - 0.5) * 350;
            starPositions[i * 3 + 1] = (Math.random() - 0.5) * 280;
            starPositions[i * 3 + 2] = (Math.random() - 0.5) * 350;

            const col = spacePalette[Math.floor(Math.random() * spacePalette.length)];
            starColors[i * 3] = col[0];
            starColors[i * 3 + 1] = col[1];
            starColors[i * 3 + 2] = col[2];
        }

        starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
        starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

        const starMat = new THREE.PointsMaterial({
            size: 0.65,
            vertexColors: true,
            transparent: true,
            opacity: 0.9,
            blending: THREE.AdditiveBlending
        });

        const deepStarfield = new THREE.Points(starGeo, starMat);
        scene.add(deepStarfield);

        // ✨ 2. DISTANT COSMIC DUST NEBULA
        const dustCount = 1200;
        const dustGeo = new THREE.BufferGeometry();
        const dustPositions = new Float32Array(dustCount * 3);
        const dustColors = new Float32Array(dustCount * 3);

        for (let i = 0; i < dustCount; i++) {
            dustPositions[i * 3] = (Math.random() - 0.5) * 450;
            dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 350;
            dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 450;

            const choice = Math.random();
            if (choice < 0.5) {
                dustColors[i * 3] = 1.0; dustColors[i * 3 + 1] = 0.2; dustColors[i * 3 + 2] = 0.5;
            } else {
                dustColors[i * 3] = 0.4; dustColors[i * 3 + 1] = 0.3; dustColors[i * 3 + 2] = 0.9;
            }
        }
        dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
        dustGeo.setAttribute('color', new THREE.BufferAttribute(dustColors, 3));

        const dustMat = new THREE.PointsMaterial({
            size: 1.2,
            vertexColors: true,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending
        });
        const nebulaDust = new THREE.Points(dustGeo, dustMat);
        scene.add(nebulaDust);

        // 💖 3. SCATTERED VIBRANT 3D HEARTS DRIFTING ACROSS DEEP SPACE
        const heartShape = new THREE.Shape();
        const x = 0, y = 0;
        heartShape.moveTo(x + 2.5, y + 2.5);
        heartShape.bezierCurveTo(x + 2.5, y + 2.5, x + 2.0, y, x, y);
        heartShape.bezierCurveTo(x - 3.0, y, x - 3.0, y + 3.5, x - 3.0, y + 3.5);
        heartShape.bezierCurveTo(x - 3.0, y + 5.5, x - 1.0, y + 7.7, x + 2.5, y + 9.5);
        heartShape.bezierCurveTo(x + 6.0, y + 7.7, x + 8.0, y + 5.5, x + 8.0, y + 3.5);
        heartShape.bezierCurveTo(x + 8.0, y + 3.5, x + 8.0, y, x + 5.0, y);
        heartShape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

        const extrudeSettings = {
            depth: 0.9,
            bevelEnabled: true,
            bevelSegments: 3,
            steps: 2,
            bevelSize: 0.35,
            bevelThickness: 0.4
        };

        const heart3DGeo = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
        heart3DGeo.center();

        const heartHexColors = [
            0xff1e56, 0xff758c, 0xff2a6d, 0xffd700, 
            0xa855f7, 0x00f2fe, 0xff9f43, 0xff6b81
        ];

        const heartsGroup = new THREE.Group();
        const heartCount = 38;
        const hearts = [];

        for (let i = 0; i < heartCount; i++) {
            const hexColor = heartHexColors[i % heartHexColors.length];
            const heartMat = new THREE.MeshPhongMaterial({
                color: hexColor,
                emissive: hexColor,
                emissiveIntensity: 0.3,
                specular: 0xffffff,
                shininess: 95,
                transparent: true,
                opacity: 0.88
            });

            const heartMesh = new THREE.Mesh(heart3DGeo, heartMat);
            const scale = (Math.random() * 0.18 + 0.08);
            heartMesh.scale.set(scale, -scale, scale);

            heartMesh.position.set(
                (Math.random() - 0.5) * 160,
                (Math.random() - 0.5) * 120,
                (Math.random() - 0.5) * 140 - 20
            );

            heartMesh.rotation.set(
                Math.random() * Math.PI * 2,
                Math.random() * Math.PI * 2,
                Math.random() * Math.PI * 2
            );

            hearts.push({
                mesh: heartMesh,
                rotSpeedX: (Math.random() - 0.5) * 0.015,
                rotSpeedY: (Math.random() - 0.5) * 0.018,
                rotSpeedZ: (Math.random() - 0.5) * 0.01,
                floatRadius: Math.random() * 1.5 + 0.8,
                initialY: heartMesh.position.y,
                initialX: heartMesh.position.x
            });

            heartsGroup.add(heartMesh);
        }
        scene.add(heartsGroup);

        // 🌠 4. SHOOTING STARS / COMETS
        const shootingStarCount = 3;
        const shootingStars = [];
        for (let s = 0; s < shootingStarCount; s++) {
            const trailGeo = new THREE.BufferGeometry();
            const trailPositions = new Float32Array(6);
            trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
            const trailMat = new THREE.LineBasicMaterial({
                color: 0xffd700,
                transparent: true,
                opacity: 0.8,
                blending: THREE.AdditiveBlending
            });
            const starLine = new THREE.Line(trailGeo, trailMat);
            scene.add(starLine);

            shootingStars.push({
                line: starLine,
                x: (Math.random() - 0.5) * 200,
                y: Math.random() * 100 + 40,
                z: (Math.random() - 0.5) * 100,
                speedX: -(Math.random() * 1.8 + 1.2),
                speedY: -(Math.random() * 1.2 + 0.8)
            });
        }

        // Mouse Parallax
        let mouseX = 0, mouseY = 0;
        window.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
            
            deepRubyLight.position.x = mouseX * 40;
            deepRubyLight.position.y = mouseY * 35;
            starlightCyanLight.position.x = -mouseX * 35;
        });

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Animation Loop
        let clock = new THREE.Clock();
        function animate() {
            requestAnimationFrame(animate);
            const time = clock.getElapsedTime();

            deepStarfield.rotation.y = time * 0.015;
            deepStarfield.rotation.x = time * 0.008;

            nebulaDust.rotation.y = -time * 0.01;

            hearts.forEach((h, idx) => {
                h.mesh.rotation.x += h.rotSpeedX;
                h.mesh.rotation.y += h.rotSpeedY;
                h.mesh.rotation.z += h.rotSpeedZ;
                h.mesh.position.y = h.initialY + Math.sin(time * 1.2 + idx * 0.5) * h.floatRadius;
                h.mesh.position.x = h.initialX + Math.cos(time * 0.8 + idx * 0.4) * (h.floatRadius * 0.5);
            });

            shootingStars.forEach(st => {
                st.x += st.speedX;
                st.y += st.speedY;

                const pos = st.line.geometry.attributes.position.array;
                pos[0] = st.x;
                pos[1] = st.y;
                pos[2] = st.z;
                pos[3] = st.x - st.speedX * 6;
                pos[4] = st.y - st.speedY * 6;
                pos[5] = st.z;
                st.line.geometry.attributes.position.needsUpdate = true;

                if (st.y < -120 || st.x < -180) {
                    st.x = Math.random() * 100 + 80;
                    st.y = Math.random() * 80 + 60;
                    st.z = (Math.random() - 0.5) * 120;
                }
            });

            camera.position.x += (mouseX * 6 - camera.position.x) * 0.04;
            camera.position.y += (mouseY * 4.5 - camera.position.y) * 0.04;
            camera.lookAt(0, 0, 0);

            renderer.render(scene, camera);
        }
        animate();
    } catch(e) {
        console.warn("Deep Space Galaxy fallback:", e);
    }
}

/* ==========================================================================
   🎵 ARIJIT SINGH ROMANTIC SONG PLAYER ENGINE
   ========================================================================== */
let audioCtx = null;
let isMusicPlaying = false;
let synthInterval = null;
let lastDodgeSoundTime = 0;

function initArijitSongPlayer() {
    const musicBtn = document.getElementById('musicToggleBtn');
    const visualizer = document.getElementById('musicVisualizer');
    const statusText = document.getElementById('musicStatusText');
    const bgAudio = document.getElementById('romanticSongAudio');

    if (!musicBtn) return;

    const startTime = (CONFIG.music && CONFIG.music.startTime) ? CONFIG.music.startTime : 21.0;

    musicBtn.addEventListener('click', () => {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        if (isMusicPlaying) {
            // Pause Audio
            if (bgAudio) {
                try { bgAudio.pause(); } catch(e) {}
            }
            stopRomanticSynth();
            isMusicPlaying = false;
            if (visualizer) visualizer.classList.add('paused');
            if (statusText) statusText.textContent = "Jhol 🎵";
            showToast("Song Paused 🔇");
        } else {
            // Play Audio directly from main lyrics start timestamp
            if (bgAudio) {
                bgAudio.volume = 0.9;
                if (bgAudio.currentTime < 5 || bgAudio.currentTime < startTime - 1) {
                    bgAudio.currentTime = startTime;
                }
                const promise = bgAudio.play();
                if (promise !== undefined) {
                    promise.catch(err => {
                        console.warn("HTML5 audio playback restricted, playing melody fallback:", err);
                        startRomanticSynth();
                    });
                }
            } else {
                startRomanticSynth();
            }

            isMusicPlaying = true;
            if (visualizer) visualizer.classList.remove('paused');
            if (statusText) statusText.textContent = "Playing Jhol 💖";
            showToast("Playing 'Jhol' by Annural Khalid for Sakshi 💖🎵");
        }
    });

    // Auto prompt on first user gesture
    const startAudioOnFirstClick = () => {
        window.removeEventListener('click', startAudioOnFirstClick);
    };
    window.addEventListener('click', startAudioOnFirstClick, { once: true });
}

function startRomanticSynth() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // Arijit Singh "Kesariya / Tum Hi Ho" Melody Chords
    const chords = [
        [261.63, 329.63, 392.00, 493.88], // Cmaj7
        [220.00, 261.63, 329.63, 392.00], // Am7
        [174.61, 220.00, 261.63, 329.63], // Fmaj7
        [196.00, 246.94, 293.66, 349.23]  // G7
    ];

    let chordIdx = 0;
    let noteIdx = 0;

    synthInterval = setInterval(() => {
        if (!isMusicPlaying || !audioCtx) return;
        const currentChord = chords[chordIdx];
        const freq = currentChord[noteIdx];
        playSoftTone(freq, 1.8);

        noteIdx++;
        if (noteIdx >= currentChord.length) {
            noteIdx = 0;
            chordIdx = (chordIdx + 1) % chords.length;
        }
    }, 450);
}

function stopRomanticSynth() {
    if (synthInterval) clearInterval(synthInterval);
}

function playSoftTone(freq, duration = 1.2) {
    if (!audioCtx) return;
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch(e) {}
}

function playPlayfulDodgeSound() {
    const now = Date.now();
    if (now - lastDodgeSoundTime < 220) return;
    lastDodgeSoundTime = now;

    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    try {
        const t = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, t);
        osc.frequency.exponentialRampToValueAtTime(800, t + 0.07);
        osc.frequency.exponentialRampToValueAtTime(260, t + 0.2);

        gain.gain.setValueAtTime(0.001, t);
        gain.gain.linearRampToValueAtTime(0.16, t + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(t);
        osc.stop(t + 0.2);
    } catch(e) {}
}

function playCelebrationFanfare() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
        setTimeout(() => {
            playSoftTone(freq, 1.5);
        }, idx * 180);
    });
}

function playChimeSound() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    playSoftTone(880, 0.8);
    setTimeout(() => playSoftTone(1174.66, 1.0), 100);
}

/* ==========================================================================
   ⏳ LIVE COUNTDOWN & AGE MILESTONE TICKER
   ========================================================================== */
function initCountdown() {
    const cdDays = document.getElementById('cdDays');
    const cdHours = document.getElementById('cdHours');
    const cdMinutes = document.getElementById('cdMinutes');
    const cdSeconds = document.getElementById('cdSeconds');
    const daysLived = document.getElementById('daysLivedCounter');

    const birthDate = new Date(CONFIG.girlfriend.birthday);

    function updateCounters() {
        const now = new Date();
        let targetYear = now.getFullYear();
        let nextBday = new Date(targetYear, 7, 25);
        if (now > nextBday && (now.getDate() !== 25 || now.getMonth() !== 7)) {
            nextBday = new Date(targetYear + 1, 7, 25);
        }

        const diffTime = nextBday - now;

        if (diffTime <= 0 && now.getDate() === 25 && now.getMonth() === 7) {
            if (cdDays) cdDays.textContent = "🎉";
            if (cdHours) cdHours.textContent = "HAPPY";
            if (cdMinutes) cdMinutes.textContent = "BIRTHDAY";
            if (cdSeconds) cdSeconds.textContent = "👑";
        } else {
            const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

            if (cdDays) cdDays.textContent = String(days).padStart(2, '0');
            if (cdHours) cdHours.textContent = String(hours).padStart(2, '0');
            if (cdMinutes) cdMinutes.textContent = String(minutes).padStart(2, '0');
            if (cdSeconds) cdSeconds.textContent = String(seconds).padStart(2, '0');
        }

        const totalDaysLived = Math.floor((now - birthDate) / (1000 * 60 * 60 * 24));
        if (daysLived) {
            daysLived.textContent = totalDaysLived.toLocaleString() + " Days";
        }
    }

    updateCounters();
    setInterval(updateCounters, 1000);
}

/* ==========================================================================
   📸 PHOTO REALM (CYLINDER CAROUSEL & CARDS)
   ========================================================================== */
let cylinderAngle = 0;

function initPhotoRealm() {
    const cylinder = document.getElementById('photoCylinder');
    const cardsStage = document.getElementById('cardsStage');
    const cylinderStage = document.getElementById('cylinderStage');
    const prevBtn = document.getElementById('prevSlideBtn');
    const nextBtn = document.getElementById('nextSlideBtn');
    const modeCylinderBtn = document.getElementById('modeCylinderBtn');
    const modeCardsBtn = document.getElementById('modeCardsBtn');

    if (!cylinder || !CONFIG.photos) return;

    const photos = CONFIG.photos;
    const totalPhotos = photos.length;
    const angleStep = 360 / totalPhotos;
    const radius = 340;

    // 1. Populate Cylinder
    cylinder.innerHTML = '';
    photos.forEach((photo, idx) => {
        const item = document.createElement('div');
        item.className = 'cylinder-item';
        const itemAngle = idx * angleStep;
        item.style.transform = `rotateY(${itemAngle}deg) translateZ(${radius}px)`;

        item.innerHTML = `
            <img src="${photo.url}" alt="${photo.title}" loading="lazy">
            <div class="cylinder-item-overlay">
                <span class="cylinder-tag">${photo.tag}</span>
                <h4 class="cylinder-title">${photo.title}</h4>
                <p class="cylinder-caption">${photo.caption}</p>
            </div>
        `;

        item.addEventListener('click', () => openPhotoModal(photo));
        cylinder.appendChild(item);
    });

    // 2. Populate Cards
    if (cardsStage) {
        cardsStage.innerHTML = '';
        photos.forEach(photo => {
            const card = document.createElement('div');
            card.className = 'tilt-card';
            card.innerHTML = `
                <div class="tilt-card-img-wrap">
                    <img src="${photo.url}" alt="${photo.title}" loading="lazy">
                </div>
                <div class="tilt-card-body">
                    <span class="tilt-card-tag">${photo.tag}</span>
                    <h3 class="tilt-card-title">${photo.title}</h3>
                    <p class="tilt-card-desc">${photo.caption}</p>
                </div>
            `;
            card.addEventListener('click', () => openPhotoModal(photo));
            cardsStage.appendChild(card);
        });
    }

    function rotateCylinder(step) {
        cylinderAngle += step * angleStep;
        cylinder.style.transform = `rotateY(${-cylinderAngle}deg)`;
        playChimeSound();
    }

    if (prevBtn) prevBtn.addEventListener('click', () => rotateCylinder(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => rotateCylinder(1));

    // Drag / Touch Navigation
    let isDragging = false;
    let startX = 0;

    if (cylinderStage) {
        cylinderStage.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const deltaX = e.clientX - startX;
            if (Math.abs(deltaX) > 40) {
                rotateCylinder(deltaX > 0 ? -1 : 1);
                startX = e.clientX;
            }
        });

        cylinderStage.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });

        cylinderStage.addEventListener('touchend', (e) => {
            const deltaX = e.changedTouches[0].clientX - startX;
            if (Math.abs(deltaX) > 30) {
                rotateCylinder(deltaX > 0 ? -1 : 1);
            }
        }, { passive: true });
    }

    if (modeCylinderBtn && modeCardsBtn) {
        modeCylinderBtn.addEventListener('click', () => {
            modeCylinderBtn.classList.add('active');
            modeCardsBtn.classList.remove('active');
            if (cylinderStage) cylinderStage.classList.remove('hidden');
            if (cardsStage) cardsStage.classList.add('hidden');
        });

        modeCardsBtn.addEventListener('click', () => {
            modeCardsBtn.classList.add('active');
            modeCylinderBtn.classList.remove('active');
            if (cardsStage) cardsStage.classList.remove('hidden');
            if (cylinderStage) cylinderStage.classList.add('hidden');
        });
    }

    const modal = document.getElementById('photoModal');
    const closeBtn = document.getElementById('closeModalBtn');
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.add('hidden');
        });
    }
}

function initCouplePhotoShowcase() {
    const coupleBox = document.getElementById('couplePhotoBox');
    if (!coupleBox || !CONFIG.couplePhoto) return;

    coupleBox.addEventListener('click', () => {
        openPhotoModal({
            id: 'couple',
            url: CONFIG.couplePhoto.url,
            title: CONFIG.couplePhoto.title,
            caption: CONFIG.couplePhoto.caption,
            tag: CONFIG.couplePhoto.tag
        });
    });
}

function openPhotoModal(photo) {
    const modal = document.getElementById('photoModal');
    const img = document.getElementById('modalImg');
    const title = document.getElementById('modalTitle');
    const caption = document.getElementById('modalCaption');
    const tag = document.getElementById('modalTag');
    const likeBtn = document.getElementById('modalLikeBtn');
    const likeCount = document.getElementById('modalLikeCount');

    if (!modal) return;

    img.src = photo.url;
    title.textContent = photo.title;
    caption.textContent = photo.caption;
    tag.textContent = photo.tag;

    let likes = parseInt(localStorage.getItem(`likes_photo_${photo.id}`) || '108');
    if (likeCount) likeCount.textContent = likes;

    if (likeBtn) {
        likeBtn.onclick = () => {
            likes++;
            localStorage.setItem(`likes_photo_${photo.id}`, likes);
            if (likeCount) likeCount.textContent = likes;
            triggerMiniHearts();
            showToast("Love sent for this memory! 💖");
        };
    }

    modal.classList.remove('hidden');
    playChimeSound();
}

/* ==========================================================================
   💍 THE PLAYFUL PROPOSAL ARENA
   ========================================================================== */
function initProposalArena() {
    const noBtn = document.getElementById('noProposalBtn');
    const yesBtn = document.getElementById('yesProposalBtn');
    const arena = document.getElementById('proposalArena');
    const bubble = document.getElementById('dialogueBubble');
    const dialogueText = document.getElementById('dialogueText');
    const celebModal = document.getElementById('celebrationModal');
    const closeCelebBtn = document.getElementById('closeCelebBtn');

    if (!noBtn || !arena) return;

    const replies = CONFIG.proposal.noButtonReplies;
    let replyIdx = 0;

    function dodgeNoButton(cursorX, cursorY) {
        const arenaRect = arena.getBoundingClientRect();
        const btnRect = noBtn.getBoundingClientRect();

        const btnCenterX = btnRect.left + btnRect.width / 2;
        const btnCenterY = btnRect.top + btnRect.height / 2;

        const dist = Math.hypot(cursorX - btnCenterX, cursorY - btnCenterY);

        if (dist < 130) {
            const maxX = arenaRect.width - btnRect.width - 20;
            const maxY = arenaRect.height - btnRect.height - 20;

            const randomX = Math.max(10, Math.floor(Math.random() * maxX));
            const randomY = Math.max(10, Math.floor(Math.random() * maxY));

            noBtn.style.left = `${randomX}px`;
            noBtn.style.top = `${randomY}px`;

            if (dialogueText && bubble) {
                dialogueText.textContent = replies[replyIdx % replies.length];
                replyIdx++;
                bubble.classList.add('show');
                setTimeout(() => bubble.classList.remove('show'), 2200);
            }

            playPlayfulDodgeSound();
        }
    }

    arena.addEventListener('mousemove', (e) => {
        dodgeNoButton(e.clientX, e.clientY);
    });

    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        dodgeNoButton(touch.clientX, touch.clientY);
    });

    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showToast("Nice try, Sakshi! But you can only say YES! 😜❤️");
    });

    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            triggerMassiveConfetti();
            playCelebrationFanfare();

            if (celebModal) {
                celebModal.classList.remove('hidden');
            }

            showToast("SHE SAID YES! Best Day of Our Lives! 🎉💍❤️");
        });
    }

    if (closeCelebBtn && celebModal) {
        closeCelebBtn.addEventListener('click', () => {
            celebModal.classList.add('hidden');
            const celebSection = document.getElementById('celebration');
            if (celebSection) celebSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

function triggerMassiveConfetti() {
    if (!window.confetti) return;

    const count = 200;
    const defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, { spread: 26, startVelocity: 55, colors: ['#ff1e56', '#ffd700'] });
    fire(0.2, { spread: 60, colors: ['#ff758c', '#ffffff'] });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8, colors: ['#ff2a6d', '#ffd700'] });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, colors: ['#e056fd', '#f9ca24'] });
    fire(0.1, { spread: 120, startVelocity: 45, colors: ['#ff1e56', '#ffd700'] });
}

function triggerMiniHearts() {
    if (!window.confetti) return;
    confetti({
        particleCount: 25,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff1e56', '#ff758c', '#ffd700']
    });
}

/* ==========================================================================
   🎂 VIRTUAL BIRTHDAY CAKE & BLOWOUT CANDLES
   ========================================================================== */
function initBirthdayCake() {
    const candlesRow = document.getElementById('candlesRow');
    const blowBtn = document.getElementById('blowCandlesBtn');
    const wishCard = document.getElementById('wishRevealCard');
    const wishText = document.getElementById('cakeWishText');

    if (!candlesRow) return;

    candlesRow.innerHTML = '';
    const candleCount = 7;
    for (let i = 0; i < candleCount; i++) {
        const candle = document.createElement('div');
        candle.className = 'candle-stick';
        candle.innerHTML = '<div class="candle-flame"></div>';
        
        candle.querySelector('.candle-flame').addEventListener('click', function() {
            this.classList.add('blown');
            checkAllCandlesBlown();
        });

        candlesRow.appendChild(candle);
    }

    if (blowBtn) {
        blowBtn.addEventListener('click', () => {
            const flames = document.querySelectorAll('.candle-flame');
            flames.forEach(f => f.classList.add('blown'));
            celebrateCakeBlowout();
        });
    }

    function checkAllCandlesBlown() {
        const remaining = document.querySelectorAll('.candle-flame:not(.blown)');
        if (remaining.length === 0) {
            celebrateCakeBlowout();
        }
    }

    function celebrateCakeBlowout() {
        triggerMassiveConfetti();
        playCelebrationFanfare();

        if (wishCard) {
            wishCard.classList.remove('hidden');
            const randomWish = CONFIG.cakeWishes[Math.floor(Math.random() * CONFIG.cakeWishes.length)];
            if (wishText) wishText.textContent = randomWish;
        }

        showToast("Wishes made! Happy 21st Birthday Sakshi! 🎂👑✨");
    }
}

/* ==========================================================================
   💌 HEARTFELT LOVE LETTER
   ========================================================================== */
function initLoveLetter() {
    const letterTitle = document.getElementById('letterTitle');
    const letterSalutation = document.getElementById('letterSalutation');
    const letterBody = document.getElementById('letterBody');
    const letterSignature = document.getElementById('letterSignature');

    if (CONFIG.loveLetter) {
        if (letterTitle) letterTitle.textContent = CONFIG.loveLetter.title;
        if (letterSalutation) letterSalutation.textContent = CONFIG.loveLetter.salutation;
        if (letterBody) letterBody.textContent = CONFIG.loveLetter.body;
        if (letterSignature) letterSignature.innerHTML = CONFIG.loveLetter.signature.replace('\n', '<br>');
    }
}

/* ==========================================================================
   🍞 TOAST NOTIFICATION UTILITY
   ========================================================================== */
let toastTimeout = null;
function showToast(msg) {
    const toast = document.getElementById('toastBox');
    const toastMsg = document.getElementById('toastMsg');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = msg;
    toast.classList.remove('hidden');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.add('hidden');
    }, 3200);
}
