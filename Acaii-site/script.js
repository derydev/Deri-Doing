document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // 1. SCROLL DETECTOR FOR SITE HEADER
    // ==========================================================================
    const header = document.querySelector('.site-header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on load in case page is refreshed while scrolled

    // ==========================================================================
    // 2. MOBILE MENU DRAWER CONTROLLER
    // ==========================================================================
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    
    const toggleMobileMenu = () => {
        const isActive = menuToggle.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        
        // Prevent body scroll when mobile menu is open
        if (isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    };

    menuToggle.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking nav items
    mobileNavItems.forEach(item => {
        item.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ==========================================================================
    // 3. INTERACTIVE MOUSE PARALLAX EFFECT
    // ==========================================================================
    const heroSection = document.querySelector('.hero-section');
    const showcaseStage = document.querySelector('.showcase-stage');
    const glow1 = document.querySelector('.glow-1');
    const glow2 = document.querySelector('.glow-2');
    
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    
    const ease = 0.08; // Interpolation factor for silky smooth lag effect

    // Update target coordinates based on mouse position relative to window center
    window.addEventListener('mousemove', (e) => {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        // Value between -0.5 and 0.5
        targetX = (e.clientX / windowWidth) - 0.5;
        targetY = (e.clientY / windowHeight) - 0.5;
    });

    // Animation loop for rendering smooth translations
    const animateParallax = () => {
        // Interpolate current positions
        currentX += (targetX - currentX) * ease;
        currentY += (targetY - currentY) * ease;
        
        // Apply parallax translations to elements
        if (showcaseStage) {
            // Right-side showcase shifts gently
            showcaseStage.style.transform = `translate3d(${currentX * 45}px, ${currentY * 45}px, 0)`;
        }
        
        if (glow1) {
            // Background glows drift in opposition to create depth
            glow1.style.transform = `translate3d(${currentX * -30}px, ${currentY * -30}px, 0)`;
        }
        
        if (glow2) {
            glow2.style.transform = `translate3d(${currentX * 25}px, ${currentY * -25}px, 0)`;
        }
        
        requestAnimationFrame(animateParallax);
    };
    
    animateParallax();

    // ==========================================================================
    // 4. ACTIVE SECTION NAVIGATION HIGHLIGHTER
    // ==========================================================================
    const sections = document.querySelectorAll('main, section');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let currentSectionId = 'home';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // If scrolled past 1/3 of the current section
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSectionId}`) {
                item.classList.add('active');
            }
        });
    });

    // ==========================================================================
    // 5. HERO BACKGROUND IMAGE SEQUENCE PLAYER
    // ==========================================================================
    const canvas = document.getElementById('hero-bg-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        const frameCount = 40;
        const images = [];
        let currentFrameIndex = 0;
        let lastTime = 0;
        const fps = 24; // Smooth 24fps cinema speed
        const frameInterval = 1000 / fps;

        const padZero = (num, size) => {
            let s = num + "";
            while (s.length < size) s = "0" + s;
            return s;
        };

        // Preload all 40 frames
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = `imagens - acai/ezgif-frame-${padZero(i, 3)}.jpg`;
            images.push(img);
        }

        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            drawCurrentFrame();
        };

        const drawImageCover = (img) => {
            if (!img || !img.complete || img.naturalWidth === 0) return;

            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const imgWidth = img.naturalWidth;
            const imgHeight = img.naturalHeight;

            const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
            const newWidth = imgWidth * ratio;
            const newHeight = imgHeight * ratio;

            const x = (canvasWidth - newWidth) / 2;
            const y = (canvasHeight - newHeight) / 2;

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(img, x, y, newWidth, newHeight);
        };

        const drawCurrentFrame = () => {
            const currentImg = images[currentFrameIndex];
            if (currentImg && currentImg.complete && currentImg.naturalWidth > 0) {
                drawImageCover(currentImg);
            }
        };

        const animate = (timestamp) => {
            if (!lastTime) lastTime = timestamp;
            const elapsed = timestamp - lastTime;

            if (elapsed >= frameInterval) {
                currentFrameIndex = (currentFrameIndex + 1) % frameCount;
                drawCurrentFrame();
                lastTime = timestamp - (elapsed % frameInterval);
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Start the animation loop
        requestAnimationFrame(animate);
    }
});
