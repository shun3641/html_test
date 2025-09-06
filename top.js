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

  //空きスペース対策.workの数が4の倍数以外なら非表示
  console.log($('.work').length);
  if($('.work').length %4 != 0) {
    $('.whiteSpace').css('display', 'none');
  }

}