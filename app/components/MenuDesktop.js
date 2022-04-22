import PropTypes from 'prop-types'
import Link from 'next/link'
import { convertArrayIntoString } from '../helpers/ArrayHelpers'
import { Menu } from 'components'

const mainMenuStyle = [
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

export default function MenuDesktop({ items }) {
  const currentClasses = convertArrayIntoString(mainMenuStyle)

  return (
    <div className={currentClasses}>
      <Link href="/">
        <a className="px-4 text-white flex items-center space-x-2">
          <span className="text-2xl font-bold">React Concepts</span>
        </a>
      </Link>
      <Menu items={items} />
    </div>
  )
}

MenuDesktop.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}
