// idのamuse等のクエリ―パラメーター(urlの .com?id="amuse"の?以降の部分)
// を取得し、連想配列にアクセスしたのち
// 情報を取得して描画した
// MDNの下記urlから参照した
// developer.mozilla.org/ja/docs/Web/API/Location/search
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const amuse = {
  title: "Amuse",
  url: "https://shungolearning2.fc2.page/",
  Image: "ipad-amuse.png",
  //検証画面でデバイスサイズの幅を1500×3452に設定したまま
  // capture full Size Screenshotで撮影した画像を使用した
  fullSiteUrl: [
    "amuse/amuse_page1.png",
    "amuse/amuse_page2.png",
    "amuse/amuse_page3.png",
    "amuse/amuse_page4.png",
    "amuse/amuse_page5.png",
    "amuse/amuse_page6.png",
    "amuse/amuse_top.png",
  ],
  contents: 
    {
      target: "10~50代の家族連れ、カップル。思い出作りをしたい方々",
      siteImage: "爽快さが伝わるように鮮やかな写真と青を基調とした配色を心掛けました。",
      designProcess: "どのページにもメインコンテンツのヘッダーを追従させることによってサイト利用者の混乱を防ぐようにしました。<br>あとで誰でも編集できるようにカスタムHTMLを一切使わずに作成しました。<br>また、豪快にアニメーションをして迫力を上げました。<br>テンポよく読めるように情報は最小限に抑えました。",
      heardThing: "デフォルトでサイト全体のカラムが2になってたのを1に直したこと。<br>おすすめのwidthの調整。<br>画像の迫力を維持するための調整。<br>CSSの上書き処理。",
    }


}

const desertRand = {
  title: "DesertRand",
  Image: "ipad-desertRand.png",
  url: "https://shungolearning2.web.fc2.com/",
  fullSiteUrl: ["desertRand/desertRand_top.png"],
}

const activeFit = {
  title: "ActiveFit",
  Image: "ipad-ActiveFit.png",
  url: "https://shungolearning.web.fc2.com/index.html",
  fullSiteUrl: [
    "ActiveFit/ActiveFit_top.png",
    "ActiveFit/ActiveFit_page1.png",
    "ActiveFit/ActiveFit_page2.png",
    "ActiveFit/ActiveFit_page3.png",
    "ActiveFit/ActiveFit_page4.png",
    "ActiveFit/ActiveFit_page5.png",
    "ActiveFit/ActiveFit_page6.png",
    "ActiveFit/ActiveFit_page7.png",
    "ActiveFit/ActiveFit_page8.png",
  ],
}
const SiteInfo = {
  amuse: amuse,
  desertRand: desertRand,
  activeFit: activeFit,
}

$("#work_img").attr("src", SiteInfo[id].Image);
$(".work_name").text(SiteInfo[id].title);
$(".site-url").attr("href", SiteInfo[id].url);
$(".site-url2").attr("href", SiteInfo[id].url);
$(".urlText").text(SiteInfo[id].url);
console.log(SiteInfo[id].fullSiteUrl);
$("#topSite").attr("src", SiteInfo[id].fullSiteUrl[0]);
SiteInfo[id].fullSiteUrl.forEach((Image) => {
  $("#fullSite").append($('<img class="fullSiteImage">').attr("src", Image));
  console.log(Image)
});