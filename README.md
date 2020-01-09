# WEB登録LP

## 内容
[WAQQQ](https://waqqq.jp/index.cfm?fuseaction=contents.fcts&cid=224)

かんたん1分WEB登録の告知をするページ。  

## リンク元
### コーポレートサイト
ヘッダーメニュー

### しごとら
ヘッダーメニュー：支店一覧を仕事一覧に変更し、仕事一覧のところに「WEB登録ボタン」とする。

## 応募フォーム内容
まずはジョブサイトの標準フォームで作成する。  
ウィルの内容＋希望職種とする。  

完成したら、ウィルオブのチャット式へ変更。
[参考URL](https://willof.jp/works/entry/raisha.html#no02)

## form wizard
[オプション一覧](http://techlaboratory.net/smartwizard/documentation)

### フォームの項目
* 氏名（姓・名）
* 氏名（カタカナ）
* 性別
* 生年月日
* メールアドレス
* 住所（都道府県・市町村）　←複数選択
* 電話番号
* 希望職種
* 個人情報保護方針確認

## ページ遷移
[パターン1](http://black-flag.net/devel/jQuerySlideMove/01/)

~~~javascript
$(function(){
    $('#container:not(body#index #container)').css({display:'block',marginLeft:$(window).width(),opacity:'0'});
    $('#container:not(body#index #container)').animate({marginLeft:'0px',opacity:'1'},500);

    $('body#index #container').css({display:'block',opacity:'0'});
    $('body#index #container').animate({opacity:'1'},500);

    $('a').click(function(){
        var pass = $(this).attr("href");
        $('#container').animate({marginLeft:'-=' + $(window).width() + 'px',opacity:'0'},500,function(){
            location.href = pass;
        });
        return false;
    });
});
~~~
HTMLソース側は、トップページのみフェードインにする為に、トップページで使用するHTMLソースのbodyには`id="index"`を付加している構成になり、
全てのページにおいて、ソース全体を任意のブロック要素で囲います。（サンプルでは`<div id="container">`としています。）

[パターン2](http://black-flag.net/devel/jQuerySlideMove/02/)
~~~javascript
$(function(){
    $('#container:not(body#index #container)').css({display:'none'});
    $('#container:not(body#index #container)').slideDown('normal');

    $('body#index #container').css({display:'block',opacity:'0'});
    $('body#index #container').animate({opacity:'1'},500);

    $('a.prev').click(function(){
        var pass = $(this).attr("href");
        $('#container').animate({marginLeft:$(window).width() + 'px',opacity:'0'},500,function(){
            location.href = pass;
        });
        return false;
    });

    $('a.next').click(function(){
        var pass = $(this).attr("href");
        $('#container').animate({marginLeft:'-=' + $(window).width() + 'px',opacity:'0'},500,function(){
            location.href = pass;
        });
        return false;
    });
});
~~~
トップページ以外のページロード時の動きをスライドダウンに変えてあります。リンクも「次へ」と「前へ」と分けて、それぞれ逆のスライドパターンになっています。

あまり動きをオーバーにすると逆にうっとおしくなる可能性もあるのでほどほどに。

通常のサイトではこういった動きについてはあまり使用する頻度は少ないかもしれませんが、ギャラリー的コンテンツやiPhone用サイト構築なんかでは効果的な演出が組み込めるかな、と思います。


あけましておめでとうございます。
本年はスピードと質にこだわった仕事をしていきたいと思います。また、
