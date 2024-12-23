const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
const sonic = document.getElementById('sonic');
const trail = document.getElementById('trail');

sonic.addEventListener('animationend', () => {
  sonic.remove(); // Rimuove Sonic e la scia
});

trail.addEventListener('animationend', () => {
  trail.remove(); // Assicura che anche la scia sia rimossa
});
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.count');
  const speed = 150;

  counters.forEach(counter => {
    const animate = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;

      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(animate, 20);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    animate();
  });
});
