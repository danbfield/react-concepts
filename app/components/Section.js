import PropTypes from 'prop-types'

export default function Section({ children }) {
  return <section>{children}</section>
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
