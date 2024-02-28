$(function(){   

    /* room tab */   
    $('.tabContents > div:not(:first)').hide();

    $('.textTab > button').click(function(){
        var i = $(this).index();
        $('.textTab > button').removeClass('red');
        $(this).addClass('red');
        $('.tabContents > div').css('display','none');
        $('.tabContents > div').eq(i).css('display','block');
        return false;
    });

    // /* room images tab */
    $('.thumb > li').click(function(){
        var i = $(this).index();
        $(this).parent().children('li').css('border-color','rgba(0, 0, 0, 0)');
        $(this).css('border-color','#e8553e');
        $(this).parent().parent().parent().prev().children('li').css('display','none');
        $(this).parent().parent().parent().prev().children('li').eq(i).css('display','block');
        return false;
    });


    /* room images thumb */
    var m_num = 0;

    $('.down_btn').click(function(){
        var thumb = $(this).prev().children().children().children('a');
        if(m_num>=thumb.length-4) return false;
        m_num++;
        var mg = -120*m_num+"px";
        $(this).prev().children('.thumb').css({"margin-top":mg});
        return false;
    });

    $('.up_btn').click(function(){
        var thumb = $(this).next().children().children().children('a');
        if(m_num<=0) return false;
        m_num--; 
        var mg = -120*m_num+"px";       
        $(this).next().children('.thumb').css({"margin-top":mg});
        return false;
    });

});