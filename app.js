// Application Data
const appData = {
  images: [
    "1.jpg", "3.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", 
    "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", 
    "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "25.jpg", 
    "26.jpg", "27.jpg"
  ],
  videos: ["2.mp4", "4.mp4", "24.mp4"],
  celebrationMessages: [
    "🎉 Another year of awesome! 🎉",
    "✨ Celebrate like there's no tomorrow! ✨",
    "🎂 Make a wish and blow out the candles! 🎂",
    "🎈 Party time with the birthday star! 🎈",
    "🌟 Shine bright, it's your special day! 🌟",
    "🎊 Let the celebrations begin! 🎊",
    "💫 You're absolutely amazing! 💫",
    "🎁 Wishing you endless happiness! 🎁"
  ]
};

let currentImageIndex = 0;
let celebrationInterval;
let fireworksInterval;
let wishInterval;

// DOM Elements
let photoGallery, photoModal, modalImage, modalClose, prevBtn, nextBtn;
let confettiContainer, fireworksContainer, particlesContainer;
let celebrateBtn, birthdayWishes, heroSection;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Starting spectacular birthday website initialization...');
  
  // Initialize elements first
  initializeElements();
  
  // Wait a moment for DOM to be ready, then start effects
  setTimeout(() => {
    createInitialEffects();
    generatePhotoGallery();
    setupEventListeners();
    setupScrollAnimations();
    setupParallaxEffects();
    setupTouchGestures();
    startCelebrationSequence();
    setupImageLoading();
    startContinuousCelebration();
    setupAdvancedInteractions();
    
    console.log('🎉🎂 SPECTACULAR BIRTHDAY WEBSITE LOADED! 🎂🎉');
  }, 100);
});

// Initialize DOM elements
function initializeElements() {
  photoGallery = document.getElementById('photoGallery');
  photoModal = document.getElementById('photoModal');
  modalImage = document.getElementById('modalImage');
  modalClose = document.getElementById('modalClose');
  prevBtn = document.getElementById('prevBtn');
  nextBtn = document.getElementById('nextBtn');
  confettiContainer = document.getElementById('confetti');
  fireworksContainer = document.getElementById('fireworks');
  particlesContainer = document.getElementById('particles');
  celebrateBtn = document.getElementById('celebrateBtn');
  birthdayWishes = document.getElementById('birthdayWishes');
  heroSection = document.getElementById('heroSection');
  
  console.log('🚀 Elements initialized:', {
    photoGallery: !!photoGallery,
    photoModal: !!photoModal,
    modalImage: !!modalImage,
    modalClose: !!modalClose,
    prevBtn: !!prevBtn,
    nextBtn: !!nextBtn
  });
}

// Create spectacular initial effects
function createInitialEffects() {
  if (!confettiContainer || !fireworksContainer || !particlesContainer) {
    console.warn('⚠️ Some effect containers not found');
    return;
  }
  
  // Create explosive confetti
  createExplosiveConfetti();
  
  // Create fireworks
  setTimeout(() => createFireworks(), 1000);
  
  // Create floating particles
  setTimeout(() => createFloatingParticles(), 2000);
  
  console.log('💥 Initial spectacular effects created!');
}

// Create explosive confetti animation
function createExplosiveConfetti() {
  if (!confettiContainer) return;
  
  const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];
  const confettiCount = 150;
  
  for (let i = 0; i < confettiCount; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 3 + 's';
      confetti.style.animationDuration = (Math.random() * 4 + 3) + 's';
      confetti.style.width = (Math.random() * 8 + 6) + 'px';
      confetti.style.height = (Math.random() * 8 + 6) + 'px';
      confettiContainer.appendChild(confetti);
      
      // Remove confetti after animation
      setTimeout(() => {
        if (confetti.parentNode) {
          confetti.parentNode.removeChild(confetti);
        }
      }, 7000);
    }, i * 25);
  }
}

