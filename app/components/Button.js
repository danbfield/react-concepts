import PropTypes from 'prop-types'

export default function Button({ changeHandler, children }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-2"
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
}
