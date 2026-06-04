// Fade in bij pagina laden
window.addEventListener("load", () => {
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

AFRAME.registerComponent("movement-bounds", {
  schema: {
    minX: { type: "number", default: -5.5 },
    maxX: { type: "number", default:  5.5 },
    minZ: { type: "number", default: -4.5 },
    maxZ: { type: "number", default:  4.5 }
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

document.getElementById("door").addEventListener("click", () => {
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
    window.location.href = "/Zootropolis/briefingroom/briefingroom.html?from=crimeboard";
  }, 900);
});
