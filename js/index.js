$(document).ready(function() {
  let mapBtn = document.getElementById("mapBtn");
  // mapBtn.addEventListener("click", submit);
  menubar();
  slide();
  tabmenu();
  searchStore();
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

function tabmenu() {
  $("ul.tabs li").click(function() {
    console.log("hi");
    var tab_id = $(this).attr("data-tab");

    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
}

function searchStore() {
  var availableTags = ["역삼동", "역삼1동", "역삼2동"];
  $("#store_search").autocomplete({
    source: availableTags
  });
}
