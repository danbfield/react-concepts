import NextLink from 'next/link'
import PropTypes from 'prop-types'

export default function Link({ children, href }) {
  return (
    <NextLink href={href}>
      <a className="text-blue-600 hover:underline">{children}</a>
    </NextLink>
  )
}

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  href: PropTypes.string.isRequired,
}
