import Link from 'next/link'

export default function Custom404() {
  return (
    <main>
      <h1>404</h1>
      <p>You won't be able to do much here.</p>
      <p>
        It's probably best to go <Link href='/'>home</Link>.
      </p>
    </main>
  )
}
