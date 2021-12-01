import { CodeBlock, vs2015 } from 'react-code-blocks'

const language = 'javascript'
const showLineNumbers = true

export default function ExampleCodeBlock({ code }) {
  return (
    <span className="my-4">
      <CodeBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={vs2015}
      />
    </span>
  )
}
