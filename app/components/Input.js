import PropTypes from 'prop-types'

export default function Input({
  htmlFor,
  id,
  label,
  onChange,
  required,
  type,
  value,
}) {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-gray-700 font-bold mb-2" htmlFor={htmlFor}>
          {label}
        </label>
      )}
      <input
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 hover:border-blue-300 focus:outline-none focus:border-blue-500 focus:shadow-outline"
        id={id}
        onChange={onChange}
        required={required}
        type={type}
        value={value}
      />
    </div>
  )
}

Input.propTypes = {
  htmlFor: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Input.defaultProps = {
  htmlFor: null,
  label: null,
  required: false,
  value: null,
}
