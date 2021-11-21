import PropTypes from 'prop-types'

export default function Section({ children }) {
  return <section className="mb-4">{children}</section>
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
