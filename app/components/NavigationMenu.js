import { useState } from 'react'
import PropTypes from 'prop-types'
import Homeicon from './HomeIcon'
export default function NavigationMenu({ items }) {
  const [menuIsHidden, setMenuIsHidden] = useState(false)

  const toggleMenu = () => setMenuIsHidden(!menuIsHidden)

  const menuText = menuIsHidden ? 'Show 🙉' : 'Hide 🙈'

  return (
    <div className="bg-blue-800 text-blue-100 w-1/4 space-y-6 py-8 px-4">
      {/* Logo */}
      <a href="/" class="px-4 text-white flex items-center space-x-2">
        <Homeicon />
        <span className="text-2xl font-bold">React Concepts</span>
      </a>
      {/* Navigation */}
      <nav>
        <ul>
          <li>
            <a
              className="mobile__hide-menu block py-2.5 px-4 rounded hover:bg-blue-700"
              onClick={toggleMenu}
              href="#"
            >
              {menuText}
            </a>
          </li>
          {!menuIsHidden &&
            items.map((item, index) => (
              <li key={index}>
                <a
                  className="block py-2.5 px-4 rounded hover:bg-blue-700"
                  href={item.url}
                >
                  {item.text}
                </a>
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
