import '../styles/globals.css'
import { NavigationMenu as WithNavigation } from '../components'

const items = [
  { url: '/', text: 'Index' },
  { url: '/accessibility', text: 'Accessibility' },
  { url: '/code-splitting', text: 'Code Splitting' },
  { url: '/context', text: 'Context' },
  { url: '/dom-and-refs', text: 'DOM and Refs' },
  { url: '/error-boundaries', text: 'Error Boundaries' },
  { url: '/fragments', text: 'Fragments' },
  { url: '/higher-order-components', text: 'Higher Order Components' },
  { url: '/optimization', text: 'Optimization' },
  { url: '/portals', text: 'Portals' },
  { url: '/profiler', text: 'Profiler' },
  { url: '/reconciliation', text: 'Reconciliation' },
  { url: '/render-props', text: 'Render Props' },
  { url: '/strict-mode', text: 'Strict Mode' },
  { url: '/type-checking', text: 'Type Checking' },
  { url: '/uncontrolled-components', text: 'Uncontrolled Components' },
]

function MyApp({ Component, pageProps }) {
  return (
    <WithNavigation items={items}>
      <Component {...pageProps} />
    </WithNavigation>
  )
}

export default MyApp
