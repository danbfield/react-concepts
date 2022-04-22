import PropTypes from 'prop-types'
import { NavigationLink } from 'components'

export default function Menu({ items, handleClick }) {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <li key={index} data-testid={item.text}>
            <NavigationLink item={item} handleClick={handleClick} />
          </li>
        ))}
      </ul>
  </nav>
  )
}

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func,
}

Menu.defaultProps = {
  handleClick: null,
}
