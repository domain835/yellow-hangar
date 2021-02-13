$(document).ready(function() {

	$(".main_head .vcenter .item-container").animated("fadeInUp", "fadeOutDown");
	$(".s_about p").animated("fadeInDown", "fadeOutUp");
	$("h2").animated("fadeInUp", "fadeOutDown");

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});