// Create fireworks display
function createFireworks() {
  if (!fireworksContainer) return;
  
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#ff9ff3', '#54a0ff'];
  
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const firework = document.createElement('div');
      firework.className = 'firework';
      firework.style.left = Math.random() * 100 + '%';
      firework.style.top = Math.random() * 50 + 20 + '%';
      firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      firework.style.boxShadow = `0 0 20px ${colors[Math.floor(Math.random() * colors.length)]}`;
      fireworksContainer.appendChild(firework);
      
      // Create burst effect
      setTimeout(() => {
        createFireworkBurst(firework);
      }, 500);
      
      // Remove firework after animation
      setTimeout(() => {
        if (firework.parentNode) {
          firework.parentNode.removeChild(firework);
        }
      }, 2500);
    }, i * 200);
  }
}

// Create firework burst effect
function createFireworkBurst(centerElement) {
  const rect = centerElement.getBoundingClientRect();
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];
  
  for (let i = 0; i < 12; i++) {
    const spark = document.createElement('div');
    spark.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      left: ${rect.left + rect.width / 2}px;
      top: ${rect.top + rect.height / 2}px;
      z-index: 1001;
      pointer-events: none;
      box-shadow: 0 0 10px currentColor;
    `;
    
    const angle = (i * 30) * Math.PI / 180;
    const velocity = 100 + Math.random() * 100;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    spark.style.animation = `sparkFly 1.5s ease-out forwards`;
    spark.style.setProperty('--vx', vx + 'px');
    spark.style.setProperty('--vy', vy + 'px');
    
    document.body.appendChild(spark);
    
    setTimeout(() => {
      if (spark.parentNode) {
        spark.parentNode.removeChild(spark);
      }
    }, 1500);
  }
}

// Create floating particles
function createFloatingParticles() {
  if (!particlesContainer) return;
  
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 3 + 's';
      particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
      particlesContainer.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 7000);
    }, i * 100);
  }
}

// Generate spectacular photo gallery
function generatePhotoGallery() {
  if (!photoGallery) {
    console.error('❌ Photo gallery element not found');
    return;
  }
  
  console.log('🖼️ Generating spectacular photo gallery with', appData.images.length, 'images');
  
  photoGallery.innerHTML = '';
  
  appData.images.forEach((image, index) => {
    const photoItem = document.createElement('div');
    photoItem.className = 'photo-item';
    photoItem.style.animationDelay = `${index * 0.05}s`;
    photoItem.setAttribute('data-index', index);
    
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.alt = `Beautiful Memory ${index + 1}`;
    imgElement.loading = 'lazy';
    
    // Enhanced error handling with spectacular placeholders
    imgElement.onerror = function() {
      this.style.display = 'none';
      const placeholder = document.createElement('div');
      const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
      ];
      placeholder.style.cssText = `
        width: 100%;
        height: 350px;
        background: ${gradients[index % gradients.length]};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        border-radius: 12px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
      `;
      placeholder.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 16px; animation: bounce 2s infinite;">📸</div>
        <div>Beautiful Memory #${index + 1}</div>
        <div style="font-size: 14px; opacity: 0.8; margin-top: 8px;">From Instagram Collection</div>
      `;
      this.parentNode.insertBefore(placeholder, this);
    };
    
    const overlay = document.createElement('div');
    overlay.className = 'photo-overlay';
    overlay.innerHTML = `<p>✨ Spectacular Memory #${index + 1} ✨</p>`;
    
    photoItem.appendChild(imgElement);
    photoItem.appendChild(overlay);
    
    // FIXED: Use addEventListener instead of onclick for proper event handling
    photoItem.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const rect = e.target.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      
      console.log('📸 Photo clicked - Index:', index);
      createClickCelebration(x, y);
      openModal(index);
    });
    
    // Add hover celebration effects
    photoItem.addEventListener('mouseenter', () => {
      createHoverSparkles(photoItem);
    });
    
    photoGallery.appendChild(photoItem);
  });
  
  console.log('🎨 Spectacular photo gallery generated successfully!');
}

