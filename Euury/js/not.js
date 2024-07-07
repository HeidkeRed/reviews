$(document).ready(function() {
    $(window).scroll(function() {
        var windowHeight = $(window).height();
        var scrollPos = $(window).scrollTop();
        var boxOffset = $('.box').offset().top;

        if (scrollPos + windowHeight > boxOffset) {
            $('.box').addClass('animate');
        }
    });
});