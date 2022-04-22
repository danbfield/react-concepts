import { NavigationLink } from 'components'

export default function Menu({ items, handleClick }) {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <NavigationLink item={item} handleClick={handleClick} />
          </li>
        ))}
      </ul>
  </nav>
  )
}
