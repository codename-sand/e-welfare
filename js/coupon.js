$(function(){	

	$('.coupon_btn').click(function(){
    	$('.coupon_complete').show();
		return false;
	});

	$('.coupon_complete .close').click(function(){
    	$('.coupon_complete').hide();
		return false;
	});
	
});