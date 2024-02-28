$(document).ready(function(){

	var subTab = $(".subtab_link").offset();

	$(window).scroll(function(){
		
		if($(document).scrollTop() > subTab.top) {
			$('.subtab_link').addClass("subtab_link_fix");
			$(".detail_content").addClass("detail_content_60");			
		}

		else {
			$('.subtab_link').removeClass("subtab_link_fix");
			$(".detail_content").removeClass("detail_content_60");
		}

	});

})
