import PropTypes from 'prop-types'

export default function Paragraph({ children }) {
  return <p>{children}</p>
}

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
