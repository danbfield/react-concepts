import PropTypes from 'prop-types'

export default function Input({ id, onChange, required, type, value }) {
  return (
    <input
      id={id}
      onChange={onChange}
      required={required}
      type={type}
      value={value}
    />
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Input.defaultProps = {
  required: false,
  value: null,
}
