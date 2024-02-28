$(function(){

	var content1 = $('#content1').offset().top;
	var content2 = $('#content2').offset().top;
	var content3 = $('#content3').offset().top;
	var content4 = $('#content4').offset().top;

	$(window).scroll(function(){

		var sct = $(this).scrollTop();
		var color = $('#color').attr('class');

		if(sct < content1-80){
			$('.subtab_link a').removeClass(color);
		}

		if(sct > content1-80){
			$('.subtab_link a').removeClass(color);
			$('.content1').addClass(color);
		}

		if(sct > content2-80){
			$('.subtab_link a').removeClass(color);
			$('.content2').addClass(color);
		}

		if(sct > content3-80){
			$('.subtab_link a').removeClass(color);
			$('.content3').addClass(color);
		}

		if(sct > content4-80){
			$('.subtab_link a').removeClass(color);
			$('.content4').addClass(color);
		}

	})
	
})