// Setup enhanced event listeners
function setupEventListeners() {
  console.log('🔧 Setting up event listeners...');
  
  // Modal close - FIXED: Only close on X button
  if (modalClose) {
    modalClose.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('❌ Modal close clicked');
      createClickCelebration(e.clientX || window.innerWidth/2, e.clientY || window.innerHeight/2);
      closeModal();
    });
  } else {
    console.warn('⚠️ Modal close button not found');
  }
  
  // Modal background click to close
  if (photoModal) {
    photoModal.addEventListener('click', function(e) {
      // Only close if clicking the modal background, not its contents
      if (e.target === photoModal) {
        console.log('🚪 Modal background clicked');
        closeModal();
      }
    });
  } else {
    console.warn('⚠️ Photo modal not found');
  }
  
  // FIXED: Modal navigation buttons - prevent closing modal
  if (prevBtn) {
    prevBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('⬅️ Previous button clicked');
      createClickCelebration(e.clientX || window.innerWidth/2, e.clientY || window.innerHeight/2);
      showPreviousImage();
    });
  } else {
    console.warn('⚠️ Previous button not found');
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('➡️ Next button clicked');
      createClickCelebration(e.clientX || window.innerWidth/2, e.clientY || window.innerHeight/2);
      showNextImage();
    });
  } else {
    console.warn('⚠️ Next button not found');
  }
  
  // Celebration button - MEGA CELEBRATION!
  if (celebrateBtn) {
    celebrateBtn.addEventListener('click', function(e) {
      console.log('🎉 MEGA CELEBRATION TRIGGERED!');
      triggerMegaCelebration(e.clientX || window.innerWidth/2, e.clientY || window.innerHeight/2);
    });
  } else {
    console.warn('⚠️ Celebration button not found');
  }
  
  // Keyboard navigation - FIXED
  document.addEventListener('keydown', function(e) {
    if (photoModal && !photoModal.classList.contains('hidden')) {
      console.log('⌨️ Key pressed in modal:', e.key);
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        showPreviousImage();
      } else if (e.key === 'ArrowRight') {
        showNextImage();
      }
    }
  });
  
  // Enhanced social media buttons
  document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      createSocialCelebration(this);
      console.log('🔗 Social media button clicked:', this.href);
    });
    
    btn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.1) rotate(5deg)';
      createButtonSparkles(this);
    });
    
    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
    });
  });
  
  // Global click celebrations - FIXED: Exclude photo items
  document.addEventListener('click', function(e) {
    // Don't interfere with modal, button, or photo item clicks
    if (!e.target.closest('.modal') && 
        !e.target.closest('button') && 
        !e.target.closest('a') && 
        !e.target.closest('.photo-item') &&
        !e.target.closest('video')) {
      createRandomCelebration(e.clientX, e.clientY);
    }
  });
  
  // Video play celebrations
  document.querySelectorAll('video').forEach(video => {
    video.addEventListener('play', function() {
      createVideoCelebration(this);
    });
  });
  
  console.log('✅ Event listeners setup complete!');
}

// Modal functions with celebrations - FIXED
function openModal(index) {
  console.log('🖼️ Opening modal for image:', index);
  
  if (!photoModal || !modalImage) {
    console.error('❌ Modal elements not found:', { photoModal: !!photoModal, modalImage: !!modalImage });
    return;
  }
  
  currentImageIndex = index;
  const imageSrc = appData.images[index];
  
  modalImage.src = imageSrc;
  modalImage.alt = `Beautiful Memory ${index + 1}`;
  
  modalImage.onerror = function() {
    console.log('⚠️ Modal image failed to load, using placeholder');
    const gradientIndex = index % 5;
    const gradients = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    ];
    this.src = `data:image/svg+xml;base64,${btoa(`
      <svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="600" height="400" fill="url(#grad1)" />
        <text x="300" y="180" font-family="Arial" font-size="40" fill="white" text-anchor="middle">📸</text>
        <text x="300" y="230" font-family="Arial" font-size="24" fill="white" text-anchor="middle">Beautiful Memory ${index + 1}</text>
        <text x="300" y="260" font-family="Arial" font-size="16" fill="white" text-anchor="middle" opacity="0.8">From Instagram Collection</text>
      </svg>
    `)}`;
  };
  
  // Show modal
  photoModal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  // Create modal opening celebration
  createModalCelebration();
  
  console.log('✅ Modal opened successfully');
}

