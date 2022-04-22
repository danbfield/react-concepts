import { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import MenuIcon from './MenuIcon'
import { convertArrayIntoString } from '../helpers/ArrayHelpers'
import { Menu } from 'components'

const closedMobileMenu = [
  '-translate-x-full',
  'absolute',
  'bg-blue-800',
  'inset-y-0',
  'left-0',
  'md:relative',
  'md:translate-x-0',
  'px-2',
  'py-7',
  'space-y-6',
  'text-blue-100',
  'transform',
]

const openMobileMenu = [
  'bg-blue-800',
  'duration-100',
  'ease-in-out',
  'h-full',
  'inset-y-0',
  'px-4',
  'py-2',
  'relative',
  'space-y-6',
  'text-blue-100',
  'text-center',
  'transition',
]

export default function MenuMobile({ items }) {
  const [menuClasses, setMenuClasses] = useState(closedMobileMenu)
  const [displayingMobileMenu, setDisplayingMobileMenu] = useState(false)

  const handleMobileButtonClick = () => {
    setDisplayingMobileMenu(!displayingMobileMenu)
    setMenuClasses(displayingMobileMenu ? openMobileMenu : closedMobileMenu)
  }

  const currentClasses = convertArrayIntoString(menuClasses)

  return (
    <>
      <div className="bg-blue-800 text-gray-100 flex justify-between md:hidden">
        <Link href="/">
          <a className="block p-4 text-white font-bold">
            <span className="text-2xl font-bold">React Concepts</span>
          </a>
        </Link>
        <button
          className="p-4 focus:outline-none focus:bg-blue-700"
          onClick={handleMobileButtonClick}
        >
          <MenuIcon />
        </button>
      </div>
      <div className={currentClasses}>
        <Menu items={items} handleClick={handleMobileButtonClick} />
      </div>
    </>
  )
}

MenuMobile.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}
