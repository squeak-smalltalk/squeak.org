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


function load_content(){
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
            $.each(section_data, function(idx, data) {
                if ('title' in data) {
                    $('#' + section + ' .content-target').append(Mustache.render(simple_box_template, data));
                } else if ('text' in data) {
                    $('#' + section + ' .content-more-target').append('<li><a href="#">' + data.text + '</a></li>');
                }
            });
        })
        // load placeholders
        Holder.run();
    });
}

$(function() {
    load_content();

    $('#donate-button').click(function() {
        $('#paypal-donations').submit();
    })

    $('ul.nav li a, a.navbar-brand').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('body').animate({
            scrollTop: $(target).offset().top - 70
        }, 'fast');

        $('ul.nav li').each(function() {
            $(this).removeClass('active');
        });
        if ($(this).hasClass('navbar-brand')) {
            $('ul.nav li a[href=#home]').parent().addClass('active');
        } else {
            $(this).parent().addClass('active');
        }
    });

    $('body').scrollspy({
        target: '#navbar',
        offset: 80
    });

    hljs.configure({languages: ['smalltalk']});
    hljs.initHighlighting();
});