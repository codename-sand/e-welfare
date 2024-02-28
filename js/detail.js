$(function(){	

	/* tab */	
	$('.detail_content > div:not(:first)').hide();

	var color = $('#color').attr('class');

	$('.subtab > div p').click(function(){
		var i = $(this).parent('div').index();
		$('.subtab > div').removeClass(color);
		$(this).parent('div').addClass(color);
		$('.detail_content > div').css('display','none');
		$('.detail_content > div').eq(i).css('display','block');
	});

});