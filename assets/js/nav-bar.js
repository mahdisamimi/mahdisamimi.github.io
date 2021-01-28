

$(window).scroll(function() {
    var stickyNavTop = $('ul').offset().top;
    if ($(window).scrollTop() > stickyNavTop) {
        $('ul').addClass('fixed');
    }
    else {
        $('ul').removeClass('fixed');
    }  
});
