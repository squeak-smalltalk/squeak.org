function enableScreenshotButtons() {
    $('.screenshot-button').click(function(e) {
        e.preventDefault();
        $(this).parents('.slideshow-item').hide();

        var isRight = $(this).data('target') === 'right';
        var element = $(this).parents('.slideshow-item');
        if (isRight) {
            element = element.next();
        } else {
            element = element.prev();
        }
        if (element.length > 0) {
            element.show();
        } else {
            if (isRight) {
                $('#screenshots div:first-child').show();
            } else {
                $('#screenshots div:last-child').show();
            }
        }
    });
}

function enableKeyboardNavigation() {
    $(window).keyup(function(e) {
        var key = e.which | e.keyCode;
        if(key === 37) {
            clickScreenshotButton('left');
        }
        else if(key === 39) {
            clickScreenshotButton('right');
        }
    });
}

function clickScreenshotButton(direction) {
    $('.slideshow-item:visible .screenshot-button[data-target="' + direction + '"]').click();
}

$(function() {
    // Enable donate button
    $('.donate-button').click(function(e) {
        e.preventDefault();
        $('#paypal-donations').submit();
    });

    // Enable screenshots
    if ($('#screenshots').length > 0) {
        enableScreenshotButtons();
        enableKeyboardNavigation();
    }

    // Enable SVG fallback to PNG
    svgeezy.init(false, 'png');
});