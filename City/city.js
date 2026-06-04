document.addEventListener('DOMContentLoaded', function () {
  const scene = document.querySelector('a-scene');

  scene.addEventListener('loaded', function () {

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