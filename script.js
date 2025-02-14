// Hover Effects for Special Game Blocks
const specialGameCards = document.querySelectorAll('.game-card.special');

specialGameCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.5)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
  });
});

// Click Animations for Play Buttons
const playButtons = document.querySelectorAll('.game-card.special .play-button');

playButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 200);
  });
});

// Dynamic Background Interaction (from earlier)
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  const color1 = `hsl(${x * 360}, 70%, 50%)`;
  const color2 = `hsl(${y * 360}, 70%, 50%)`;
  document.body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
});

// Scroll Animations for Special Game Blocks
const specialGameObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    } else {
      entry.target.style.opacity = '0';
      entry.target.style.transform = 'translateY(50px)';
    }
  });
}, {
  threshold: 0.5, // Trigger animation when 50% of the block is visible
});

specialGameCards.forEach(card => {
  specialGameObserver.observe(card);
});
