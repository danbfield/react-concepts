import PropTypes from 'prop-types'

export default function Button({ changeHandler, children, disabled }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-2 disabled:opacity-50"
      disabled={disabled}
      onClick={changeHandler}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  disabled: false,
}
