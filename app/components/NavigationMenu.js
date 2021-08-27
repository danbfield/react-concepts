import { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default function NavigationMenu({ children, items }) {
  const [menuIsHidden, setMenuIsHidden] = useState(false)

  const toggleMenu = () => setMenuIsHidden(!menuIsHidden)

  const menuText = menuIsHidden ? 'Show 🙉' : 'Hide 🙈'

  return (
    <>
      <nav>
        <ul>
          <li>
            <a className="mobile__hide-menu" onClick={toggleMenu} href="#">
              {menuText}
            </a>
          </li>
          {!menuIsHidden &&
            items.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>{item.text}</Link>
              </li>
            ))}
        </ul>
      </nav>
      {children}
    </>
  )
}

NavigationMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}
