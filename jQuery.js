$(document).ready(function(){
	
	$("h1").click(function(){
		$("p").toggle();
	});
	
	$("#firstp").click(function(){
		$(".pgeneral").hide();
		$("img").show();
	});
});