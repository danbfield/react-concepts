import { useState } from 'react'
import PropTypes from 'prop-types'
import MenuIcon from './MenuIcon'

const mainMenuStyle = [
  'bg-blue-800',
  'text-blue-100',
  'w-1/4',
  'space-y-6',
  'py-8',
  'px-4',
  'absolute',
  'inset-y-0',
  'left-0',
  'transform',
  '-translate-x-full',
  'transition',
  'duration-200',
  'ease-in-out',
  'md:relative',
  'md:translate-x-0',
]

export default function NavigationMenu({ items }) {
  const [menuClasses, setMenuClasses] = useState(mainMenuStyle)

  const handleMobileButtonClick = () => {
    const translateClass = '-translate-x-full'

    const array = menuClasses.includes(translateClass)
      ? menuClasses.filter((element) => element !== '-translate-x-full')
      : [...menuClasses, translateClass]

    setMenuClasses(array)
  }

  return (
    <>
      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        <a href="/" className="px-4 text-white flex items-center space-x-2">
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
