const observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      console.log('Element is fully visible in screen')
    }
  },
  { threshold: [1] }
)

export default observer
