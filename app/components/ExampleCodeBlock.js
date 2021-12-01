import { CodeBlock, monoBlue } from 'react-code-blocks'

const language = 'javascript'
const showLineNumbers = false

export default function ExampleCodeBlock({ code }) {
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
