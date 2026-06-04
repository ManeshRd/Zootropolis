AFRAME.registerComponent('freeze-pose', {
  init: function () {
    const el = this.el;
    el.addEventListener('model-loaded', function () {
      const mixer = el.components['animation-mixer'];
      if (mixer && mixer.mixer) {
        mixer.mixer.timeScale = 0;
        mixer.mixer.setTime(0);
      }
    });
  }
});

AFRAME.registerComponent("movement-bounds", {
  schema: {
    minX: { type: "number", default: -10.5 },
    maxX: { type: "number", default: 3.5 },
    minZ: { type: "number", default: -12.5 },
    maxZ: { type: "number", default: 0.5 }
  },
  init: function () {
    this.camera = this.el.querySelector("a-camera") || this.el;
  },
  tick: function () {
    const el = this.camera || this.el;
    const pos = el.object3D.position;
    const worldPos = new THREE.Vector3();
    el.object3D.getWorldPosition(worldPos);

    if (worldPos.x < this.data.minX) pos.x += this.data.minX - worldPos.x;
    if (worldPos.x > this.data.maxX) pos.x -= worldPos.x - this.data.maxX;
    if (worldPos.z < this.data.minZ) pos.z += this.data.minZ - worldPos.z;
    if (worldPos.z > this.data.maxZ) pos.z -= worldPos.z - this.data.maxZ;
  }
});

function fadeToPage(path) {
  const fade = document.createElement("div");
  fade.style.cssText = `
    position: fixed;
    inset: 0;
    background: black;
    opacity: 0;
    z-index: 9999;
    transition: opacity 0.8s ease;
    pointer-events: none;
  `;
  document.body.appendChild(fade);

  requestAnimationFrame(() => {
    fade.style.opacity = "1";
  });

  setTimeout(() => {
    window.location.href = path;
  }, 900);
}

window.addEventListener("load", () => {
  const params = new URLSearchParams(window.location.search);

  if (params.get("from") === "crimeboard") {
    const player = document.getElementById("player");
    if (player) {
      player.setAttribute("position", "3.5 1.6 -10");
      const camera = player.querySelector("a-camera");
      if (camera && camera.components["look-controls"] && camera.components["look-controls"].yawObject) {
        camera.components["look-controls"].yawObject.rotation.y = Math.PI / 2;
      }
    }
  }

  const door = document.getElementById("door");
  const outsideDoor = document.getElementById("outside");

  if (door) {
  door.addEventListener("click", () => {
    fadeToPage("../crimeboard/crimeboard.html");
  });
  }

  if (outsideDoor) {
  outsideDoor.addEventListener("click", () => {
    fadeToPage("../Choise/choise.html");
  });
  }

  const fade = document.createElement("div");
  fade.style.cssText = `
    position: fixed;
    inset: 0;
    background: black;
    opacity: 1;
    z-index: 9999;
    transition: opacity 0.8s ease;
    pointer-events: none;
  `;
  document.body.appendChild(fade);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      fade.style.opacity = "0";
    });
  });

  setTimeout(() => {
    fade.remove();
  }, 900);
});