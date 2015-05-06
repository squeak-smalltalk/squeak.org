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

function load_content(){
    $.each(shuffle(['apple','linux','windows']), function(idx, os) {
        $('#download-button').prepend('<i class="fa fa-' + os + ' fa-lg"></i>');
    });

    var slideshow_item = $('#slideshow-item').html();
    Mustache.parse(slideshow_item);   // optional, speeds up future uses

    var simple_box_template = $('#simple-box').html();
    Mustache.parse(simple_box_template);   // optional, speeds up future uses

    $.getJSON('content.json', function(content) {
        $('#welcome-content').html(content['welcome']);

        $.each(content['screenshots'], function(idx, screenshot) {
            $('#screenshots').append(Mustache.render(slideshow_item, screenshot));
        });
        $('#screenshots div:first-child').show();

        enable_screenshot_buttons();

        $.each(content['sections'], function(section, section_data) {
            var count = 0;
            $.each(section_data, function(idx, data) {
                if (count == 4) {
                    $('#' + section + ' .more-content').show();
                    return false; // only show 4 entries each
                }
                if ('title' in data) {
                    var element = $('#' + section + ' .content-target');
                    data['img-or-icon'] = 'img-src' in data || 'icon' in data;
                    element.append(Mustache.render(simple_box_template, data));
                    count ++;
                    if (count % 2 == 0) {
                        element.after('<div class="row content-target"></div>');
                        element.removeClass('content-target');
                    }
                }
            });
        })
        // load placeholders
        Holder.run();
    });
}

$(function() {
    load_content();

    $('.donate-button').click(function() {
        $('#paypal-donations').submit();
    });

    hljs.configure({languages: ['smalltalk']});
    hljs.initHighlighting();
});