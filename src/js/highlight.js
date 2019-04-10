let wrappers = Array.from(document.getElementsByClassName('highlight-wrapper'))

wrappers.forEach((wrapper) => {
  let content = wrapper.innerHTML
  let color = wrapper.getAttribute('data-color')
  let background = wrapper.getAttribute('data-background')
  let lines = content.split('<br>')

  wrapper.innerHTML = ''
  delay = 200
  for (let i = 0; i < lines.length; i++) {
    let line = '<span class="highlight font-bold text-' + color + ' bg-' + background + ' " style="animation-delay:' + i * delay + 'ms">' + lines[i] + '</span>'

    if (i < lines.length - 1) {
      line += '<br>'
    }

    wrapper.innerHTML += line
  }
})
