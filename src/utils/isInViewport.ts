const isInViewport = (el: Element): boolean => {
  const rect = el.getBoundingClientRect()
  const elementHeight = el.clientHeight
  console.log(rect.top, el, elementHeight)
  return (
    rect.top <= elementHeight / 2 &&
    rect.left >= 0 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

export default isInViewport
