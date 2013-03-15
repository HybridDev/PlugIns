$(window).load(function(){
	$(".asset").hover(
		function(){
			$(".desc").animate({bottom: '+='+$(".desc").height()+75}, 700);
		},
		function(){
			$(".desc").animate({bottom: '-='+75}, 700)
		})

	$(".desc").hover(
		function(){
			$(this).css("opacity", 1)
		},
		function(){
			$(this).css("opacity", 0.4)
	})
})