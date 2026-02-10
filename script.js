console.log("script.js loaded");

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const slot = document.querySelector(".no-slot");
const card = document.querySelector(".card-container");

let dodgeCount = 0;
let rageSpeed = 120;
let baseCardWidth = card.offsetWidth;

function dodge() {
  const maxX = slot.clientWidth - noBtn.offsetWidth;
  const maxY = slot.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  dodgeCount++;

  // 🔻 NO button shrinks
  const noScale = Math.max(0.1, 1 - dodgeCount * 0.08);
  noBtn.style.transform = `translate(-50%, -50%) scale(${noScale})`;

  // 🔺 YES button grows
  const yesWidth = 180 + dodgeCount * 12;
  const yesHeight = 40 + dodgeCount * 6;
  yesBtn.style.width = `${yesWidth}px`;
  yesBtn.style.height = `${yesHeight}px`;

  // 🟥 Card grows with YES
  const extraCardWidth = dodgeCount * 14;
  const maxCardWidth = window.innerWidth * 0.9;
  card.style.width = `${Math.min(baseCardWidth + extraCardWidth, maxCardWidth)}px`;

  // 😡 Rage mode
  rageSpeed = Math.max(30, rageSpeed - 10);
  noBtn.style.transition = `top ${rageSpeed}ms linear, left ${rageSpeed}ms linear, transform 0.2s ease`;
}

noBtn.addEventListener("mouseenter", dodge);
noBtn.addEventListener("click", dodge);

// --- YES BUTTON FUNCTION ---
yesBtn.addEventListener("click", function () {
  window.location.href = "YesAnswer.html"; // replace with your target page
});
