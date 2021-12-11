import PropTypes from 'prop-types'
import { Code, monoBlue } from 'react-code-blocks'

export default function CodeSnippit({
  displayInline,
  code,
  language,
  showLineNumbers,
  wrapLongLines,
}) {
  return (
    <span className={`${displayInline ? '' : 'block'} my-4`}>
      <Code
        language={language}
        showLineNumbers={showLineNumbers}
        text={code}
        theme={monoBlue}
        wrapLongLine={wrapLongLines}
      />
    </span>
  )
}

CodeSnippit.propTypes = {
  code: PropTypes.string.isRequired,
  displayInline: PropTypes.bool,
  language: PropTypes.string,
  showLineNumbers: PropTypes.bool,
  wrapLongLines: PropTypes.bool,
}

CodeSnippit.defaultProps = {
  displayInline: false,
  language: 'javascript',
  showLineNumbers: false,
  wrapLongLines: true,
}
