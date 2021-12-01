export default `const items = [
  { id: 1, name: 'SONY 102HB12', description: 'Headphones' },
  { id: 2, name: 'SONY 292LK90', description: 'Microphone' },
]

const ItemDiv = (item) => (
  <div key={item.id}>
    <dt>{item.name}</dt>
    <dd>{item.description}</dd>
  </div>
)

// render method ...
<dl>{items.map((item) => ItemDiv(item))}</dl>`
