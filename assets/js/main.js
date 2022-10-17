$(document).ready(function () {
  $(".carousel-activities").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

$(document).ready(function () {
  $(".carousel-events").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
        loop: false,
      },
    },
  });
});

$(document).ready(function () {
  $(".carousel-gallery").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
        loop: false,
      },
    },
  });
});

$(window).scroll(function () {
  var dh = $(document).scrollTop();
  var navHeight = $("header").height();

  if (dh > navHeight / 2) {
    $(".navbar")
      .addClass("fixed-top")
      .removeClass("container")
      .addClass("container-fluid");
    $("#navbarSupportedContent").addClass("justify-content-center");
    $(".brand-txt").hide();
    $(".logo").hide();
  } else {
    $(".navbar")
      .removeClass("fixed-top")
      .addClass("container")
      .removeClass("container-fluid");
    $("#navbarSupportedContent").removeClass("justify-content-center");
    $(".brand-txt").show();
    $(".logo").show();
  }
});

// photo-video btn
$(function () {
  $(".photo-btn").click(function () {
    $(".photo")
      .removeClass("d-none")
      .addClass("d-block")
      .css({ "transition": "all 1s linear" });
    $(".video").addClass("d-none");
    $(".photo-btn").removeClass("non-active").addClass("active1");
    $(".video-btn").removeClass("active1").addClass("non-active");
  });
  $(".video-btn").click(function () {
    $(".video")
      .removeClass("d-none")
      .addClass("d-block")
      .css({ "transition": "all 1s linear" });
    $(".photo").addClass("d-none");
    $(".video-btn").removeClass("non-active").addClass("active1");
    $(".photo-btn").removeClass("active1").addClass("non-active");
  });
});
