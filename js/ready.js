function enable_screenshot_buttons() {
    $('.screenshot-button').click(function(e) {
        e.preventDefault();
        $(this).parents('.slideshow-item').hide();

        var is_right = $(this).data('target') == 'right';
        var element = $(this).parents('.slideshow-item');
        if (is_right) {
            element = element.next();
        } else {
            element = element.prev();
        }
        if (element.length > 0) {
            element.show();
        } else {
            if (is_right) {
                $('#screenshots div:first-child').show();
            } else {
                $('#screenshots div:last-child').show();
            }
        }
    })
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

$(function() {
    if($('#download-button').length > 0) {
        $.each(shuffle(['apple','linux','windows']), function(idx, os) {
            $('#download-button').prepend('<i class="fa fa-' + os + ' fa-lg"></i>');
        });
    }

    $('.donate-button').click(function(e) {
        e.preventDefault();
        $('#paypal-donations').submit();
    });

    $('#screenshots div:first-child').show();
    enable_screenshot_buttons();

    svgeezy.init(false, 'png');
});