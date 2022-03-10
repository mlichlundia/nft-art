/**
 * @author Den Kravchu <denkravchu@gmail.com>
 * @fileoverview Small library which makes work with coordinates faster and easier. Animate your website supafast!
 * @version 2.0.0
 */

export const renderer = {
  startTime: performance.now(),
  handlers: [],
  setToRender(handler, label = this.handlers.length) {
    this.handlers.push({ hd: handler, label })
  },
  removeFromRender(label = 'removeLastFromRender') {
    let isRequested = 0
    if (label === 'removeLastFromRender') {
      this.handlers = this.handlers.slice(0, this.handlers.length - 1)
      return
    }
    this.handlers = this.handlers.filter((item) => {
      if (item.label !== label) {
        return true
      }
      isRequested++
      return false
    })
    if (isRequested === 0) {
      console.warn(`Renderer: No handlers with label "${label}" in rendering`)
    }
  },
  getRendering() {
    return this.handlers
  },
  render() {
    requestAnimationFrame(
      function render(time) {
        if (time - this.startTime > 50) {
          this.startTime = performance.now()
          this.handlers.forEach((item) => item.hd(time))
        }
        requestAnimationFrame(render.bind(this))
      }.bind(this),
    )
  },
  getElementCoords(domElement) {
    return {
      top: domElement.getBoundingClientRect().top + window.scrollY,
      bottom: domElement.getBoundingClientRect().bottom + window.scrollY,
      left: domElement.getBoundingClientRect().left + window.scrollX,
      right: domElement.getBoundingClientRect().right + window.scrollX,
      height: domElement.getBoundingClientRect().height,
      width: domElement.getBoundingClientRect().width,
    }
  },
}
