export default `import { double } from '../helpers/Double'

const handleRegularAdd = () => {
  setRegularValue(double(regularValue))
}

<Button changeHandler={handleRegularAdd}>
  Double Regular: {regularValue}
</Button>

const handleDyanmicAdd = () => {
  import('../helpers/Double').then((split) => {
    setDynamicValue(split.double(dynamicValue))
  })
}

<Button changeHandler={handleDyanmicAdd}>
  Double Dyanamic: {dynamicValue}
</Button>
`
