var window_width = $(window).width();

if (window_width > 710) {

  $(".fragments main img").each(function(i){
      var random_height = Math.random() * (45 - 25) + 25 + 'vh',
        random_top = Math.random() * 80 + 'vh',
        random_left = Math.random() * 80 + '%';
      $(this).css({
        'height': random_height,
        'top': random_top,
        'left': random_left,
      });
      $(this).resizable({
        aspectRatio: true
      });
      $(this).parent().addClass('img_container');
  });

  var figure = $(".fragments main video").hover( hoverVideo, hideVideo );
  function hoverVideo(e) {
      $(this).get(0).play();
  }
  function hideVideo(e) {
      $(this).get(0).pause();
  }

  $(".fragments main video").each(function(){
    var random_width = Math.random() * (25 - 10) + 10 + '%',
      random_top = Math.random() * 80 + 'vh',
      random_left = Math.random() * 80 + '%';
    $(this).css({
      'width': random_width,
      'top': random_top,
      'left': random_left,
    });
    $(this).resizable({
      aspectRatio: true
    });
    $(this).addClass('img_container');
  });

  $(".img_container").draggable({
    appendTo: 'body',
    start: function(event, ui) {
        isDraggingMedia = true;
    },
    stop: function(event, ui) {
        isDraggingMedia = false;
    }
  });

  $(".img_container").mouseenter(function(){
    $('.img_container').css('z-index', 1);
    $(this).css('z-index', 2);
  });

  $(".fragments .sidebar").hover(blur, no_blur);
  function blur() {
    $("main").css({
      "-webkit-filter": "blur(1px)",
      "filter": "blur(10px)",
      "transition": "all 0.5s"
    });
  }
  function no_blur() {
    $("main").css({
      "-webkit-filter": "blur(0)",
      "filter": "blur(0)",
      "transition": "all 0.5s"
    });
  }
}

else {
  $(".fragments main video").each(function(){
    $(this).get(0).play();
  });
}
