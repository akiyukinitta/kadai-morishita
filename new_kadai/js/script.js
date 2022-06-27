// JavaScript Document
$(".slider").slick({
  autoplaySpeed: 3000, //スライド秒数
  autoplay: true, //自動的に動き出すか。初期値はfalse。
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 3, //スライドを画面に何枚見せるか
  slidesToScroll: 1, //1回のスクロールで何枚の写真を移動して見せるか
  prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
  dots: true, //下部ドットナビゲーションの表示
  arrows: false, //左右の矢印消す
  centerMode: true, //左右の画像見せる為にセンター
  centerPadding: "5%", //左右どれくらい見せるか
  responsive: [
    {
      breakpoint: 768, //モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 1, //スライドを画面に2枚見せる
        slidesToScroll: 1, //1回のスクロールで2枚の写真を移動して見せる
      },
    },
    {
      breakpoint: 426, //モニターの横幅が426px以下の見せ方
      settings: {
        slidesToShow: 1, //スライドを画面に1枚見せる
        slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
      },
    },
  ],
});

// ハンバーガー
$(".openbtn").click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass("panelactive"); //ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass("active"); //ボタンの activeクラスを除去し
  $("#g-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスも除去
});

$(function () {
  var pagetop = $("#page_top");
  pagetop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500);
    return false;
  });
});
