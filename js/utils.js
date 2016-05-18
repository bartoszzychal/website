$(document).ready(function() {
  $(window).scroll(function () {
    var height = $("#header").height();
    if ($(window).scrollTop() > height) {
      $('#nav_bar').addClass('navbar-fixed-top');
    }
    if ($(window).scrollTop() < height+1) {
      $('#nav_bar').removeClass('navbar-fixed-top');
    }
  });
});
