// 次へボタンを押した時のアニメーション
function showMoreJq(btn) {
  var targetId = btn.getAttribute("href"); // 表示対象のid名をhref属性値から得る
  $(targetId).slideDown("slow"); // 表示対象をアニメーション効果と共に表示
  $(btn.parentNode).slideUp("fast"); // 続きを読むボタンをアニメーション効果と共に消す
  return false; // リンクとして機能しないようfalseを返す
}


// 次へボタンで表示させるボックスを最初は非表示
// ▼ページ読み込み直後に実行するスクリプト
$(function() {
  // ▽「続きのコンテンツ」ボックスを非表示にする
  $(".readmore-area").hide();
  // ▽「続きを読む」ボタンがクリックされた際の処理を割り当てる
  $(".readmore-button-box a").click(function() {
    return showMoreJq(this);
  });
});

// 次へボタンクリック後、自動スクロール　ぬるっと
$(function() {
  $('a[href^="#"]').click(function() {
    var speed = 1000;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});
