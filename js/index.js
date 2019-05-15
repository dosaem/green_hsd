$(document).ready(function() {
  menubar();
  slide();
  tabmenu();
  searchStore();
  menuScroll();
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
// function menuScroll() {
//   $(window).scroll(function() {
//     var height = $(document).scrollTop();
//     if (height > 166) {
//       console.log(height);
//     }
//   });
//   var lastScrollTop = 0;
//   $(document).bind("scroll", function(e) {
//     var st = $(this).scrollTop();
//     if (st > lastScrollTop) {
//       console.log("down");
//     } else {
//       console.log("up");
//     }
//     lastScrollTop = st;
//   });
// }

function menuScroll() {
  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $("header").outerHeight();

  $(window).scroll(function(event) {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $("#nav")
        .removeClass("fix")
        .addClass("nav");
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $("#nav")
          .removeClass("nav")
          .addClass("fix");
      }
    }

    lastScrollTop = st;
  }
}
