import Swiper from 'swiper'

let containers = Array.from(document.getElementsByClassName('swiper-container'))

containers.forEach((container) => {
  new Swiper(container, {
    loop: true,
    threshold: 20,
    pagination: {
      el: '.swiper-pagination'
    }
  })
})
