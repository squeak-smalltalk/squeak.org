$(function() {
    $('ul.nav li a, a.navbar-brand').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('body').animate({ scrollTop: $(target).offset().top - 70 }, 'fast');

        $('ul.nav li').each(function() {
            $(this).removeClass('active');
        });
        if ($(this).hasClass('navbar-brand')) {
            $('ul.nav li a[href=#home]').parent().addClass('active');
        } else {
            $(this).parent().addClass('active');
        }
    });
    hljs.configure({languages: ['smalltalk']});
    hljs.initHighlighting();
});