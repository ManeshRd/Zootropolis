// Live positie display
document.addEventListener('DOMContentLoaded', function () {
  const scene = document.querySelector('a-scene');

  scene.addEventListener('loaded', function () {

    // --- Live tracker ---
    const info = document.createElement('div');
    info.style.cssText = `
      position: fixed; top: 16px; left: 16px;
      background: rgba(0,0,0,0.75); color: #a8d8f0;
      font-family: monospace; font-size: 13px;
      padding: 8px 14px; border-radius: 8px;
      z-index: 999; pointer-events: none;
    `;
    document.body.appendChild(info);

    const rig = document.getElementById('rig');

    function update() {
      const pos = rig.getAttribute('position');
      const rot = rig.getAttribute('rotation');
      info.textContent = `pos: ${pos.x.toFixed(2)} ${pos.y.toFixed(2)} ${pos.z.toFixed(2)}  |  rot: ${rot.y.toFixed(1)}°`;
      requestAnimationFrame(update);
    }
    update();

    // --- Judy klik popup ---
    const judy = document.getElementById('angry-judy');
    const popup = document.getElementById('judy-popup');

    judy.addEventListener('click', function () {
      popup.style.display = 'block';
    });

    // Popup sluiten bij klik buiten
    popup.addEventListener('click', function (e) {
      if (e.target === this) {
        this.style.display = 'none';
      }
    });

  });
});