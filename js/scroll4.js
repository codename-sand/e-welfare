$(function(){

	var content1 = $('#content1').offset().top;
	var content2 = $('#content2').offset().top;
	var content3 = $('#content3').offset().top;

	$(window).scroll(function(){

		var sct = $(this).scrollTop();

		if(sct < content1-80){
			$('.subtab_link a').removeClass('pink');
		}

		if(sct > content1-80){
			$('.subtab_link a').removeClass('pink');
			$('.content1').addClass('pink');
		}

		if(sct > content2-80){
			$('.subtab_link a').removeClass('pink');
			$('.content2').addClass('pink');
		}

		if(sct > content3-80){
			$('.subtab_link a').removeClass('pink');
			$('.content3').addClass('pink');
		}
	})
	
})


