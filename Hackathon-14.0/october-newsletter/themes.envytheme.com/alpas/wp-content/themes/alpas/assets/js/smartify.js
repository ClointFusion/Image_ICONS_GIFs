(function($) {
    "use strict";
    jQuery(document).on('ready', function() {
        $('.smartify').smartify();
    });
    jQuery(window).on('load', function() {
        $('.smartify').smartify();
    });
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/widget', function($scope) {
            $('.smartify').smartify();
        });
    });
}(jQuery));