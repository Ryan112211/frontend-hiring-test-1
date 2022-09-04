import { useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

const ScrollToTop = ({ children }) => {
  const router = useRouter()
  const { pathname } = router

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
}

ScrollToTop.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ScrollToTop
