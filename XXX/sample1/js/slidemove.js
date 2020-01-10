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
