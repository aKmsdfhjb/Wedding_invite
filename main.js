

<script>
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
});

function startInvitation() {
  const audio = document.getElementById('weddingSong');
  const overlay = document.getElementById('overlay');
  const content = document.getElementById('mainContent');

  audio.play().catch(e => console.log("Audio blocked"));
  overlay.style.transform = "translateY(-100%)";
  content.style.display = "block";
  
  setTimeout(() => {
    document.querySelectorAll('.fade').forEach(el => observer.observe(el));
  }, 100);
}

const weddingDate = new Date("Feb 26, 2026 09:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("countdown").innerHTML = `⏳ ${d} दिन, ${h} घण्टा बाँकी`;
}, 1000);


  /* ================================
   🌸 Flower Shower Script
================================ */

(function () {
  const container = document.getElementById("flower-shower");

  // Two flower types (theme friendly)
  const flowers = ["🌸", "💮"];

  const isMobile = window.innerWidth < 768;

  // Fewer flowers on mobile
  const maxFlowers = isMobile ? 15 : 30;

  function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];

    // Random horizontal position
    flower.style.left = Math.random() * 100 + "vw";

    // Random fall duration
    const duration = Math.random() * 5 + 5;
    flower.style.animationDuration = duration + "s";

    // Random size variation
    const size = Math.random() * 10 + 15;
    flower.style.fontSize = size + "px";

    container.appendChild(flower);

    // Remove after animation ends (performance safe)
    setTimeout(() => {
      flower.remove();
    }, duration * 1000);
  }

  // Controlled interval (not cluttered)
  setInterval(() => {
    if (container.childElementCount < maxFlowers) {
      createFlower();
    }
  }, 500);

})();

</script>
