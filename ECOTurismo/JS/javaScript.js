$(document).ready(function () {

    blink("#pontoCaminhoVelho");
    blink("#pontoCaminhoNovo");
    blink("#pontoCaminhoDiamantes");
    blink("#pontoCaminhoSabarabucu");
    
    
    function blink(selector) {
        $(selector).fadeOut(1000, function() {
            $(this).fadeIn(1000, function() {
                blink(this);
            });
        });
    }

    $("#pontoCaminhoVelho").mouseover(function () {
        $("#caminhoVelhoInform").css({display:"block"})
    }).mouseout(function () {
        $("#caminhoVelhoInform").css({display:"none"});
    }).click(function () {
        window.location.assign("Caminhos.html");
        $("#body").css('background-image', 'url("img/data1/images/caminhoVelho.jpeg")');
    });

    $("#caminhoVelhoInform").mouseover(function () {
        $("#caminhoVelhoInform").css({display: "block"})
    }).mouseout(function () {
        $("#caminhoVelhoInform").css({display:"none"});
    }).click(function () {
        window.location.assign("Caminhos.html");
        $("#body").css('background-image', 'url("img/data1/images/caminhoVelho.jpeg")');
    });


    $("#pontoCaminhoNovo").mouseover(function () {
        $("#caminhoNovoInform").css({display:"block"})
    }).mouseout(function () {
        $("#caminhoNovoInform").css({display:"none"});
    }).click(function () {
        window.location.assign("CidadesCaminhoNovo.html");
    });

    $("#caminhoNovoInform").mouseover(function () {
        $("#caminhoNovoInform").css({display: "block"})
    }).mouseout(function () {
        $("#caminhoNovoInform").css({display:"none"});
    }).click(function () {
        window.location.assign("CidadesCaminhoNovo.html");
        $("#body").css('background-image', 'url("img/data1/images/caminhoNovo.jpeg")');
    });


    $("#pontoCaminhoDiamantes").mouseover(function () {
        $("#caminhoDiamanteInform").css({display:"block"})
    }).mouseout(function () {
        $("#caminhoDiamanteInform").css({display:"none"});
    }).click(function () {
        window.location.assign("CidadesCaminhoDiamantes.html");
    });


    $("#caminhoDiamanteInform").mouseover(function () {
        $("#caminhoDiamanteInform").css({display: "block"})
    }).mouseout(function () {
        $("#caminhoDiamanteInform").css({display:"none"});
    }).click(function () {
        window.location.assign("CidadesCaminhoDiamante.html");
        $("#body").css('background-image', 'url("img/data1/images/caminhoDiamantes.jpeg")');
    });


    $("#pontoCaminhoSabarabucu").mouseover(function () {
        $("#caminhoSabarabucuInform").css({display:"block"})
    }).mouseout(function () {
        $("#caminhoSabarabucuInform").css({display:"none"});
    }).click(function () {
        window.location.assign("CidadesCaminhoSabarabucu.html");
    });


    $("#caminhoSabarabucuInform").mouseover(function () {
        $("#caminhoSabarabucuInform").css({display: "block"})
    }).mouseout(function () {
        $("#caminhoSabarabucuInform").css({display:"none"});
    }).click(function () {
        window.location.assign("CidadesCaminhoSabarabucu.html");
        $("#body").css('background-image', 'url("img/data1/images/caminhoSabarabucu.jpeg")');
    });


    var unslider = $('.banner').unslider();

    $('.unslider-arrow').click(function() {
        var fn = this.className.split(' ')[1];

        //  Either do unslider.data('unslider').next() or .prev() depending on the className
        unslider.data('unslider')[fn]();
    });


});
