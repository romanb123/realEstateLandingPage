realEstate = {
    init: function() {
        realEstate.initSlider();
    },

    initSlider: function(){
        $('.nonloop').owlCarousel({
            center: true,
            items:1,
            loop:false,
            margin:25,
            responsive:{
                1000:{
                    items:1.8,
                    margin:56,

                }
            }
        });
    }
}
document.addEventListener("DOMContentLoaded", function() {
    realEstate.init();
}); 