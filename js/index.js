$(document).ready(function() {
  menubar();
  slide();
});

function slide() {
  $(".bg_img").bxSlider({
    auto: true
  });
}

function menubar() {
  $("#nav>ul>li").mouseenter(function() {
    $("#nav ul ul, .dnav")
      .stop()
      .slideDown();
  });
  $("#nav>ul>li").mouseleave(function() {
    $("#nav ul ul , .dnav")
      .stop()
      .slideUp();
  });
}
