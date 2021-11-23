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
    <div>
      {label && <label htmlFor={htmlFor}>{label}</label>}
      <input
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
