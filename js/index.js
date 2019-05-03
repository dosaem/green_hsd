$(document).ready(function() {
  menubar();
  slide();
  tabmenu();
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

  function tabmenu() {
    $("ul.tabs li").click(function() {
      var tab_id = $(this).attr("data-tab");

      $("ul.tabs li").removeClass("current");
      $(".tab-content").removeClass("current");

      $(this).addClass("current");
      $("#" + tab_id).addClass("current");
    });
  }
}
