var ignore_scrolling = false;


function load_content(){
    var simple_box_template = $('#simple-box').html();
    Mustache.parse(simple_box_template);   // optional, speeds up future uses

    $.getJSON('content.json', function(content) {
        $('#welcome-content').html(content['welcome']);

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
        ignore_scrolling = true;
        $('body').animate({
            scrollTop: $(target).offset().top - 70
        }, 'fast', function() {ignore_scrolling = false;});

        $('ul.nav li').each(function() {
            $(this).removeClass('active');
        });
        if ($(this).hasClass('navbar-brand')) {
            $('ul.nav li a[href=#home]').parent().addClass('active');
        } else {
            $(this).parent().addClass('active');
        }
    });

    $(window).scroll(function() {
        if (ignore_scrolling)
            return;
        var scroll_position = $(document).scrollTop() + 80;
        $('ul.nav li a').each(function () {
            var selected = false;
            $($(this).attr("href")).each(function () {
                if ($(this).position().top <= scroll_position && $(this).position().top + $(this).height() + 40 > scroll_position) {
                    selected = true;
                }
            });
            if (selected) {
                $(this).parent().addClass("active");
            } else {
                $(this).parent().removeClass("active");
            }
        });
    });

    hljs.configure({languages: ['smalltalk']});
    hljs.initHighlighting();
});