function closeModal() {
  console.log('🚪 Closing modal');
  
  if (!photoModal) {
    console.error('❌ Photo modal not found');
    return;
  }
  
  photoModal.classList.add('hidden');
  document.body.style.overflow = 'auto';
  
  console.log('✅ Modal closed successfully');
}

function showPreviousImage() {
  currentImageIndex = (currentImageIndex - 1 + appData.images.length) % appData.images.length;
  console.log('⬅️ Showing previous image:', currentImageIndex);
  
  if (modalImage) {
    modalImage.src = appData.images[currentImageIndex];
    modalImage.alt = `Beautiful Memory ${currentImageIndex + 1}`;
    
    // Handle error for navigation images too
    modalImage.onerror = function() {
      console.log('⚠️ Navigation image failed to load, using placeholder');
      this.src = `data:image/svg+xml;base64,${btoa(`
        <svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="600" height="400" fill="url(#grad1)" />
          <text x="300" y="180" font-family="Arial" font-size="40" fill="white" text-anchor="middle">📸</text>
          <text x="300" y="230" font-family="Arial" font-size="24" fill="white" text-anchor="middle">Beautiful Memory ${currentImageIndex + 1}</text>
          <text x="300" y="260" font-family="Arial" font-size="16" fill="white" text-anchor="middle" opacity="0.8">From Instagram Collection</text>
        </svg>
      `)}`;
    };
  }
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % appData.images.length;
  console.log('➡️ Showing next image:', currentImageIndex);
  
  if (modalImage) {
    modalImage.src = appData.images[currentImageIndex];
    modalImage.alt = `Beautiful Memory ${currentImageIndex + 1}`;
    
    // Handle error for navigation images too
    modalImage.onerror = function() {
      console.log('⚠️ Navigation image failed to load, using placeholder');
      this.src = `data:image/svg+xml;base64,${btoa(`
        <svg width="600" height="400" viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
            </linearGradient>
          </defs>
          <rect width="600" height="400" fill="url(#grad1)" />
          <text x="300" y="180" font-family="Arial" font-size="40" fill="white" text-anchor="middle">📸</text>
          <text x="300" y="230" font-family="Arial" font-size="24" fill="white" text-anchor="middle">Beautiful Memory ${currentImageIndex + 1}</text>
          <text x="300" y="260" font-family="Arial" font-size="16" fill="white" text-anchor="middle" opacity="0.8">From Instagram Collection</text>
        </svg>
      `)}`;
    };
  }
}

// Create click celebration effect
function createClickCelebration(x, y) {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];
  
  for (let i = 0; i < 15; i++) {
    const celebration = document.createElement('div');
    celebration.style.cssText = `
      position: absolute;
      width: 8px;
      height: 8px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      left: ${x}px;
      top: ${y}px;
      z-index: 1000;
      pointer-events: none;
      box-shadow: 0 0 10px currentColor;
    `;
    
    const angle = (i * 24) * Math.PI / 180;
    const velocity = 50 + Math.random() * 100;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    celebration.animate([
      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      { transform: `translate(${vx}px, ${vy}px) scale(0)`, opacity: 0 }
    ], {
      duration: 800,
      easing: 'ease-out'
    }).onfinish = () => celebration.remove();
    
    document.body.appendChild(celebration);
  }
}

// Trigger mega celebration
function triggerMegaCelebration(x, y) {
  console.log('🎊💥 MEGA CELEBRATION ACTIVATED! 💥🎊');
  
  // Create massive confetti explosion
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      createExplosiveConfetti();
    }, i * 20);
  }
  
  // Create fireworks show
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      createFireworks();
    }, i * 100);
  }
  
  // Create celebration burst at click point
  createMegaBurst(x, y);
  
  // Shake the celebration button
  if (celebrateBtn) {
    celebrateBtn.style.animation = 'none';
    setTimeout(() => {
      celebrateBtn.style.animation = 'rainbowButton 3s infinite, bounceFloat 2s infinite, celebrationShake 0.5s ease-in-out';
    }, 10);
  }
  
  // Show special message
  showSpecialMessage("🎉🎂 HAPPY BIRTHDAY JIKU! 🎂🎉");
}

