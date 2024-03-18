$(window).scroll(function(){
    if($(window).scrollTop() >= 20){
        $('.button_scroll2top').show();
    }else{
        $('.button_scroll2top').hide();
    }
});

function page_scroll2top(){
    $('html,body').animate({
        scrollTop: 0
    }, 'fast');
}


