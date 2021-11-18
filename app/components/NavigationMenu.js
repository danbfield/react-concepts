import { useState } from 'react'
import PropTypes from 'prop-types'
import MenuIcon from './MenuIcon'

export default function NavigationMenu({ items }) {
  const [menuIsHidden, setMenuIsHidden] = useState(false)

  const toggleMenu = () => setMenuIsHidden(!menuIsHidden)

  const menuText = menuIsHidden ? 'Show 🙉' : 'Hide 🙈'

  return (
    <>
      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        <a href="/" class="px-4 text-white flex items-center space-x-2">
          <span className="text-2xl font-bold">React Concepts</span>
        </a>
        <button className="p-4 focus:outline-none focus:bg-gray-700">
          <MenuIcon />
        </button>
      </div>
      <div className="bg-blue-800 text-blue-100 w-1/4 space-y-6 py-8 px-4 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out md:relative md:translate-x-0">
        <a href="/" class="px-4 text-white flex items-center space-x-2">
          <span className="text-2xl font-bold">React Concepts</span>
        </a>
        <nav>
          <ul>
            <li>
              <a
                className="mobile__hide-menu block py-2.5 px-4 rounded hover:bg-blue-700 transition duration-200"
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
                    className="block py-2.5 px-4 rounded hover:bg-blue-700 transition duration-200"
                    href={item.url}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

NavigationMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}