// Create mega celebration burst
function createMegaBurst(x, y) {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#ff9ff3', '#54a0ff'];
  
  for (let i = 0; i < 50; i++) {
    const burst = document.createElement('div');
    burst.style.cssText = `
      position: absolute;
      width: 12px;
      height: 12px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      left: ${x}px;
      top: ${y}px;
      z-index: 1002;
      pointer-events: none;
      box-shadow: 0 0 20px currentColor;
    `;
    
    const angle = (i * 7.2) * Math.PI / 180;
    const velocity = 150 + Math.random() * 200;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    burst.animate([
      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      { transform: `translate(${vx}px, ${vy}px) scale(0)`, opacity: 0 }
    ], {
      duration: 1500,
      easing: 'ease-out'
    }).onfinish = () => burst.remove();
    
    document.body.appendChild(burst);
  }
}

// Start celebration sequence
function startCelebrationSequence() {
  // Start random celebrations every few seconds
  setInterval(() => {
    if (Math.random() < 0.3) { // 30% chance
      createRandomScreenCelebration();
    }
  }, 3000);
  
  // Start birthday wishes rotation
  startBirthdayWishes();
  
  // Start ambient particles
  setInterval(() => {
    createFloatingParticles();
  }, 10000);
}

// Start birthday wishes
function startBirthdayWishes() {
  if (!birthdayWishes) return;
  
  let currentWishIndex = 0;
  
  setInterval(() => {
    const wish = document.createElement('div');
    wish.className = 'wish-text';
    wish.textContent = appData.celebrationMessages[currentWishIndex];
    
    birthdayWishes.innerHTML = '';
    birthdayWishes.appendChild(wish);
    
    currentWishIndex = (currentWishIndex + 1) % appData.celebrationMessages.length;
  }, 4000);
}

// Create random screen celebration
function createRandomScreenCelebration() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  createRandomCelebration(x, y);
}

// Create random celebration effect
function createRandomCelebration(x, y) {
  const effects = [
    () => createClickCelebration(x, y),
    () => createMiniFirework(x, y),
    () => createHeartBurst(x, y),
    () => createStarBurst(x, y)
  ];
  
  const randomEffect = effects[Math.floor(Math.random() * effects.length)];
  randomEffect();
}

// Create mini firework
function createMiniFirework(x, y) {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'];
  
  for (let i = 0; i < 8; i++) {
    const spark = document.createElement('div');
    spark.style.cssText = `
      position: absolute;
      width: 6px;
      height: 6px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      left: ${x}px;
      top: ${y}px;
      z-index: 999;
      pointer-events: none;
      box-shadow: 0 0 15px currentColor;
    `;
    
    const angle = (i * 45) * Math.PI / 180;
    const velocity = 80 + Math.random() * 60;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    spark.animate([
      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      { transform: `translate(${vx}px, ${vy}px) scale(0)`, opacity: 0 }
    ], {
      duration: 1000,
      easing: 'ease-out'
    }).onfinish = () => spark.remove();
    
    document.body.appendChild(spark);
  }
}

// Create heart burst
function createHeartBurst(x, y) {
  const hearts = ['❤️', '💖', '💕', '💗', '💝'];
  
  for (let i = 0; i < 6; i++) {
    const heart = document.createElement('div');
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.cssText = `
      position: absolute;
      font-size: 20px;
      left: ${x}px;
      top: ${y}px;
      z-index: 999;
      pointer-events: none;
    `;
    
    const angle = (i * 60) * Math.PI / 180;
    const velocity = 60 + Math.random() * 40;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    heart.animate([
      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      { transform: `translate(${vx}px, ${vy}px) scale(0)`, opacity: 0 }
    ], {
      duration: 1200,
      easing: 'ease-out'
    }).onfinish = () => heart.remove();
    
    document.body.appendChild(heart);
  }
}

