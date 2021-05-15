import PropTypes from 'prop-types'

export default function Subheading({ children }) {
  return <h2>{children}</h2>
}

Subheading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
