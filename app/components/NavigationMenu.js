import PropTypes from 'prop-types'
import Link from 'next/link'

export default function NavigationMenu({ children, items }) {
  return (
    <>
      <nav>
        <ul>
          {items.map((item, index) => (
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