// Create star burst
function createStarBurst(x, y) {
  const stars = ['⭐', '✨', '🌟', '💫'];
  
  for (let i = 0; i < 8; i++) {
    const star = document.createElement('div');
    star.textContent = stars[Math.floor(Math.random() * stars.length)];
    star.style.cssText = `
      position: absolute;
      font-size: 18px;
      left: ${x}px;
      top: ${y}px;
      z-index: 999;
      pointer-events: none;
    `;
    
    const angle = (i * 45) * Math.PI / 180;
    const velocity = 70 + Math.random() * 50;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    star.animate([
      { transform: 'translate(0, 0) scale(1) rotate(0deg)', opacity: 1 },
      { transform: `translate(${vx}px, ${vy}px) scale(0) rotate(360deg)`, opacity: 0 }
    ], {
      duration: 1400,
      easing: 'ease-out'
    }).onfinish = () => star.remove();
    
    document.body.appendChild(star);
  }
}

// Additional celebration functions
function createSocialCelebration(button) {
  const rect = button.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  
  createHeartBurst(x, y);
  
  // Add temporary glow effect
  button.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.8), 0 20px 40px rgba(0, 0, 0, 0.2)';
  setTimeout(() => {
    button.style.boxShadow = '';
  }, 1000);
}

function createHoverSparkles(element) {
  const rect = element.getBoundingClientRect();
  
  for (let i = 0; i < 5; i++) {
    const sparkle = document.createElement('div');
    sparkle.textContent = '✨';
    sparkle.style.cssText = `
      position: absolute;
      font-size: 12px;
      left: ${rect.left + Math.random() * rect.width}px;
      top: ${rect.top + Math.random() * rect.height}px;
      z-index: 998;
      pointer-events: none;
    `;
    
    sparkle.animate([
      { transform: 'scale(0)', opacity: 0 },
      { transform: 'scale(1)', opacity: 1 },
      { transform: 'scale(0)', opacity: 0 }
    ], {
      duration: 1000,
      easing: 'ease-in-out'
    }).onfinish = () => sparkle.remove();
    
    document.body.appendChild(sparkle);
  }
}

function createButtonSparkles(button) {
  const sparkles = button.querySelector('.btn-sparkles');
  if (sparkles) {
    sparkles.style.animation = 'none';
    setTimeout(() => {
      sparkles.style.animation = 'sparkleRotate 2s infinite, megaPulse 1s infinite';
    }, 10);
  }
}

function createModalCelebration() {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'];
  
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * window.innerWidth}px;
        top: -10px;
        z-index: 2001;
        pointer-events: none;
      `;
      
      confetti.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
        { transform: `translateY(${window.innerHeight + 50}px) rotate(360deg)`, opacity: 0 }
      ], {
        duration: 2000 + Math.random() * 1000,
        easing: 'ease-out'
      }).onfinish = () => confetti.remove();
      
      document.body.appendChild(confetti);
    }, i * 50);
  }
}

function createVideoCelebration(video) {
  const rect = video.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  
  createMiniFirework(x, y);
}

function showSpecialMessage(message) {
  const messageEl = document.createElement('div');
  messageEl.textContent = message;
  messageEl.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    font-weight: bold;
    color: #ff6b6b;
    z-index: 2002;
    pointer-events: none;
    text-shadow: 0 0 20px rgba(255, 107, 107, 0.8);
    text-align: center;
  `;
  
  messageEl.animate([
    { transform: 'translate(-50%, -50%) scale(0)', opacity: 0 },
    { transform: 'translate(-50%, -50%) scale(1.2)', opacity: 1 },
    { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
    { transform: 'translate(-50%, -50%) scale(0)', opacity: 0 }
  ], {
    duration: 3000,
    easing: 'ease-in-out'
  }).onfinish = () => messageEl.remove();
  
  document.body.appendChild(messageEl);
}

// Setup scroll animations with celebrations
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'slideInFromBottom 0.8s ease-out forwards';
        entry.target.style.opacity = '1';
        
        // Create celebration when section appears
        const rect = entry.target.getBoundingClientRect();
        createRandomCelebration(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }
    });
  }, observerOptions);
  
  // Observe all sections
  document.querySelectorAll('section').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
  
  // Observe photo items
  setTimeout(() => {
    document.querySelectorAll('.photo-item').forEach(el => {
      el.style.opacity = '0';
      observer.observe(el);
    });
  }, 100);
}

