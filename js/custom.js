var ignore_scrolling = false;

$(function() {
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