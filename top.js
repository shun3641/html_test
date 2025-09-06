// メニュークリックに応じてactive付与により
// cssでアニメーションを起こした。
'use strict';
{
  $(function () {
    const navBtn = $(".navBtn")
    navBtn.on('click', function () {
      $(".navBtn").toggleClass("active");
      $(".navBtnTxt").toggleClass("active");
      $('.navSp').toggleClass("active");
    });

    $(".navItem").on('click', function () {
      $(".navBtn").toggleClass("active");
      $(".navSp").toggleClass("active");
      $(".navSpBtn").toggleClass("active");
        $(".navBtnTxt").toggleClass("active");
      });
  })
}