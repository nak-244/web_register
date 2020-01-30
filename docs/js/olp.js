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

// modal固定用
$(function(){
    var scrollPosition;
    $(".modalOpner").on("click", function() {
        scrollPosition = $(window).scrollTop();
        $('body').addClass('fixed').css({'top': -scrollPosition});
    });
    $(".modalCloser").on("click", function() {
        $('body').removeClass('fixed').css({'top': 0});
        window.scrollTo( 0 , scrollPosition );
    });
});


// チェックボックスの値を表示
$(function() {
  $('input[name="area"]').change(function() {
    var citys = [];
    $('input[name="area"]:checked').each(function() {
      // ③value値を配列に格納
      // citys.push($(this).val());
      citys.push($(this).attr('id'));
    });
    $('#p01').text(citys);
  });
});
