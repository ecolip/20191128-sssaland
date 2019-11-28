$(document).ready(function(){

    $(document).scroll(function(e){
        var scrollTop = $(this).scrollTop();
         //console.log(scrollTop);
        
        if (scrollTop > 3277){
            $('.devices img').addClass('move');
            $('.devices').addClass('bg-move');
        }
        else{
            $('.devices img').removeClass('move');
            $('.devices').removeClass('bg-move');
        }

        if (scrollTop >1){
            $('nav').addClass('bgc-white');
            $('.sign').addClass('bordered');           
        }
        else{
            $('nav').removeClass('bgc-white');
            $('.sign').removeClass('bordered');
        }

    });

    $('.li-1').hover(function(e){
        $(this).find('.mu-1').toggleClass('active');        
    });
    $('.li-2').hover(function(e){
        $(this).find('.mu-2').toggleClass('active');
        $('.mu-2').mouseenter(function(e){
            (this).closest('.li-2').addClass('active');
        });      
    });
    $('.billed a').click(function(e){
        e.preventDefault();
        $('.billed a').removeClass('active');
        $(this).toggleClass('active');
    });

});