import PropTypes from 'prop-types'

export default function Subheading({ children }) {
  return <h2 className="mb-4 text-xl text-blue-500">{children}</h2>
}

Subheading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
