AFRAME.registerComponent('footprint-trail', {
  schema: {
    spacing: { type: 'number', default: 0.65 },
    count: { type: 'number', default: 30 },
    size: { type: 'number', default: 0.38 },
    opacity: { type: 'number', default: 0.85 },
    fadeStart: { type: 'number', default: 0.35 },
    fadeEndOpacity: { type: 'number', default: 0.02 }
  },

  init: function () {
    this.createTrail();
  },

  update: function () {
    this.createTrail();
  },

  createTrail: function () {
    const data = this.data;

    while (this.el.firstChild) {
      this.el.removeChild(this.el.firstChild);
    }

    for (let i = 0; i < data.count; i++) {
      const footprint = document.createElement('a-plane');

      const isLeft = i % 2 === 0;
      const x = isLeft ? -0.28 : 0.28;
      const y = 0.08;
      const z = i * -data.spacing;
      const rotationZ = isLeft ? 15 : -15;

      const progress = data.count <= 1 ? 1 : i / (data.count - 1);
      let finalOpacity = data.opacity;

      if (progress > data.fadeStart) {
        const fadeProgress = (progress - data.fadeStart) / (1 - data.fadeStart);
        finalOpacity = data.opacity - fadeProgress * (data.opacity - data.fadeEndOpacity);
      }

      footprint.setAttribute('src', '#footprint');
      footprint.setAttribute('width', data.size);
      footprint.setAttribute('height', data.size);
      footprint.setAttribute('position', `${x} ${y} ${z}`);
      footprint.setAttribute('rotation', `-90 0 ${rotationZ}`);
      footprint.setAttribute(
        'material',
        `transparent: true; opacity: ${finalOpacity}; alphaTest: 0.03; side: double; depthTest: false; depthWrite: false`
      );

      this.el.appendChild(footprint);
    }
  }
});

// Nick Wilde popup bij klik
document.addEventListener('DOMContentLoaded', function () {
  const scene = document.querySelector('a-scene');

  scene.addEventListener('loaded', function () {
    const nick = document.getElementById('nick-wilde');
    const popup = document.getElementById('nick-popup');

    nick.addEventListener('click', function () {
      popup.style.display = 'block';
    });
  });
});