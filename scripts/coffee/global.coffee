container = document.querySelector('.listing')

imagesLoaded container, ->
  pckry = new Packery(container, {
    itemSelector: '.item'
    columnWidth: ".places-grid-sizer"
    transitionDuration: "0.25s"
  })