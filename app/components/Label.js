import PropTypes from 'prop-types'

export default function Main({ children, htmlFor }) {
  return <label htmlFor={htmlFor}>{children}</label>
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  htmlFor: PropTypes.string.isRequired,
}
