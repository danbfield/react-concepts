export default `// Fragment allows us to use key={id} otherwise we could use <> ... </>
import { Fragment } from 'react'

const items = [
  { id: 1, name: 'SONY 102HB12', description: 'Headphones' },
  { id: 2, name: 'SONY 292LK90', description: 'Microphone' },
]

const ItemFragment = (item) => (
  <Fragment key={item.id}>
    <dt>{item.name}</dt>
    <dd>{item.description}</dd>
  </Fragment>
)

// render method ...
<dl>{items.map((item) => ItemFragment(item))}</dl>`
