import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'

export default function NavigationMenu({ items }) {
  const [belowMediumBreakpoint, setBelowMediumBreakpoint] = useState(false)

  useEffect(() => {
    if (window) {
      setBelowMediumBreakpoint(window.innerWidth < 768)
    }

    window.addEventListener('resize', () => {
      setBelowMediumBreakpoint(window.innerWidth < 768)
    })
  }, [])

  return (
    <>
      {belowMediumBreakpoint ? (
        <MenuMobile items={items} />
      ) : (
        <MenuDesktop items={items} />
      )}
    </>
  )
}

NavigationMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}
