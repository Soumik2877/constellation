// const canvas = document.getElementById('constellationCanvas');
// const ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const NUM_LOGOS = 50;
// const logos = [];

// const logoPaths = Array.from({ length: NUM_LOGOS }, (_, i) => `logos/logo${i + 1}.png`);

// const CENTER_X = canvas.width / 2;
// const CENTER_Y = canvas.height / 2;
// const LOGO_SIZE = 60; // smaller logos = less chance of overlap
// const BASE_RADIUS = 400;
// const RADIUS_STEP = 100;
// const LOGOS_PER_RING = 15;

// Promise.all(
//   logoPaths.map(src => new Promise(resolve => {
//     const img = new Image();
//     img.onload = () => resolve(img);
//     img.src = src;
//   }))
// ).then(images => {
//   let currentLogo = 0;
//   let ring = 0;

//   while (currentLogo < NUM_LOGOS) {
//     const logosInThisRing = Math.min(LOGOS_PER_RING + ring * 5, NUM_LOGOS - currentLogo); // Expand per ring
//     const angleStep = (2 * Math.PI) / logosInThisRing;
//     const radius = BASE_RADIUS + ring * RADIUS_STEP;

//     for (let i = 0; i < logosInThisRing && currentLogo < NUM_LOGOS; i++) {
//       const angle = i * angleStep;
//       logos.push({
//         img: images[currentLogo],
//         angle,
//         radius,
//         speed: 0.001 + Math.random() * 0.002,
//         x: CENTER_X + radius * Math.cos(angle),
//         y: CENTER_Y + radius * Math.sin(angle)
//       });
//       currentLogo++;
//     }

//     ring++;
//   }

//   animate();
// });

// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // Constellation Lines
//   ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
//   ctx.lineWidth = 1;

//   for (let i = 0; i < logos.length; i++) {
//     for (let j = i + 1; j < logos.length; j++) {
//       const dx = logos[i].x - logos[j].x;
//       const dy = logos[i].y - logos[j].y;
//       const dist = Math.sqrt(dx * dx + dy * dy);
//       if (dist < 100) {
//         ctx.beginPath();
//         ctx.moveTo(logos[i].x, logos[i].y);
//         ctx.lineTo(logos[j].x, logos[j].y);
//         ctx.stroke();
//       }
//     }
//   }

//   // Logos
//   for (let logo of logos) {
//     logo.angle += logo.speed;
//     logo.x = CENTER_X + logo.radius * Math.cos(logo.angle);
//     logo.y = CENTER_Y + logo.radius * Math.sin(logo.angle);

//     ctx.save();
//     ctx.translate(logo.x, logo.y);
//     ctx.drawImage(logo.img, -LOGO_SIZE / 2, -LOGO_SIZE / 2, LOGO_SIZE, LOGO_SIZE);
//     ctx.restore();
//   }

//   requestAnimationFrame(animate);
// }



//v2

// const canvas = document.getElementById('constellationCanvas');
// const ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const NUM_LOGOS = 50;
// const logos = [];

// const logoPaths = Array.from({ length: NUM_LOGOS }, (_, i) => `logos/logo${i + 1}.png`);

// const CENTER_X = canvas.width / 2;
// const CENTER_Y = canvas.height / 2;
// const LOGO_SIZE = 60;
// const BASE_RADIUS = 700;
// const RADIUS_STEP = 60;
// const LOGOS_PER_RING = 8;
// const Y_SCALE = 0.55; // Elliptical squash factor

// Promise.all(
//   logoPaths.map(src => new Promise(resolve => {
//     const img = new Image();
//     img.onload = () => resolve(img);
//     img.src = src;
//   }))
// ).then(images => {
//   let currentLogo = 0;
//   let ring = 0;

//   while (currentLogo < NUM_LOGOS) {
//     const logosInThisRing = Math.min(LOGOS_PER_RING + ring * 4, NUM_LOGOS - currentLogo);
//     const angleStep = (2 * Math.PI) / logosInThisRing;
//     const radius = BASE_RADIUS + ring * RADIUS_STEP;

