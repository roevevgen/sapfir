var $layer_0 = $('.layer-0'),
  $layer_1 = $('.layer-1'),
  $layer_2 = $('.layer-2'),
  $container = $('body'),
  container_w = $container.width(),
  container_h = $container.height();

$(window).on('mousemove.parallax', function (event) {
  var pos_x = event.pageX,
    pos_y = event.pageY,
    left = 0,
    top = 0;

  left = container_w / 4 - pos_x;
  top = container_h / 4 - pos_y;




  TweenMax.to(
    $layer_1,
    1, {
      css: {
        transform: 'translateX(' + left / 120 + 'px) translateY(' + top / 120 + 'px)'
      },
      ease: Expo.easeOut,
      overwrite: 'all'
    });


});