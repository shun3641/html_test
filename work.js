// idのamuse等のクエリ―パラメーター(urlの .com?id="amuse"の?以降の部分)
// を取得し、連想配列にアクセスしたのち
// 情報を取得して描画した
// MDNの下記urlから参照した
// developer.mozilla.org/ja/docs/Web/API/Location/search
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const myPortfolio = {
  title: "myPortfolio",
  url: "",
  Image: "ipad-myportfolio.png",
  //検証画面でデバイスサイズの幅を1500×3452に設定したまま
  // capture full Size Screenshotで撮影した画像を使用した
  fullSiteUrl: [
    "myPortfolio/myPortfolio_top.png",
    "myPortfolio/myPortfolio_page1.png",
    "myPortfolio/myPortfolio_page2.png",
  ],
  contents: 
    {
      target: "10~50代の家族連れ、カップル。思い出作りをしたい方々",
      siteImage: "爽快さが伝わるように鮮やかな写真と青を基調とした配色を心掛けました。",
      designProcess: 
      "カスタムHTMLを一切使わないことで誰でも編集できるサイトを心掛けました。" +
      "<br>使用者の混乱を防ぐため、ヘッダーは常時追従するように設計しました。",
      hardThing: "画像のサイズ調整に苦戦しました。" + 
      "<br>上手くデフォルトCSSを上書きすることで何とか違和感なく持っていきました。" +
      "<br>wordpressのjqueryの文法に癖があるため、そこを動かすのに苦戦してました。",
      usedTool: "wordpress(lightning)/ css(カスタムcssプラグイン使用)/ jQuery(カスタムJSプラグイン使用)/ illustrator",
      period: "1か月"
    }

}

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
      designProcess: 
      "カスタムHTMLを一切使わないことで誰でも編集できるサイトを心掛けました。" +
      "<br>使用者の混乱を防ぐため、ヘッダーは常時追従するように設計しました。",
      hardThing: "画像のサイズ調整に苦戦しました。" + 
      "<br>上手くデフォルトCSSを上書きすることで何とか違和感なく持っていきました。" +
      "<br>wordpressのjqueryの文法に癖があるため、そこを動かすのに苦戦してました。",
      usedTool: "wordpress(lightning)/ css(カスタムcssプラグイン使用)/ jQuery(カスタムJSプラグイン使用)/ illustrator",
      period: "1か月"
    }


}

const desertRand = {
  title: "DesertRand",
  Image: "ipad-desertRand.png",
  url: "https://shungolearning2.web.fc2.com/",
  fullSiteUrl: ["desertRand/desertRand_top.png"],
    contents: 
    {
      target: "スイーツが好きな10~20代の男女お腹いっぱい食べたい人向け",
      siteImage: "JK風のポップな可愛らしいデザイン",
      designProcess: 
      "全体をサーモンピンクでまとめ、アクセントにオレンジを絡め、カラフルに設計しました。" +
      "<br>利用する人が困らないように営業日、よくある質問など設置しました。" +
      "葉っぱやスイカでサイトの個性を演出しました。",
      hardThing: "始めの1スクロールで画像拡大のところでかなり悩みました。" + 
      "<br>トップページのイメージ画像のサイズ調整が初めてなのでかなり試行錯誤してた。" + 
      "<br>カーソルに追従するキラキラエフェクトはAIに書いてもらいました。",
      usedTool: "HTML/ CSS/ javascript(jquery)/ photoshop",
      period: "3週間"
    }

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

    contents: 
    {
      target: "10~50代の家族連れ、カップル。思い出作りをしたい方々",
      siteImage: "爽快さが伝わるように鮮やかな写真と青を基調とした配色を心掛けました。",
      designProcess: 
      "カスタムHTMLを一切使わないことで誰でも編集できるサイトを心掛けました。" +
      "<br>使用者の混乱を防ぐため、ヘッダーは常時追従するように設計しました。",
      hardThing: "画像のサイズ調整に苦戦しました。" + 
      "<br>上手くデフォルトCSSを上書きすることで何とか違和感なく持っていきました。" +
      "<br>wordpressのjqueryの文法に癖があるため、そこを動かすのに苦戦してました。",
      "usedTool": "",
      "period": ""
    }

}
const SiteInfo = {
  amuse: amuse,
  desertRand: desertRand,
  activeFit: activeFit,
  myPortfolio: myPortfolio,
}

$("#work_img").attr("src", SiteInfo[id].Image);
$(".work_name").text(SiteInfo[id].title);
$(".site-url").attr("href", SiteInfo[id].url);
$(".site-url2").attr("href", SiteInfo[id].url);
$(".urlText").text(SiteInfo[id].url);
$("#target").html(SiteInfo[id].contents.target);
$("#siteImage").html(SiteInfo[id].contents.siteImage);
$("#designProcess").html(SiteInfo[id].contents.designProcess);
$("#hardThing").html(SiteInfo[id].contents.hardThing);
$("#usedTool").text(SiteInfo[id].contents["usedTool"]);
$("#period").text(SiteInfo[id].contents.period);
console.log(SiteInfo[id].fullSiteUrl);

SiteInfo[id].fullSiteUrl.forEach((Image) => {
  $("#fullSite").append($('<img class="fullSiteImage">').attr("src", Image));
  console.log(Image)
});