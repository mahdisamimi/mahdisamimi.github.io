var stickyNavTop = $('#ul').first().offset().top;

$(window).scroll(function() {
    
    if ($(window).scrollTop() > stickyNavTop) {
        $('#ul').addClass('fixed');
    }
    else {
        $('#ul').removeClass('fixed');
    }  
});
