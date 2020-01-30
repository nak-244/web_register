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

// 名前　必須項目入力しないと次へボタンがクリックできない
$(function() {
  //始めにjQueryでボタンを無効化する
  $('.send1').prop("disabled", true);

  //入力欄の操作時
  $('form div#name input:required').change(function() {
    //必須項目が空かどうかフラグ
    let flag = true;
    //必須項目をひとつずつチェック
    $('form div#name input:required').each(function(e) {
      //もし必須項目が空なら
      if ($('form div#name input:required').eq(e).val() === "") {
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

// 性別　どちらか選ばないと次へボタンがクリックできない
$(function() {
  //始めにjQueryでボタンを無効化する
  $('#send2').prop("disabled", true);
  //入力欄の操作時
  $(".send2").click(function() {
    //ラジオボタンのどちらかがチェックされたら
    if (this.checked) {
      //ボタンを復活
      $('#send2').prop("disabled", false);
    } else {
      //選択されるまではボタンを無効化
      $('#send2').prop("disabled", true);
    };
  });
});

// 生年月日　すべて選択しないと次へボタンがクリックできない
$(function() {
  //始めにjQueryでボタンを無効化する
  $('.send3').prop("disabled", true);

  //入力欄の操作時
  $('form div#birth input:required').change(function() {
    //必須項目が空かどうかフラグ
    let flag = true;
    //必須項目をひとつずつチェック
    $('form div#birth input:required').each(function(e) {
      //もし必須項目が空なら
      if ($('form div#birth input:required').eq(e).val() === "") {
        flag = false;
      }
    });
    //全て埋まっていたら
    if (flag) {
      //送信ボタンを復活
      $('.send3').prop("disabled", false);
    } else {
      //送信ボタンを閉じる
      $('.send3').prop("disabled", true);
    }
  });
});

// メールアドレス　入力しないと次へボタンがクリックできない
$(function() {
  //始めにjQueryでボタンを無効化する
  $('.send4').prop("disabled", true);

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
      $('.send4').prop("disabled", false);
    } else {
      //送信ボタンを閉じる
      $('.send4').prop("disabled", true);
    }
  });
});

// 住所　郵便番号を入力しないと次へボタンがクリックできない
$(function() {
  //始めにjQueryでボタンを無効化する
  $('.send5').prop("disabled", true);

  //入力欄の操作時
  $('form div#address input:required').change(function() {
    //必須項目が空かどうかフラグ
    let flag = true;
    //必須項目をひとつずつチェック
    $('form div#address input:required').each(function(e) {
      //もし必須項目が空なら
      if ($('form div#address input:required').eq(e).val() === "") {
        flag = false;
      }
    });
    //全て埋まっていたら
    if (flag) {
      //送信ボタンを復活
      $('.send5').prop("disabled", false);
    } else {
      //送信ボタンを閉じる
      $('.send5').prop("disabled", true);
    }
  });
});

// 希望職種　1つ以上選択しないと送信ボタンがクリックできない
$(function() {
  //始めにjQueryでボタンを無効化する
  $('.send6').prop("disabled", true);

  $(".jobjob").click(function() {
    var ck_count = $(".cb :checked").length;
    if (ck_count == 0) {
      $('.send6').prop("disabled", false);
    } else {
      $('.send6').prop("disabled", true);
    }
  });
});

// 自動でフリガナをふる
$(function() {
  $.fn.autoKana('#name1', '#namekana1', {
    katakana: true
  });
  $.fn.autoKana('#name2', '#namekana2', {
    katakana: true
  });
});
