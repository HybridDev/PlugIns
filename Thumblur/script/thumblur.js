var desp;

$(window).load(function(){
	desp=$(".desc").outerHeight()+20
	$(".asset").hover(
		function(){
			$(".desc").animate({bottom: '+='+desp}, 700);
		},
		function(){
			$(".desc").animate({bottom: '-='+desp}, 700)
		})

	$(".desc").hover(
		function(){
			$(this).css("opacity", 0.9)
		},
		function(){
			$(this).css("opacity", 0.5)
	})
})