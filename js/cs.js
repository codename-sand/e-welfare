$(function(){	

	/* tab */	
	$('.content > div:not(:first)').hide();

	var color = $('#color').attr('class');

	$('.subtab > div p').click(function(){
		var i = $(this).parent('div').index();
		$('.subtab > div').removeClass(color);
		$(this).parent('div').addClass(color);
		$('.content > div').css('display','none');
		$('.content > div').eq(i).css('display','block');
	});

	/* notice */
	$('.notice_content').hide();

	$('.notice_title').click(function(){
		if($(this).next().css('display')=='none'){
   			$('.notice_content').slideUp(0);
    	}
    	$(this).next().slideToggle(0);
    });


	/* qna write */
	$('.write_popup').hide();

    $('.write_btn').click(function(){
    	$('.write_popup').show();
		return false;
	});

	$('.write_box > a').click(function(){
    	$('.write_popup').hide();
		return false;
	});
	
});