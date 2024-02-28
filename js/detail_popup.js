$(function(){	

    $('.qna_popup').click(function(){
    	$('.qna_write_wrap').show();
		return false;
	});

	$('.qna_write a').click(function(){
    	$('.qna_write_wrap').hide();
		return false;
	});

	$('.review_popup').click(function(){
    	$('.review_write_wrap').show();
		return false;
	});

	$('.review_write a').click(function(){
    	$('.review_write_wrap').hide();
		return false;
	});

	$('.photo_review_popup').click(function(){
    	$('.review_write_photo').show();
		return false;
	});

	$('.review_write_photo .review_write a').click(function(){
    	$('.review_write_photo').hide();
		return false;
	});
	
	$('.reserve_btn').click(function(){
    	$('.reserve_wrap').show();
		return false;
	});

	$('.reserve_box a').click(function(){
    	$('.reserve_wrap').hide();
		return false;
	});
});