const scene = document.getElementById("scene");
const welcome = document.getElementById("welcome");
const enterHint = document.getElementById("enterHint");
const clawhauser = document.getElementById("clawhauser");

const doorClosed = document.getElementById("doorClosed");
const doorHalf = document.getElementById("doorHalf");
const doorOpen = document.getElementById("doorOpen");
const lobby = document.getElementById("lobby");

const lobbyJudy = document.getElementById("lobbyJudy");
const judyBubble = document.getElementById("judyBubble");
const lobbyClawhauserBubble = document.getElementById("lobbyClawhauserBubble");

const lobbyQR = document.getElementById("lobbyQR");
const lobbyQRPanel = document.getElementById("lobbyQRPanel");

const TIMING = {
  welcomeFadeOut: 3000,
  enterShow: 3800,
  clawShow: 4300,
  doorHalf: 650,
  doorOpen: 1350,
  lobbyReveal: 2200,
  judyReveal: 3300,
  clawhauserBubbleReveal: 3600,
};

let hasEntered = false;
let canEnter = false;

window.addEventListener("load", () => {
  setTimeout(() => {
    welcome.classList.add("out");
  }, TIMING.welcomeFadeOut);

  setTimeout(() => {
    enterHint.classList.add("visible");
    canEnter = true;
  }, TIMING.enterShow);

  setTimeout(() => {
    clawhauser.classList.add("visible");
  }, TIMING.clawShow);
});

function enterLobby() {
  if (hasEntered || !canEnter) return;

  hasEntered = true;
  scene.classList.add("entering");

  doorClosed.classList.add("shown");

  setTimeout(() => {
    doorHalf.classList.add("shown");
  }, TIMING.doorHalf);

  setTimeout(() => {
    doorOpen.classList.add("shown");
  }, TIMING.doorOpen);

  setTimeout(() => {
    lobby.classList.add("shown");
  }, TIMING.lobbyReveal);

  setTimeout(() => {
    lobbyJudy.classList.add("shown");
    judyBubble.classList.add("shown");

    if (lobbyQRPanel) {
      lobbyQRPanel.classList.add("shown");
    }

    if (lobbyQR) {
      lobbyQR.classList.add("shown");
    }
  }, TIMING.judyReveal);

  setTimeout(() => {
    if (lobbyClawhauserBubble) {
      lobbyClawhauserBubble.classList.add("shown");
    }
  }, TIMING.clawhauserBubbleReveal);
}

/* Click on text */
enterHint.addEventListener("click", (event) => {
  event.stopPropagation();
  enterLobby();
});

/* Click anywhere after hint appears */
scene.addEventListener("click", () => {
  enterLobby();
});

/* Judy goes to briefing room */
lobbyJudy.addEventListener("click", (event) => {
  event.stopPropagation();
  window.location.href = "/briefingroom/briefingroom.html";
});

const clues = document.querySelectorAll(".clue");
const followTrail = document.getElementById("followTrail");

if (followTrail && clues.length > 0) {
  clues.forEach((clue) => {
    clue.addEventListener("click", () => {
      followTrail.classList.add("visible");
    });
  });
}

if (window.location.hash === "#lobbyJudy") {
  hasEntered = true;
  canEnter = true;

  lobby.classList.add("shown");
  lobbyJudy.classList.add("shown");
  judyBubble.classList.add("shown");

  if (lobbyQRPanel) {
    lobbyQRPanel.classList.add("shown");
  }

  if (lobbyQR) {
    lobbyQR.classList.add("shown");
  }

  if (lobbyClawhauserBubble) {
    lobbyClawhauserBubble.classList.add("shown");
  }
}