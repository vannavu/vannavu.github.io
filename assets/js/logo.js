$(document).ready(function() {"use strict";

  var triangle = document.querySelector('#reuleaux-triangle');
  var container = document.querySelector('#container');
  triangle.setAttribute('transform', "rotate(0)");
  container.setAttribute('transform', "translate(".concat(220 + 24.115, " 200)"));
  var tl = anime({
    targets: {
      beta: 0,
      theta: 0
    },
    theta: [0, 6 * Math.PI],
    beta: [0, -360],
    easing: 'linear',
    duration: 10000,
    loop: true,
    // autoplay: false,
    update: function update(anim) {
      var t = anim.animations[0].animatable.target.theta;
      var b = anim.animations[0].animatable.target.beta;
      var a = 24.115;
      var n = 2.36185;
      var x = Math.pow(Math.abs(Math.cos(t)), 2 / n) * a * Math.sign(Math.cos(t));
      var y = Math.pow(Math.abs(Math.sin(t)), 2 / n) * a * Math.sign(Math.sin(t));
      triangle.setAttribute('transform', "rotate(".concat(b, ")"));
      container.setAttribute('transform', "translate(".concat(220 + x, " ").concat(220 + y, ")"));
      progressEl.value = anim.progress;
    }
  });
  var progressEl = document.querySelector('#progress');
  document.querySelector('#play').onclick = tl.play;
  document.querySelector('#pause').onclick = tl.pause;
  progressEl.addEventListener('input', function () {
    tl.seek(tl.duration * (progressEl.value / 100));
  });
  ['input', 'change'].forEach(function (evt) {
    progressEl.addEventListener(evt, function () {
      tl.seek(tl.duration * (progressEl.value / 100));
    });
  });
});
