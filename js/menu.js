$(function() {
    var contador = 1;
    var pull = $('.op-menu');
    menu = $('nav');
    // menuHeight = menu.height();

    $(pull).on('click', function(e) {
        e.preventDefault();
        if (contador == 1) {
           menu.slideToggle(100);
            contador = 0;
        } else {
            menu.slideToggle(100);
            contador = 1;
        }
    });
});