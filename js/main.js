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

    /* bio in modal */
    $('.show-bio').on('click', function() {
        $('.overlay').addClass('on');
        $('body').addClass('noScroll');
        $(this).prev().addClass('modal').show();
    });
    $('.overlay, .bio').on('click', function() {
        $('.overlay').removeClass('on');
        $('body').removeClass('noScroll');
        $('.bio').removeClass('modal').hide();
    });
    /* end bio in modal */
});
