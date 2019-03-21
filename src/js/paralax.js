import ScrollMagic from 'scrollmagic'

let controller = new ScrollMagic.Controller();

let elements = Array.from(document.getElementsByClassName('paralax'))

elements.forEach(element => {
  var scene = new ScrollMagic.Scene({
    triggerElement: element,
    triggerHook: 1,
    duration: "100%"
  })
  //.setTween(tween)
  .addTo(controller)
  .on('progress', (event) => {
    let position = parseInt(event.progress * 10000) / 100 + '%'
    let translation = 'translate(0, ' + parseInt((event.progress - 0.5) * 10000) / 200 + '%)'
    element.style.backgroundPositionY = position
    element.style.transform = translation
  })
})
