import { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default function NavigationMenu({ items }) {
  const [menuIsHidden, setMenuIsHidden] = useState(false)

  const toggleMenu = () => setMenuIsHidden(!menuIsHidden)

  const menuText = menuIsHidden ? 'Show 🙉' : 'Hide 🙈'

  return (
    <div>
      {/* Logo */}
      {/* Navigation */}
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
    </div>
  )
}

NavigationMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}
