$(document).ready(function() {
    var offset = $('.main-nav').offset();
    var offsetTrigger = offset.top;
    $(window).scroll(function() {
        if( $(this).scrollTop() > offsetTrigger )  {
            $('.main-nav').addClass('fixed');
        }
        else {
            $('.main-nav').removeClass('fixed');
        }
    });
    $(window).resize(function() {
        offset = $('.main-nav').offset();
        offsetTrigger = offset.top;
    });
});
