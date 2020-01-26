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
        jQuery('html, body').animate({ scrollTop: 0 }, 600);

    });

});

$(document).ready(function() {

    var _containerbtn_RJ = $('[data-container="btn_rioDeJaneiro"]');
    var _containerbtn_SP = $('[data-container="btn_saoPaulo"]');
    var _containerbtn_ES = $('[data-container="btn_espiritoSanto"]');
    var _containerbtn_CE = $('[data-container="btn_ceara"]');
    var _containerbtn_AM = $('[data-container="btn_amapa"]');

    var _containerRJ = $('[data-container="rioDeJaneiro"]');
    var _containerSP = $('[data-container="saoPaulo"]');
    var _containerES = $('[data-container="espiritoSanto"]');
    var _containerCE = $('[data-container="ceara"]');
    var _containerAM = $('[data-container="amapa"]');

    function ocultar() {

        _containerRJ.css({ display: "none" });
        _containerSP.css({ display: "none" });
        _containerES.css({ display: "none" });
        _containerCE.css({ display: "none" });
        _containerAM.css({ display: "none" });

    };

    ocultar();

    _containerRJ.css({ display: "table" });

    _containerbtn_RJ.click(function(event) {

        event.preventDefault();

        ocultar();

        _containerRJ.css({ display: "table" });


    });

    _containerbtn_SP.click(function(event) {

        event.preventDefault();

        ocultar();

        _containerSP.css({ display: "table" });
    });

    _containerbtn_ES.click(function(event) {

        event.preventDefault();

        ocultar();

        _containerES.css({ display: "table" });;
    });

    _containerbtn_CE.click(function(event) {

        event.preventDefault();

        ocultar();

        _containerCE.css({ display: "table" });;
    });

    _containerbtn_AM.click(function(event) {

        event.preventDefault();

        ocultar();

        _containerAM.css({ display: "table" });;
    });
});