//     for (let i = 0; i < logosInThisRing && currentLogo < NUM_LOGOS; i++) {
//       const angle = i * angleStep;
//       logos.push({
//         img: images[currentLogo],
//         angle,
//         radius,
//         speed: 0.001 + Math.random() * 0.002,
//         x: CENTER_X + radius * Math.cos(angle),
//         y: CENTER_Y + radius * Y_SCALE * Math.sin(angle)
//       });
//       currentLogo++;
//     }

//     ring++;
//   }

//   animate();
// });

// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // Draw constellation lines
//   ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
//   ctx.lineWidth = 1;

//   for (let i = 0; i < logos.length; i++) {
//     for (let j = i + 1; j < logos.length; j++) {
//       const dx = logos[i].x - logos[j].x;
//       const dy = logos[i].y - logos[j].y;
//       const dist = Math.sqrt(dx * dx + dy * dy);
//       if (dist < 100) {
//         ctx.beginPath();
//         ctx.moveTo(logos[i].x, logos[i].y);
//         ctx.lineTo(logos[j].x, logos[j].y);
//         ctx.stroke();
//       }
//     }
//   }

//   // Draw logos
//   for (let logo of logos) {
//     logo.angle += logo.speed;
//     logo.x = CENTER_X + logo.radius * Math.cos(logo.angle);
//     logo.y = CENTER_Y + logo.radius * Y_SCALE * Math.sin(logo.angle);

//     ctx.save();
//     ctx.translate(logo.x, logo.y);
//     ctx.drawImage(logo.img, -LOGO_SIZE / 2, -LOGO_SIZE / 2, LOGO_SIZE, LOGO_SIZE);
//     ctx.restore();
//   }

//   requestAnimationFrame(animate);
// }


//v3

// const canvas = document.getElementById('constellationCanvas');
// const ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const NUM_LOGOS = 50;
// const logos = [];

// const logoPaths = Array.from({ length: NUM_LOGOS }, (_, i) => `logos/logo${i + 1}.png`);

// const CENTER_X = canvas.width / 2;
// const CENTER_Y = canvas.height / 2;
// const LOGO_SIZE = 80;
// const BASE_RADIUS = 400;         // Starts near center
// const RADIUS_STEP = 180;         // Controls ring spacing
// const LOGOS_PER_RING = 8;       // Base logos per ring
// const Y_SCALE = 0.55;           // Elliptical compression

// Promise.all(
//   logoPaths.map(src => new Promise(resolve => {
//     const img = new Image();
//     img.onload = () => resolve(img);
//     img.src = src;
//   }))
// ).then(images => {
//   let currentLogo = 0;
//   let ring = 0;

//   // Optional: Add a center logo
//   logos.push({
//     img: images[currentLogo++],
//     angle: 0,
//     radius: 0,
//     speed: 0,
//     x: CENTER_X,
//     y: CENTER_Y,
//     isCenter: true
//   });

//   while (currentLogo < NUM_LOGOS) {
//     const logosInThisRing = Math.min(LOGOS_PER_RING + ring * 4, NUM_LOGOS - currentLogo);
//     const angleStep = (2 * Math.PI) / logosInThisRing;
//     const radius = BASE_RADIUS + ring * RADIUS_STEP;

//     for (let i = 0; i < logosInThisRing && currentLogo < NUM_LOGOS; i++) {
//       const angle = i * angleStep;
//       logos.push({
//         img: images[currentLogo++],
//         angle,
//         radius,
//         speed: 0.0006 + Math.random() * 0.001,
//         x: CENTER_X + radius * Math.cos(angle),
//         y: CENTER_Y + radius * Y_SCALE * Math.sin(angle),
//         isCenter: false
//       });
//     }
//     ring++;
//   }

//   animate();
// });

// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // Optional: soft glow center
//   ctx.beginPath();
//   ctx.arc(CENTER_X, CENTER_Y, 20, 0, 2 * Math.PI);
//   ctx.fillStyle = "rgba(255,255,255,1)";
//   ctx.shadowBlur = 25;
//   ctx.shadowColor = "white";
//   ctx.fill();
//   ctx.shadowBlur = 0;

//   // Draw constellation lines
//   ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
//   ctx.lineWidth = 1;

//   for (let i = 0; i < logos.length; i++) {
//     for (let j = i + 1; j < logos.length; j++) {
//       const dx = logos[i].x - logos[j].x;
//       const dy = logos[i].y - logos[j].y;
//       const dist = Math.sqrt(dx * dx + dy * dy);
//       if (dist < 100) {
//         ctx.beginPath();
//         ctx.moveTo(logos[i].x, logos[i].y);
//         ctx.lineTo(logos[j].x, logos[j].y);
//         ctx.stroke();
//       }
//     }
//   }

