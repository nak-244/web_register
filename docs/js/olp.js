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

// メールアドレス　入力しないと次へボタンがクリックできない
$(function() {
  //始めにjQueryでボタンを無効化する
  $('.send1').prop("disabled", true);

  //入力欄の操作時
  $('form div#mail input:required').change(function() {
    //必須項目が空かどうかフラグ
    let flag = true;
    //必須項目をひとつずつチェック
    $('form div#mail input:required').each(function(e) {
      //もし必須項目が空なら
      if ($('form div#mail input:required').eq(e).val() === "") {
        flag = false;
      }
    });
    //全て埋まっていたら
    if (flag) {
      //送信ボタンを復活
      $('.send1').prop("disabled", false);
    } else {
      //送信ボタンを閉じる
      $('.send1').prop("disabled", true);
    }
  });
});
