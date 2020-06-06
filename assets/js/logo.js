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
    duration: 12500,
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

  function cacheImages(array){
    if (!cacheImages.list) {
        cacheImages.list = [];
    }
    var list = cacheImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
  }
  cacheImages([
    "/images/archive/post_contact.jpg",
    "/images/archive/google_maps.jpg",
    "/images/archive/tilde_landscape.jpg",
    "/images/archive/tilde_sunset.jpg",
    "/images/archive/ageofadz.png",
    "/images/archive/badcomm.jpg",
    "/images/archive/editorial01.jpg",
    "/images/archive/editorial02.jpg",
    "/images/archive/editorial03.jpg",
    "/images/archive/emergenceofsimplegeometries.png",
    "/images/archive/univers.jpg",
    "/images/css_typeface/css_typeface_01.gif",
    "/images/zazz/zazz_01.gif",
    "/images/posters/zazz.jpg",
    "/images/posters/samfoxcalendar.gif",
    "/images/portrait.jpg"
  ]);
});
