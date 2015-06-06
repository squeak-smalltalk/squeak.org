function rotateScreenshot(moveRight) {
    var current = $('.slideshow-item:visible');
    var next = (moveRight ? current.next() : current.prev());
    $('.slideshow-item').hide();
    if (next.length > 0) {
        next.show();
    } else {
        if (moveRight) {
            $('#screenshots div:first-child').show();
        } else {
            $('#screenshots div:last-child').show();
        }
    }
}

function enableScreenshotButtons() {
    $('.screenshot-img').click(function(event) {
        event.preventDefault();
        var moveRight = event.offsetX > $('img', this).width() / 2;
        rotateScreenshot(moveRight);
    });
    $('.screenshot-button').click(function(event) {
        event.preventDefault();
        var moveRight = $(this).data('target') === 'right';
        rotateScreenshot(moveRight);
    });
}

function enableKeyboardNavigation() {
    $(window).keyup(function(event) {
        var key = event.which | event.keyCode;
        if (key === 37) {
            rotateScreenshot(false);
        } else if (key === 39) {
            rotateScreenshot(true);
        }
    });
}

$(function() {
    // Enable donate button
    $('.donate-button').click(function(event) {
        event.preventDefault();
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