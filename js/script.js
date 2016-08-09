$(document).ready(function(){
	$("#myCarousel").carousel({interval: 4000, pause: "hover"});



	$(".post").hover(function(){
		$(".res-text", this).css("color", "black");
		$("img", this).css("opacity", "0.5");
	},
	function(){
		$(".res-text", this).css("color", "white");
		$("img", this).css("opacity", "1.0");
	});
});