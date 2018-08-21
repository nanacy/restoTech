$(document).ready(function(){
	// BASE
    $('.tabs').hide();
    $('.tabs:first').show();
	$('.home:first').addClass("active");

	$(".home").on('click', function(){
    	$('.tabs').hide();
    	$('button').removeClass("active");
    	$('.tabs:first').show(400);
    	$('.home:first').addClass("active");
    });

	$(".menu").on('click', function(){
    	$('.tabs').hide();
    	$('button').removeClass("active");
    	$('.tabs:eq(1)').show(400);
    	$('.menu:first').addClass("active");
    });

	$(".book").on('click', function(){
    	$('.tabs').hide();
    	$('button').removeClass("active");
    	$('.tabs:last').show(400);
    	$('.book:first').addClass("active");
    });
});