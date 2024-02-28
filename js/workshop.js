$(function(){   

    /* facility popup */

    $('.article_more').hide();

    $('#content4 article').click(function(){        
        $(this).next('.article_more').show();
        return false;          
    });

    $('.article_more .close').click(function(){        
        $('.article_more').hide();
        return false;          
    });


    /* caution accordion */
    $('.accordion table').hide();
    
    $('.accordion > h4').click(function(){
        if($(this).next().css('display')=='none'){
            $('.accordion table').hide();
            $(this).next().css('display','table');
            $('.accordion h4 img').attr('src',$('.accordion h4 img').attr('src').replace('up_icon_gray.png','down_icon.png'));
            $('img',this).attr('src',$('.accordion h4 img').attr('src').replace('down_icon.png','up_icon_gray.png'));     
        }
        else if($(this).next().css('display')=='table'){
            $(this).next().hide();
            $(this).children('img').attr('src',$('.accordion h4 img').attr('src').replace('up_icon_gray.png','down_icon.png'));
        }       
    });

});