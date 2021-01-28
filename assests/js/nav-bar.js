var stickyNavTop = $('#header').offset().top;

$(window).scroll(function() {  
    if ($(window).scrollTop() > stickyNavTop) {
        $('#header').addClass('fixed');
    }
    else {
        $('#header').removeClass('fixed');
    }  
});
