function load_content(){
    var slideshow_item = $('#slideshow-item').html();
    Mustache.parse(slideshow_item);   // optional, speeds up future uses

    var simple_box_template = $('#simple-box').html();
    Mustache.parse(simple_box_template);   // optional, speeds up future uses

    $.getJSON('content.json', function(content) {
        var section = $('.section').first().attr('id');
        if (!section in content['sections']) {
            return;
        }
        var count = 0;
        $.each(content['sections'][section], function(idx, data) {
            if ('title' in data) {
                var element = $('#' + section + ' .content-target');
                element.append(Mustache.render(simple_box_template, data));
                count ++;
                if (count % 2 == 0) {
                    element.after('<div class="row content-target"></div>');
                    element.removeClass('content-target');
                }
            } else if ('text' in data) {
                $('#' + section + ' .content-more-target').append('<li><a href="#">' + data.text + '</a></li>');
            }
        });
        // load placeholders
        Holder.run();
    });
}

$(function() {
    load_content();

    $('.donate-button').click(function() {
        $('#paypal-donations').submit();
    });

    $('ul.nav li a, a.navbar-brand').click(function(e) {
        var target = $(this).attr('href');
        if (target.indexOf('#') === 0) {
            e.preventDefault();
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
        }
    });

    hljs.configure({languages: ['smalltalk']});
    hljs.initHighlighting();
});