$(function(){
	
	$('.contents .content:not(:first)').hide(0);
	
	$('.tab li').click(function(){
		var i = $(this).index();
		$('.tab li').removeClass('active');
		$(this).addClass('active');
		$('.contents .content').hide(0);
		$('.contents .content').eq(i).show(0);
		return false;
	})
});