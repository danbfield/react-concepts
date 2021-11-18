import { useState } from 'react'
import PropTypes from 'prop-types'
import MenuIcon from './MenuIcon'

const mainMenuStyle = [
  '-translate-x-full',
  'absolute',
  'bg-blue-800',
  'duration-200',
  'ease-in-out',
  'inset-y-0',
  'left-0',
  'md:relative',
  'md:translate-x-0',
  'px-2',
  'py-7',
  'space-y-6',
  'text-blue-100',
  'transform',
  'transition',
  'w-64',
]

const mobileMenuStyle = []

export default function NavigationMenu({ items }) {
  const [menuClasses, setMenuClasses] = useState(mainMenuStyle)
  const [displayingMobileMenu, setDisplayingMobileMenu] = useState(false)

  const handleMobileButtonClick = () => {
    const translateClass = '-translate-x-full'

    const array = menuClasses.includes(translateClass)
      ? menuClasses.filter((element) => element !== '-translate-x-full')
      : [...menuClasses, translateClass]

    setMenuClasses(array)
    // setDisplayingMobileMenu(!displayingMobileMenu)
    // setMenuClasses(displayingMobileMenu ? mainMenuStyle : mobileMenuStyle)
  }

  return (
    <>
      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        <a href="/" className="block p-4 text-white font-bold">
          <span className="text-2xl font-bold">React Concepts</span>
        </a>
        <button
          className="p-4 focus:outline-none focus:bg-gray-700"
          onClick={handleMobileButtonClick}
        >
          <MenuIcon />
        </button>
      </div>
      <div className={menuClasses.join(' ')}>
        <a href="/" className="px-4 text-white flex items-center space-x-2">
          <span className="text-2xl font-bold">React Concepts</span>
        </a>
        <nav>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <a
                  className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
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
