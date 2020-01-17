$(document).ready(function() {

    var _containerTopo = $('[data-container="btnTopo"]');
    var _containerMenu = $('[data-container="menuInferior"]');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 180) {
            _containerTopo.css({ visibility: "visible" });
            _containerMenu.addClass('menuInferior-fixo');
        } else {
            _containerTopo.css({ visibility: "hidden" });
            _containerMenu.removeClass('menuInferior-fixo');
        }
    });

    _containerTopo.click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, 250);

    });

});