//   // Draw & animate logos
//   for (let logo of logos) {
//     if (!logo.isCenter) {
//       logo.angle += logo.speed;
//       logo.x = CENTER_X + logo.radius * Math.cos(logo.angle);
//       logo.y = CENTER_Y + logo.radius * Y_SCALE * Math.sin(logo.angle);
//     }

//     ctx.save();
//     ctx.translate(logo.x, logo.y);
//     ctx.drawImage(logo.img, -LOGO_SIZE / 2, -LOGO_SIZE / 2, LOGO_SIZE, LOGO_SIZE);
//     ctx.restore();
//   }

//   requestAnimationFrame(animate);
// }


// const canvas = document.getElementById('constellationCanvas');
// const ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const NUM_LOGOS = 80;
// const logos = [];

// const LOGO_SIZE = 80;
// const FLOAT_SPEED = 0.2;
// const CONNECTION_RADIUS = 120; // max distance to connect with a line

// const logoPaths = Array.from({ length: NUM_LOGOS }, (_, i) => `logos/logo${i + 1}.png`);

// Promise.all(
//   logoPaths.map(src => new Promise(resolve => {
//     const img = new Image();
//     img.onload = () => resolve(img);
//     img.src = src;
//   }))
// ).then(images => {
//   for (let i = 0; i < NUM_LOGOS; i++) {
//     logos.push({
//       img: images[i],
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       dx: (Math.random() - 0.5) * FLOAT_SPEED,
//       dy: (Math.random() - 0.5) * FLOAT_SPEED
//     });
//   }

//   animate();
// });

// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // Draw constellation lines
//   ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
//   ctx.lineWidth = 1;

//   for (let i = 0; i < logos.length; i++) {
//     for (let j = i + 1; j < logos.length; j++) {
//       const dx = logos[i].x - logos[j].x;
//       const dy = logos[i].y - logos[j].y;
//       const dist = Math.sqrt(dx * dx + dy * dy);
//       if (dist < CONNECTION_RADIUS) {
//         ctx.beginPath();
//         ctx.moveTo(logos[i].x, logos[i].y);
//         ctx.lineTo(logos[j].x, logos[j].y);
//         ctx.stroke();
//       }
//     }
//   }

//   // Draw logos and gently move them
//   for (let logo of logos) {
//     // Float slightly
//     logo.x += logo.dx;
//     logo.y += logo.dy;

//     // // Bounce off edges
//     // if (logo.x < 0 || logo.x > canvas.width) logo.dx *= -1;
//     // if (logo.y < 0 || logo.y > canvas.height) logo.dy *= -1;

//     // Bounce off edges with logo size padding
// const halfSize = LOGO_SIZE / 2;

// if (logo.x < halfSize || logo.x > canvas.width - halfSize) {
//   logo.dx *= -1;
//   logo.x = Math.max(halfSize, Math.min(logo.x, canvas.width - halfSize));
// }
// if (logo.y < halfSize || logo.y > canvas.height - halfSize) {
//   logo.dy *= -1;
//   logo.y = Math.max(halfSize, Math.min(logo.y, canvas.height - halfSize));
// }

//     ctx.save();
//     ctx.translate(logo.x, logo.y);
//     ctx.drawImage(logo.img, -LOGO_SIZE / 2, -LOGO_SIZE / 2, LOGO_SIZE, LOGO_SIZE);
//     ctx.restore();
//   }

//   requestAnimationFrame(animate);
// }

//v4


const canvas = document.getElementById('constellationCanvas');
// const ctx = canvas.getContext('2d');
const ctx = canvas.getContext("2d");

let logos = [];
let logoImages = [];
const logoCount = 80;
const logoSize = 80;
const minDistance = 80; // to avoid overlaps

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Load logo images from your folder (update with actual filenames)
const logoPaths = [];
for (let i = 1; i <= logoCount; i++) {
  logoPaths.push(`logos/logo${i}.png`); // rename accordingly
}

