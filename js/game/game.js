var position = 0;

$(window).keydown(function (e) {
    $character = $('.character');
    if (position <= (-255)) {
        position += 15;
        $character.css({'transform': 'translateX(' + position + 'px)'});
    }
    else if (position >= 255) {
        position -= 15;
        $character.css({'transform': 'translateX(' + position + 'px)'});
    }
    else if (e.keyCode === 37) {
        position -= 15;
        $character.css({
            'transform': 'translateX(' + position + 'px)',
            'background': 'url("ludzik-z-workiem-lewo.png")',
            'background-size': 'cover'
        });
    }
    else if (e.keyCode === 39) {
        position += 15;
        $character.css({
            'transform': 'translateX(' + position + 'px)',
            'background': 'url("ludzik-z-workiem.png")',
            'background-size': 'cover'
        });
    }

});