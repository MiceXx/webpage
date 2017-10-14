(function($) {
  $(".popup-scuba").magnificPopup({
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    items: [{
      src: "images/photos/scuba1.JPG",
      title: "Scuba diving in Cuba: Garden Corals ~ 40ft"
    },{
      src: "images/photos/scuba2.JPG",
      title: "Moray Eel"
    },{
      src: "images/photos/scuba3.JPG",
      title: "Lionfish"
    },{
      src: "images/photos/scuba4.JPG",
      title: "Trumpetfish"
    },{
      src: "images/photos/scuba5.JPG",
      title: "Tube Sponge"
    }],
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });
  
  $(".popup-travel").magnificPopup({
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    items: [{
      src: "images/photos/hamilton.JPG",
      title: "Hamilton, Ontario 2017"
    },{
      src: "images/photos/tobermory.JPG",
      title: "Tobermory, Canada 2017"
    },{
      src: "images/photos/japan.JPG",
      title: "Nara, Japan 2016"
    },{
      src: "images/photos/france.JPG",
      title: "Marseille, France 2016"
    },{
      src: "images/photos/spain.JPG",
      title: "Barcelona, Spain 2016"
    },{
      src: "images/photos/honduras.JPG",
      title: "Roatan, Honduras 2015"
    },{
      src: "images/photos/cuba.JPG",
      title: "Holguin, Cuba 2015"
    }],
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });


})(jQuery);
