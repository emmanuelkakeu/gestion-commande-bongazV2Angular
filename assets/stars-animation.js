document.addEventListener('DOMContentLoaded', () => {
  const starContainers = document.querySelectorAll('.stars, .stars2, .stars3');

  starContainers.forEach(container => {
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.style.position = 'absolute';
      star.style.width = '4px';
      star.style.height = '4px';
      star.style.backgroundColor = 'white';
      star.style.boxShadow = '0px 0px 5px 1px white';
      star.style.borderRadius = '50%';
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      container.appendChild(star);
    }
  });
});
