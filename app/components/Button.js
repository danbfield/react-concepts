import PropTypes from 'prop-types'

export default function Button({ changeHandler, children }) {
  return <button onClick={changeHandler}>{children}</button>
}

Button.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
