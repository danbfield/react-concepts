export default `import withInteractable from '../helpers/withInteractable'
import { Paragraph } from '../components'

const InteractableParagraph = withInteractable(Paragraph)

<InteractableParagraph>
  <CodeSnippit
    code="const InteractableParagraph = withInteractable(Paragraph)"
    displayInline
  />
</InteractableParagraph>
`
