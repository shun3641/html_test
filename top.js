'use strict';
{
  $(function () {
    const navBtn = $(".navBtn")
    navBtn.on('click', function () {
      $(".navBtnTxt").toggleClass("active");
      $('.navSp').toggleClass("active");
    });

    $(".navItem").on('click', function () {
      $(".navSp").toggleClass("active")
      setTimeout(function () {
        $(".navSpBtn").toggleClass("active")
        $(".navSpArrow").toggleClass("active")
      }, 800);
    });
  })
}