import 'tailwindcss/tailwind.css'
import { NavigationMenu } from '../components'
import { AnimatePresence } from 'framer-motion'

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
    <div className="min-h-screen md:flex">
      <NavigationMenu items={items} />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <div className="flex-1 p-10 text-xl md:mr-20">
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </div>
  )
}

export default MyApp
