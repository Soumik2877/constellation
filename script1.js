const canvas = document.getElementById("constellationCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const logoCount = 69;
const logoSize = 70; // Consistent logo size
const connectionDistance = 150;
const logos = [];
const imagePaths = []; // Fill with your 80 logo paths

// Example: Replace with your own paths
for (let i = 1; i <= logoCount; i++) {
  imagePaths.push(`logos/logo${i}.png`);
}

function isOverlapping(x, y) {
  return logos.some((logo) => {
    const dx = logo.x - x;
    const dy = logo.y - y;
    return Math.hypot(dx, dy) < logoSize;
  });
}

function loadLogos() {
  let loaded = 0;
  imagePaths.forEach((src) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      let x, y;
      do {
        x = Math.random() * (canvas.width - logoSize);
        y = Math.random() * (canvas.height - logoSize);
      } while (isOverlapping(x, y));

      logos.push({
        img,
        x,
        y,
        dx: (Math.random() - 0.5) * 0.6,
        dy: (Math.random() - 0.5) * 0.6,
        width: logoSize,
        height: logoSize,
      });

      loaded++;
      if (loaded === imagePaths.length) animate();
    };
  });
}

function bounce(logoA, logoB) {
  const dx = logoB.x - logoA.x;
  const dy = logoB.y - logoA.y;
  const dist = Math.hypot(dx, dy);
  const overlap = logoSize - dist;

  if (overlap > 0) {
    const angle = Math.atan2(dy, dx);
    const moveX = Math.cos(angle) * overlap / 2;
    const moveY = Math.sin(angle) * overlap / 2;

    logoA.x -= moveX;
    logoA.y -= moveY;
    logoB.x += moveX;
    logoB.y += moveY;

    [logoA.dx, logoB.dx] = [logoB.dx, logoA.dx];
    [logoA.dy, logoB.dy] = [logoB.dy, logoA.dy];
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Lines behind logos
  for (let i = 0; i < logos.length; i++) {
    for (let j = i + 1; j < logos.length; j++) {
      const dx = logos[i].x - logos[j].x;
      const dy = logos[i].y - logos[j].y;
      const dist = Math.hypot(dx, dy);

      if (dist < connectionDistance) {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
        ctx.moveTo(logos[i].x + logoSize / 2, logos[i].y + logoSize / 2);
        ctx.lineTo(logos[j].x + logoSize / 2, logos[j].y + logoSize / 2);
        ctx.stroke();
      }
    }
  }

  // Collision Detection
  for (let i = 0; i < logos.length; i++) {
    for (let j = i + 1; j < logos.length; j++) {
      bounce(logos[i], logos[j]);
    }
  }

  // Logo Movement
  logos.forEach((logo) => {
    logo.x += logo.dx;
    logo.y += logo.dy;

    // Bounce on edges
    if (logo.x <= 0 || logo.x + logoSize >= canvas.width) logo.dx *= -1;
    if (logo.y <= 0 || logo.y + logoSize >= canvas.height) logo.dy *= -1;

    ctx.drawImage(logo.img, logo.x, logo.y, logoSize, logoSize);
  });

  requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

loadLogos();