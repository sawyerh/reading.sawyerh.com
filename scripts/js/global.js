(function() {
  var container;

  container = document.querySelector('.listing');

  imagesLoaded(container, function() {
    var pckry;
    return pckry = new Packery(container, {
      itemSelector: '.item',
      columnWidth: ".places-grid-sizer",
      transitionDuration: "0.25s"
    });
  });

}).call(this);
