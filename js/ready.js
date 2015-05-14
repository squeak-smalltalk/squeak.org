function enableScreenshotButtons() {
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

function getHashFilter() {
    var hash = location.hash;
    // get filter=filterName
    var matches = location.hash.match( /filter=([^&]+)/i );
    var hashFilter = matches && matches[1];
    return hashFilter && decodeURIComponent( hashFilter );
}

function onHashchange() {
    var hashFilter = getHashFilter();
    $('.tag-filter').remove();
    if (hashFilter) {
        $('.isotope-container').isotope({
            filter: function() {
                var visible = false;
                $('.item-tags span', $(this)).each(function() {
                    if($(this).text() == hashFilter) {
                        visible = true;
                        return false; // break
                    }
                });
                return visible
            }
        });
        $('.section-heading').after('<div class="tag-filter clickable text-center"><h3><span class="label label-default">' + hashFilter + ' <i class="fa fa-times"></i></span></h3></div>');
        $('.tag-filter').click(function (e) {
            location.hash = '';
            $(this).remove();
        });
    } else {
        $('.isotope-container').isotope({ filter: '*' });
    }
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

    $('.isotope-container').imagesLoaded( function(){
        $('.isotope-container').isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows',
            percentPosition: true,
            transitionDuration: 0
        });
    });

    $('#screenshots div:first-child').show();
    enableScreenshotButtons();

    $('.item-tags span').click(function(e) {
        location.hash = 'filter=' + encodeURIComponent( $(this).text() );
    });

    $(window).on( 'hashchange', onHashchange );
    // trigger event handler to init Isotope
    onHashchange();

    svgeezy.init(false, 'png');
});