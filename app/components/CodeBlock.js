import PropTypes from 'prop-types'
import { CodeBlock as ReactCodeBlock, monoBlue } from 'react-code-blocks'

export default function CodeBlock({ code, language, showLineNumbers }) {
  return (
    <span className="block my-4">
      <ReactCodeBlock
        language={language}
        showLineNumbers={showLineNumbers}
        text={code}
        theme={monoBlue}
      />
    </span>
  )
}

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string,
  showLineNumbers: PropTypes.bool,
}

CodeBlock.defaultProps = {
  language: 'javascript',
  showLineNumbers: false,
}
