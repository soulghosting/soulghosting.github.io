const rainContainer = document.querySelector('.rain-container');

function createRaindrop() {
  const raindrop = document.createElement('div');
  raindrop.classList.add('raindrop');
  raindrop.style.left = `${Math.random() * 100}vw`;
  raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
  raindrop.style.opacity = Math.random() * 0.3 + 0.2;
  rainContainer.appendChild(raindrop);

  setTimeout(() => {
    raindrop.remove();
  }, 3000);
}

setInterval(createRaindrop, 100);

const ghost = document.querySelector('.ghost'); 

function randomInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function blink() {
  if (ghost) {
    ghost.classList.add('blinking');
    setTimeout(() => {
      ghost.classList.remove('blinking');
    }, 200); // Blink duration
    setTimeout(blink, randomInterval(3000, 7000));
  }
}

function lookAround() {
  if (ghost) {
    const firstDirection = Math.random() < 0.5 ? 'looking-left' : 'looking-right';
    const secondDirection = firstDirection === 'looking-left' ? 'looking-right' : 'looking-left';
    
    ghost.classList.add('looking', firstDirection);
    setTimeout(() => {
      ghost.classList.remove(firstDirection);
      setTimeout(() => {
        ghost.classList.add(secondDirection);
        setTimeout(() => {
          ghost.classList.remove('looking', secondDirection);
        }, 1000);
      }, 300);
    }, 1000);
    
    setTimeout(lookAround, randomInterval(4000, 10000));
  }
}

blink();
lookAround();