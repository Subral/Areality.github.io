// main.js
AFRAME.registerComponent('rotate', {
schema: {
speed: {type: 'number', default: 0.01}
},
tick: function () {
this.el.object3D.rotation.x += this.data.speed;
this.el.object3D.rotation.y += this.data.speed;
this.el.object3D.rotation.z += this.data.speed;
}
});

document.querySelector('#cube').setAttribute('rotate', '');