export default `import ReactDOM from 'react-dom'

const Portal = ({ children, domLocation }) =>
  ReactDOM.createPortal(children, domLocation)

export default Portal
`
