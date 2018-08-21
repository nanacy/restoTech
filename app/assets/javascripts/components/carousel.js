$(document).ready(function(){
	var indiceImg = 0;
	var nbImg = 2;
	$(".imgMiam").hide();
	$(".imgMiam:first").show();
	$('.btn:eq('+indiceImg+')').addClass("active-cercle");
	// PREVIOUS ---------------------
	$(".previous").on("click",function(){
		$(".imgMiam").hide();
		$(".btn").removeClass("active-cercle");
		if(indiceImg==0){
			indiceImg=nbImg;
		}
		else{indiceImg-=1;}
		$('.imgMiam:eq('+indiceImg+')').show();
		$('.btn:eq('+indiceImg+')').addClass("active-cercle");
	});
	// NEXT -------------------------
	$(".next").on("click",function(){
		$(".imgMiam").hide();
		$(".btn").removeClass("active-cercle");
		if(indiceImg==nbImg){
			indiceImg=0;
		}
		else{indiceImg+=1;}
		$('.imgMiam:eq('+indiceImg+')').show();
		$('.btn:eq('+indiceImg+')').addClass("active-cercle");
	});
	// CERCLE POSITION --------------
	// 1
	$(".btn-position").on("click", function(){
		$(".imgMiam").hide();
		$(".btn").removeClass("active-cercle");
		indiceImg=0;
		$('.imgMiam:eq('+indiceImg+')').show();
		$('.btn:eq('+indiceImg+')').addClass("active-cercle");
	});
	// 2
	$(".btn-position2").on("click", function(){
		$(".imgMiam").hide();
		$(".btn").removeClass("active-cercle");
		indiceImg=1;
		$('.imgMiam:eq('+indiceImg+')').show();
		$('.btn:eq('+indiceImg+')').addClass("active-cercle");
	});
	// 3
	$(".btn-position3").on("click", function(){
		$(".imgMiam").hide();
		$(".btn").removeClass("active-cercle");
		indiceImg=2;
		$('.imgMiam:eq('+indiceImg+')').show();
		$('.btn:eq('+indiceImg+')').addClass("active-cercle");
	});
});
