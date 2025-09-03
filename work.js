const queryString = window.location.search; 

// さらに解釈する
const params = new URLSearchParams(queryString);
const id = params.get("id"); 
const number = params.get("number");

const SiteInfo = {

  amuse: {
    title: "Amuse",
    url: "https://shungolearning2.fc2.page/",
    Image: "ipad-amuse.png",
    fullSiteUrl: "amuse_all.png",
  },

  desertRand: {
    title: "DesertRand",
    Image: "ipad-desertRand.png",
    fullSiteUrl: "",
  }
}

$("#work_img").attr("src", SiteInfo[id].Image);
$(".work_name").text(SiteInfo[id].title);
$(".site-url").attr("href", SiteInfo[id].url);
$(".site-url2").attr("href", SiteInfo[id].url);
$(".urlText").text(SiteInfo[id].url);
$("#fullSite").attr("src", SiteInfo[id].fullSiteUrl);