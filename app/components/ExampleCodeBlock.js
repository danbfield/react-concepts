import PropTypes from 'prop-types'
import { CodeBlock, monoBlue } from 'react-code-blocks'

export default function ExampleCodeBlock({ code, language, showLineNumbers }) {
  return (
    <span className="block my-4">
      <CodeBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={monoBlue}
      />
    </span>
  )
}

ExampleCodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string,
  showLineNumbers: PropTypes.bool,
}

ExampleCodeBlock.defaultProps = {
  language: 'javascript',
  showLineNumbers: false,
}
