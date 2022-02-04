let open = $ ('.ration');
let overlay = $ ('.overlay');
let form = $ ('.popup__form');
let exit = $ ('.popup__close');
let thank = $ ('.thanks');
let thanks = $ ('.popup__thanks');
let pop = $  ('.pop__up');
let close = $ ('.FAQ__right-box_close');
let desc = $ ('.FAQ__right-box_subtitle');

open.on('click',function () {
    form.fadeIn('fast');
    overlay.fadeIn('slow');
    pop.fadeOut('slow');
});


exit.on('click',function () {
    overlay.fadeOut('slow');
    thanks.fadeOut('slow');

});
thank.on('click', function () {
    form.fadeOut('slow');
thanks.fadeIn('slow');
});

close.on('click' ,function () {
    desc.slideToggle('slow');
    close.toggleClass('active');
});

