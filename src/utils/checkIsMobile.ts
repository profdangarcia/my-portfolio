const checkIsMobile = (): boolean => {
  const windowWidth = window.innerWidth
  return windowWidth < 1024
}

export default checkIsMobile
