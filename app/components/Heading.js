import PropTypes from 'prop-types'

export default function Heading({ children }) {
  return <h1 className="mb-4 text-2xl text-blue-700">{children}</h1>
}

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
