import { gsap } from 'gsap';

/**
 * Triggers a confetti burst animation from a specific element
 * @param {HTMLElement} element - The element to trigger confetti from (usually a button)
 */
export const triggerConfetti = (element) => {
  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const colors = ['#FFF7AF', '#2C4B45', '#A1ADEB'];
  const confettiCount = 36;

  // Get element position
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Create temporary container
  const container = document.createElement('div');
  container.style.cssText = `
    position: fixed;
    left: ${centerX}px;
    top: ${centerY}px;
    pointer-events: none;
    z-index: 9999;
  `;
  document.body.appendChild(container);

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';

    // Evenly distribute angles to prevent overlap
    const angle = (i / confettiCount) * Math.PI * 2;
    const velocity = 200 + (i % 3) * 80; // 3 rings at different distances
    const xDest = Math.cos(angle) * velocity;
    const yDest = Math.sin(angle) * velocity;

    confetti.style.cssText = `
      position: absolute;
      width: 14px;
      height: 14px;
      background: ${colors[i % colors.length]};
      left: 0;
      top: 0;
      opacity: 1;
      border-radius: 50%;
    `;
    container.appendChild(confetti);

    gsap.to(confetti, {
      x: xDest,
      y: yDest,
      opacity: 0,
      duration: 2,
      ease: 'power2.out',
      onComplete: () => {
        confetti.remove();
        // Clean up container when last confetti is done
        if (container.children.length === 0) {
          container.remove();
        }
      }
    });
  }

  // Cleanup container after animation completes (safety timeout)
  setTimeout(() => {
    if (container.parentNode) {
      container.remove();
    }
  }, 2500);
};
