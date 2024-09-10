realEstate = {
    init: function() {
        realEstate.initSlider();
    },

    initSlider: function(){
        $('.nonloop').owlCarousel({
            center: true,
            items:1.8,
            loop:false,
            margin:0,
            responsive:{
                600:{
                    items:1
                }
            }
        });
    }
}
document.addEventListener("DOMContentLoaded", function() {
    realEstate.init();
}); 