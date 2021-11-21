import Link from 'next/link'
import PropTypes from 'prop-types'

export default function InteractableLink({ children, href }) {
  return (
    <Link href={href}>
      <a className="text-blue-600 hover:underline">{children}</a>
    </Link>
  )
}

InteractableLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  href: PropTypes.string.isRequired,
}
