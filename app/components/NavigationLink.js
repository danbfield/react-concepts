import Link from 'next/link'
import PropTypes from 'prop-types'

export default function NavigationLink({ item, handleClick }) {
  const { text, url } = item

  return (
    <Link href={url}>
      <a
        className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
        onClick={handleClick}
      >
        {text}
      </a>
  </Link>
  )
}

NavigationLink.propTypes = {
  item: PropTypes.object.isRequired,
  handleClick: PropTypes.func,
}

NavigationLink.defaultProps = {
  handleClick: null,
}