let loaded = 0;
logoPaths.forEach((src, index) => {
  const img = new Image();
  img.onload = () => {
    loaded++;
    if (loaded === logoPaths.length) initLogos();
  };
  img.src = src;
  logoImages.push(img);
});

function initLogos() {
  logos = [];

  let attempts = 0;

  while (logos.length < logoCount && attempts < logoCount * 100) {
    attempts++;

    let x = Math.random() * (canvas.width - logoSize);
    let y = Math.random() * (canvas.height - logoSize);
    let overlap = false;

    for (let l of logos) {
      const dx = l.x - x;
      const dy = l.y - y;
      if (Math.sqrt(dx * dx + dy * dy) < minDistance) {
        overlap = true;
        break;
      }
    }

    if (!overlap) {
      const dx = (Math.random() - 0.5) * 0.7;
      const dy = (Math.random() - 0.5) * 0.7;
      logos.push({ x, y, dx, dy, img: logoImages[logos.length] });
    }
  }

  animate();
}


// function animate() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
  
//     // 1. Draw connecting lines first (behind logos)
//     for (let i = 0; i < logos.length; i++) {
//       for (let j = i + 1; j < logos.length; j++) {
//         const dx = logos[i].x - logos[j].x;
//         const dy = logos[i].y - logos[j].y;
//         const dist = Math.sqrt(dx * dx + dy * dy);
  
//         if (dist < 150) {
//           ctx.strokeStyle = `rgba(255,255,255,${2 - dist / 150})`;
//           ctx.lineWidth = 1;
//           ctx.beginPath();
//           ctx.moveTo(logos[i].x + logoSize / 2, logos[i].y + logoSize / 2);
//           ctx.lineTo(logos[j].x + logoSize / 2, logos[j].y + logoSize / 2);
//           ctx.stroke();
//         }
//       }
//     }
  
//     // 2. Update logo positions and draw them on top of the lines
//     for (let logo of logos) {
//       logo.x += logo.dx;
//       logo.y += logo.dy;
  
//       // bounce off walls
//       if (logo.x < 0 || logo.x + logoSize > canvas.width) logo.dx *= -1;
//       if (logo.y < 0 || logo.y + logoSize > canvas.height) logo.dy *= -1;
  
//       ctx.drawImage(logo.img, logo.x, logo.y, logoSize, logoSize);
//     }
  
//     requestAnimationFrame(animate);
//   }

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // 1. Draw connecting lines behind the logos
    for (let i = 0; i < logos.length; i++) {
      for (let j = i + 1; j < logos.length; j++) {
        const dx = logos[i].x - logos[j].x;
        const dy = logos[i].y - logos[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
  
        if (dist < 150) {
          ctx.strokeStyle = `rgba(255,255,255,${1 - dist / 150})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(logos[i].x + logoSize / 2, logos[i].y + logoSize / 2);
          ctx.lineTo(logos[j].x + logoSize / 2, logos[j].y + logoSize / 2);
          ctx.stroke();
        }
      }
    }
  
    // 2. Bounce on logo-to-logo collisions
    for (let i = 0; i < logos.length; i++) {
      let a = logos[i];
  
      for (let j = i + 1; j < logos.length; j++) {
        let b = logos[j];
  
        // AABB collision detection
        if (
          a.x < b.x + logoSize &&
          a.x + logoSize > b.x &&
          a.y < b.y + logoSize &&
          a.y + logoSize > b.y
        ) {
          // simple bounce: swap dx/dy
          let tempDx = a.dx;
          let tempDy = a.dy;
          a.dx = b.dx;
          a.dy = b.dy;
          b.dx = tempDx;
          b.dy = tempDy;
  
          // small position adjustment to prevent sticking
          a.x += a.dx;
          a.y += a.dy;
          b.x += b.dx;
          b.y += b.dy;
        }
      }
    }
  
    // 3. Move and draw logos
    for (let logo of logos) {
      logo.x += logo.dx;
      logo.y += logo.dy;
  
      // bounce off walls
      if (logo.x < 0 || logo.x + logoSize > canvas.width) logo.dx *= -1;
      if (logo.y < 0 || logo.y + logoSize > canvas.height) logo.dy *= -1;
  
      ctx.drawImage(logo.img, logo.x, logo.y, logoSize, logoSize);
    }
  
    requestAnimationFrame(animate);
  }
  