// Setup parallax effects
function setupParallaxEffects() {
  let ticking = false;
  
  function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-element');
    
    parallaxElements.forEach((element, index) => {
      const speed = 0.3 + (index * 0.05);
      const yPos = -(scrolled * speed);
      const rotation = scrolled * 0.02 * (index + 1);
      element.style.transform = `translate3d(0, ${yPos}px, 0) rotate(${rotation}deg)`;
    });
    
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }
  
  window.addEventListener('scroll', requestTick);
}

// Setup touch gestures
function setupTouchGestures() {
  if (!photoModal) return;
  
  let startX = 0, startY = 0;
  
  photoModal.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  });
  
  photoModal.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = startX - endX;
    const diffY = startY - endY;
    
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        showNextImage();
      } else {
        showPreviousImage();
      }
      
      // Create swipe celebration
      createClickCelebration(endX, endY);
    }
  });
}

// Start continuous celebration
function startContinuousCelebration() {
  // Continuous confetti every 10 seconds
  setInterval(() => {
    if (Math.random() < 0.7) {
      createExplosiveConfetti();
    }
  }, 10000);
  
  // Random fireworks every 15 seconds
  setInterval(() => {
    if (Math.random() < 0.5) {
      createFireworks();
    }
  }, 15000);
  
  // Floating particles every 8 seconds
  setInterval(() => {
    createFloatingParticles();
  }, 8000);
}

// Setup image loading with celebrations
function setupImageLoading() {
  setTimeout(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img, index) => {
      if (!img.complete) {
        img.style.opacity = '0';
        img.addEventListener('load', function() {
          this.style.transition = 'opacity 0.5s ease';
          this.style.opacity = '1';
          
          // Create celebration when image loads
          setTimeout(() => {
            const rect = this.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              createHoverSparkles(this.parentNode);
            }
          }, 100);
        });
      }
    });
  }, 1000);
}

// Setup advanced interactions
function setupAdvancedInteractions() {
  // Double-click for mega celebration
  document.addEventListener('dblclick', (e) => {
    triggerMegaCelebration(e.clientX, e.clientY);
  });
  
  // Right-click celebration (prevent context menu)
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    createRandomCelebration(e.clientX, e.clientY);
  });
  
  // Mouse movement particles (throttled)
  let mouseParticleTimeout;
  document.addEventListener('mousemove', (e) => {
    if (mouseParticleTimeout) return;
    
    mouseParticleTimeout = setTimeout(() => {
      if (Math.random() < 0.1) { // 10% chance
        createMiniSparkle(e.clientX, e.clientY);
      }
      mouseParticleTimeout = null;
    }, 200);
  });
}

// Create mini sparkle on mouse movement
function createMiniSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.textContent = '✨';
  sparkle.style.cssText = `
    position: absolute;
    font-size: 10px;
    left: ${x}px;
    top: ${y}px;
    z-index: 997;
    pointer-events: none;
  `;
  
  sparkle.animate([
    { transform: 'scale(0)', opacity: 0 },
    { transform: 'scale(1)', opacity: 1 },
    { transform: 'scale(0)', opacity: 0 }
  ], {
    duration: 800,
    easing: 'ease-out'
  }).onfinish = () => sparkle.remove();
  
  document.body.appendChild(sparkle);
}

// Add dynamic CSS for new animations
const celebrationStyle = document.createElement('style');
celebrationStyle.textContent = `
  @keyframes sparkFly {
    0% { transform: translate(0, 0); opacity: 1; }
    100% { transform: translate(var(--vx), var(--vy)); opacity: 0; }
  }
  
  @keyframes celebrationShake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px) rotate(-2deg); }
    75% { transform: translateX(5px) rotate(2deg); }
  }
  
  @keyframes slideInFromBottom {
    from {
      opacity: 0;
      transform: translateY(60px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;
document.head.appendChild(celebrationStyle);

console.log('🎉🎂✨ SPECTACULAR BIRTHDAY CELEBRATION WEBSITE IS READY! ✨🎂🎉');
console.log('🎊 Every click creates magic! Every scroll brings joy! 🎊');
console.log('💝 Made with infinite love for JIKU DEBNATH! 💝');
console.log('🌟 Developed by Nilay Ghosh with ❤️ 🌟');